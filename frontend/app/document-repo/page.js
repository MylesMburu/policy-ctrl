'use client';

import { useState, useEffect } from "react";
import axios from "axios";
import { MdDriveFolderUpload } from "react-icons/md";
import { useSession } from "next-auth/react"


import Drawer from "@/components/Drawer";
import Documents from "@/components/Documents";


export default function DocumentRepo() {
    
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [documents, setDocuments] = useState([]);
  const { status } = useSession({
    required: true,
  })

  if (status === "loading") {
    return "Loading ..."
  }

  useEffect(() => {
    // Fetch documents when component mounts
    fetchDocuments();
  }, []);

  const fetchDocuments = async () => {
    try {
      const response = await axios.get('http://localhost:3001/documents');
      setDocuments(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    //Add any metadata to the form data
    formData.append('document', file);
    formData.append('title', title);
    formData.append('category', category);

    setIsLoading(true);

    try {
      const response = await axios.post('http://localhost:3001/upload-document', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
      alert('Document uploaded successfully');
      // Fetch documents again to update the list
      fetchDocuments();
    } catch (error) {
      console.error(error);
    }
    finally {
      setIsLoading(false);
    }
  };

  return (

    <Drawer>
    <div className="container mx-auto p-4">
      <div className="flex justify-center text-2xl text-black mb-4">
      <h1 className="text-center font-semibold">Document Repository</h1>
      <MdDriveFolderUpload className="pt-3 text-2xl"/>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center md:mx-48 mb-4 glassmorphism">
        
        <input 
         type="text"
         placeholder="Document title"
         value={title}
         onChange={(e) => setTitle(e.target.value)}
         className="text-center text-black border-2 border-gray-300 rounded w-64 p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
         />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="text-center text-black border-2 border-gray-300 rounded w-64 p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          >
          <option value="0">Select category</option>
          <option value="1">LAWS AND POLICIES</option>
          <option value="2">INTERNATIONAL AGREEMENTS</option>
          </select>


        <input
         type="file" 
         onChange={handleFileChange} 
         className="mb-2 bg-gray-500 py-1 px-2 rounded-md" />

        <button type="submit" className="bg-green-500 text-white w-max px-4 py-2 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" disabled={isLoading}>
          {isLoading ? 'Uploading...' : 'Upload Document'}
        </button>

      </form>
      <div className="grid grid-cols-1 gap-4">
          {documents.map((document) => (
            <div key={document._id} className="bg-gray-100 p-4 rounded shadow mx-24"> 
              <h3 className="font-semibold text-black">{document.title}</h3>
              <p className="text-sm text-gray-500">Category: {document.category}</p>
              <p className="text-sm text-gray-500">Uploaded on {new Date(document.uploadedAt).toLocaleDateString()}</p>
              {/* Download Button */}
              <a
                href={document.s3Url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
              >
                Download
              </a>
            </div>
          ))}
        </div>
    </div>
    </Drawer>

  );
}
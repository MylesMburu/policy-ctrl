'use client';

import { useState, useEffect } from "react";
import axios from "axios";
import { MdDriveFolderUpload } from "react-icons/md";

import Drawer from "@/components/Drawer";
import Documents from "@/components/Documents";


export default function DocumentRepo() {
  const [file, setFile] = useState(null);
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    // Fetch documents when component mounts
    fetchDocuments();
  }, []);

  const fetchDocuments = async () => {
    try {
      const response = await axios.get('/documents');
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
    formData.append('document', file);
    // Add any additional metadata fields here

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
         className="text-center text-black border-2 border-gray-300 rounded w-64 p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
         />

        <select
          className="text-center text-black border-2 border-gray-300 rounded w-64 p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          >
          <option value="0">Select category</option>
          <option value="1">Category 1</option>
          <option value="2">Category 2</option>
          <option value="3">Category 3</option>
          </select>


        <input
         type="file" 
         onChange={handleFileChange} 
         className="mb-2 bg-gray-500 py-1 px-2 rounded-md" />

        <button type="submit" className="bg-green-500 text-white w-max px-4 py-2 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
          Upload Document
        </button>
      </form>
      <div className="grid grid-cols-1 gap-4">
        {Documents.map((document) => (
          <div key={document.id} className="bg-gray-100 p-4 rounded shadow mx-24">
            <h3 className="font-semibold text-black">{document.name}</h3>
            <p className="text-sm text-gray-500">Uploaded on {new Date(document.uploadedAt).toLocaleDateString()}</p>
            {/* Display other metadata as needed */}
          </div>
        ))}
      </div>
    </div>
    </Drawer>

  );
}
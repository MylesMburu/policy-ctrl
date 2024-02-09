'use client';

import { useState, useEffect } from "react";
import axios from "axios";

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
      const response = await axios.post('/upload-document', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
      // Fetch documents again to update the list
      fetchDocuments();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Drawer>
    <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit} className="mb-4">
        <input type="file" onChange={handleFileChange} className="mb-2" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
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
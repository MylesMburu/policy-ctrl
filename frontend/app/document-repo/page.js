'use client';

import { useState, useEffect } from "react";
import axios from "axios";
import { MdDriveFolderUpload } from "react-icons/md";

import Drawer from "@/components/Drawer";
import Documents from "@/components/Documents";


export default function DocumentRepo() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [documents, setDocuments] = useState([]);

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
    <div className="container">
    {/* Maps and charts */}
      <div className="flex m-2">
        <div className="flex-2 w-3/5 shadow-lg z-0">
          <div className="flex">
            <h4 className=" font-bold ">Geographical Distribution</h4>
            <div className="ml-auto mr-3 mb-2" >
              <select class="px-2 py-1 border-solid border-blue-600 border-2 rounded-full">
                <option>select country</option>
              </select>
            </div>
          </div>
          <MapContainer 
            center={center}
            zoom={2}
            style={{ height: '70vh'}}
          >
            <TileLayer 
              url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=rjwVCuekcbZL7Q43APim"
              attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
            />
          </MapContainer>
        </div>
        <div className="w-2/5 m-3 shadow-2xl">
              <h4 className="my-2 font-bold text-center">CHART REPRESENTATION</h4>
            <div className="mr-auto  mb-2" >
              
              <Line data={data} options={options} height={250}/>
              
                  
              </div>
            </div>
          ))}
        </div>
    </div>
    </Drawer>

  );
}
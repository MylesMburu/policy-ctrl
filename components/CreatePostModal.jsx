'use client'
import { useState } from 'react';

export default function CreatePostModal({ onClose, onSubmit }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [topicTag, setTopicTag] = useState('');
    const [photo, setPhoto] = useState(null);
  
    const handleSubmit = () => {
      onSubmit({ title, content, topicTag });
      // Reset form or close modal after submission as needed
    };

    const handlePhotoChange = (e) => {
      setPhoto(e.target.files[0]);
    }
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center ">
        <div className="bg-white p-4 rounded-lg w-2/4">
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">Title</label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Post Title"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="content" className="block text-gray-700 text-sm font-bold mb-2">Content</label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="What's on your mind?"
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="topicTag" className="block text-gray-700 text-sm font-bold mb-2">Topic Tag</label>
            <input
              id="topicTag"
              type="text"
              value={topicTag}
              onChange={(e) => setTopicTag(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Topic Tag (e.g., Environment)"
            />
            <div className="mb-4">
            <label htmlFor="photo" className="block text-gray-700 text-sm font-bold mb-2">Photo</label>
            <input
              id="photo"
              type="file"
              onChange={handlePhotoChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          </div>
          <div className="flex justify-between items-center">
            <button onClick={onClose} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
              Close
            </button>
            <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r">
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
  
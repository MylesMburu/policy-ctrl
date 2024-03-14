'use client'

import { useState, useEffect } from "react";
import Image from "next/image"
import Drawer from "@/components/Drawer";
import PostCard from "@/components/PostCard";
import CreatePostModal from "@/components/CreatePostModal";
import { Posts } from "@/utils/dummyPosts";

import forum_bg from "@/public/forum-bg.jpg";

export default function Community(){

    const [posts, setPosts] = useState([]);
    const [showModal, setShowModal] = useState(false);
  
    // Sample CRUD operation handlers
    const handleDelete = (postId) => {
      // API call to delete post
    };
  
    const handleUpdate = (postId) => {
      // API call to update post
    };
  
    const handleSubmitNewPost = () => {
      // API call to create new post
    };
  
    useEffect(()=>{

    })
    return(
        <Drawer>
        <div>
            <div className="relative">
                <Image 
                 src={forum_bg}
                 alt="Community Forum"
                 />
                <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50">
                <h1 className="font-bold text-2xl">Community Forum</h1>
                <p className="font-bold">Ask questions, share ideas, and connect with other climate champions.</p>
                <button className="bg-green-700 px-3 py-2 rounded-md font-bold">Join the conversation</button>
                </div>
            </div>
            <div className="flex flex-col md:grid md:grid-cols-2justify-center items-center ">

            {/* feed */}
            <div>
                <div className="relative">
                    {/* Image and overlay code here */}
                    <button onClick={() => setShowModal(true)} className="bg-green-700 px-3 py-2 rounded-md font-bold">Create Post</button>
                </div>

                <div className="flex flex-col md:grid md:grid-cols-2 gap-4 px-4 justify-center items-center">
                    {Posts.map(post => (
                        <PostCard key={post._id} post={post} onDelete={handleDelete} onUpdate={handleUpdate} />
                    ))}
                </div>
                {showModal && <CreatePostModal onClose={() => setShowModal(false)} onSubmit={handleSubmitNewPost} />}
            </div>
            </div>
        </div>
        </Drawer>
    )}
'use client'

import { useEffect } from "react";
import Image from "next/image"
import forum_bg from "@/public/forum-bg.jpg";

export default function Community(){
    useEffect(()=>{

    })
    return(
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

            </div>
        </div>
    )}
'use client'

import { Nav } from '@/components/Nav';
import { useRef } from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';

export default function Contacts(){
    const form = useRef();

    return(
        <>
        <Nav/>

        <div className='bg-yellow-50 text-black p-8 md:p-16 min-h-screen'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 px-2 md:px-6 pt-8'>
        <div className='text-black'>
        <h2 className='border-b-2 border-black text-black pb-1 mb-4'>Contact Us</h2>
        <div className='px-2 mb-8 md:mb-16'>
            <p>Our team would love to hear from you!</p>
            <p>
            Get in touch with us to share your comments, suggestions, or questions. We'll get back to you as soon as
            possible.
            </p>
        </div>
        <div className='flex flex-col md:flex-row gap-4 bg-green-700 text-white p-3 rounded mb-4'>
            <FiPhoneCall className='mt-1' />
            <h3>+(254)790 007938</h3>
        </div>
        <div className='flex flex-col md:flex-row gap-4 bg-green-700 text-white p-3 rounded mb-4'>
            <HiOutlineMail className='mt-1' />
            <h3 className='text-sm md:text-base'>policyctrl@gmail.com</h3>
        </div>

        </div>
        <div>
        <form className='flex flex-col p-4 md:p-8 w-full md:w-96 text-black' ref={form} onSubmit={()=>{}}>
            <input type='text' name='name' placeholder='Your full name' required className='p-2 rounded-md mb-4' />
            <input type='email' name='email' placeholder='Your email' required className='p-2 rounded-md mb-4' />
            <textarea
            name='message'
            rows='8'
            placeholder='Your message'
            required
            className='p-2 rounded-md mb-4'
            ></textarea>
            <button type='submit' className='py-2 px-4 bg-green-700 text-white w-max rounded-md'>
            Send Message
            </button>
        </form>
        </div>
        </div>
        </div>

        </>
    )
};
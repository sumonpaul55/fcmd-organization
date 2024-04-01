import React from 'react'
import { IoIosArrowForward } from 'react-icons/io';
import BlogDetailsBanner from './BlogDetailsBanner';
import BlogDescription from './BlogDescription';
function BlogDetails() {
    return (
        <main className='pt-2 px-1'>
            <div className="container mx-auto py-6 mt-3">
                <h2 className='flex items-center justify-center lg:justify-start gap-3'>Home <IoIosArrowForward /> Blog  <IoIosArrowForward /><span className='font-bold'>Blog Details</span></h2>
            </div>
            <BlogDetailsBanner />
            <BlogDescription></BlogDescription>
        </main>
    )
}

export default BlogDetails
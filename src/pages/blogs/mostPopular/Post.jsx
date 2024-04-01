import React from 'react'
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';

function Post({ post }) {
    const { title, description, readingTime, category, blog_img, id } = post;
    return (
        <div className='border border-slate-300 rounded-md md:rounded-3xl'>
            <img src={blog_img} alt={title} className='w-full' />
            <div className='p-2 md:p-3 lg:p-6 space-y-2 md:space-y-5'>
                <div className='space-x-1 sm:space-x-4'>
                    <span className='p-2 bg-gray-100 text-sm md:text-base'>{category}</span>
                    <time className='text-sm md:text-base'>{readingTime} min read</time>
                </div>
                <h4 className='text-sm md:text-xl lg:text-2xl font-bold py-1'>{title}</h4>
                <p className='text-sm md:text-base'>{description}</p>

                <Link to={`/blog-details/${id}`}>
                    <button className='flex items-center gap-1 text-primary font-bold text-sm md:text-base'>Read More <IoIosArrowForward /></button>
                </Link>
            </div>
        </div>
    )
}

export default Post
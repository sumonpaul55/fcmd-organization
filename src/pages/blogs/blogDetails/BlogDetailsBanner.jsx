import React from 'react'
import blogDetail1 from '../../../assets/images/blogDetail1.png'
import blogDetails2 from '../../../assets/images/blogDetails2.png'
import blogDetails3 from '../../../assets/images/blogDetails3.png'
import postAuthor from '../../../assets/images/postAuthor.png'
import { GoDotFill } from "react-icons/go";
import { PiLinkSimpleBold } from "react-icons/pi";
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa6';
const BlogDetailsBanner = () => {
    return (
        <section className='pb-10'>
            <div className="container mx-auto">
                <div className='md:space-y-5'>
                    <h1 className='font-bold md:text-2xl lg:text-5xl py-3 lg:py-6'>Blog title heading will</h1>
                    <div className='grid sm:grid-cols-2 gap-4'>
                        <div className='flex items-center gap-4 py-3 lg:py-6'>
                            <img src={postAuthor} alt="post Author" className='size-14' />
                            <div>
                                <h4 className='font-bold text-sm'>Full Name</h4>
                                <div className='flex items-center gap-3 text-sm'>
                                    <time>11 Jan 2022</time>
                                    <GoDotFill />
                                    <span>5 min read</span>
                                </div>
                            </div>
                        </div>
                        <ul className='flex items-center justify-start sm:justify-end gap-4'>
                            <li className='size-10 bg-gray-100 flex items-center justify-center rounded-full'><PiLinkSimpleBold size={24} /></li>
                            <li className='size-10 bg-gray-100 flex items-center justify-center rounded-full'><FaLinkedin size={24} /></li>
                            <li className='size-10 bg-gray-100 flex items-center justify-center rounded-full'><FaTwitter size={24} /></li>
                            <li className='size-10 bg-gray-100 flex items-center justify-center rounded-full'><FaFacebook size={24} /></li>
                        </ul>
                    </div>
                </div>
                <div className='grid grid-cols-3 gap-1 sm:gap-2 md:gap-4 lg:gap-6 py-6'>
                    <img src={blogDetail1} alt="blog detail" />
                    <img src={blogDetails2} alt="blog detail" />
                    <img src={blogDetails3} alt="blog detail" />
                </div>
            </div>
        </section>
    )
}

export default BlogDetailsBanner
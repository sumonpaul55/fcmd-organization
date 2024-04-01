import React from 'react'
import './blogs.css'
import { MdArrowBack } from 'react-icons/md'
import { Link } from 'react-router-dom'
function BlogBanner() {
    return (
        <section className=''>
            <div className="container mx-auto">
                <div className='py-10 min-h-[70vh] flex items-center blog-banner sm:px-4 px-2 rounded-2xl'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 sm:mt-32'>
                        <div className='space-y-6'>
                            <h1 className='text-sm text-white sm:text-black sm:text-4xl font-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                            <Link className='mt-8 block'>
                                <button className='flex items-center py-2 px-3 md:px-4 gap-3 md:py-3 rounded-md bg-primary text-white'>Read More <span className='rotate-[145deg]'><MdArrowBack size={20} color='white' /></span></button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlogBanner
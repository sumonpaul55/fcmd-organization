import React from 'react'
import MyHelmet from '../../shared/navbar/MyHelmet'
import { IoIosArrowForward } from "react-icons/io";
import BlogBanner from './BlogBanner';
import MostPopular from './mostPopular/MostPopular';

function Blogs() {
    return (
        <>
            <MyHelmet siteTitle="Blogs"></MyHelmet>
            <main className='min-h-screen px-1 sm:px-0'>
                <div className="container mx-auto py-6 mt-3">
                    <h2 className='flex items-center gap-3'>Home <IoIosArrowForward /> <span className='font-bold'>Blog</span></h2>
                </div>
                <BlogBanner></BlogBanner>
                <MostPopular></MostPopular>
            </main>
        </>
    )
}

export default Blogs
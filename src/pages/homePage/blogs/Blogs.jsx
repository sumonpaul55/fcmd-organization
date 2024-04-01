import React from 'react'
import PageTitle from '../../../components/sectionTitle/SectionTitle'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { IoIosArrowForward } from "react-icons/io";

function Blogs() {
    const { data: blogs } = useQuery({
        queryKey: ["blogs"],
        queryFn: () => axios.get('database.json')
            .then(data => {
                return data.data.blogs
            })
    })
    {/* mathmetical terms for calculate time */ }


    // const time = blogs?.map(blog => {
    //     const Totalsecond = Math.round((Number(blog?.time)) / 1000)
    //     // individual second
    //     const seconds = Totalsecond % 60;
    //     const roundSecond = Totalsecond - seconds;

    //     // individual minutes
    //     const totalMinute = roundSecond / 60;
    //     const minutes = totalMinute % 60;
    //     const roundMinutes = totalMinute - minutes;

    //     //hours
    //     const totalHours = roundMinutes / 60;
    //     const hours = totalHours % 24;
    //     const roundHours = totalHours - hours;
    //     //days
    //     const totalDays = roundHours / 24;
    //     const days = totalDays % 24;
    //     const roundDays = totalDays - days;
    //     // months
    //     const totalMonths = roundDays
    //     const months = totalDays / 30;
    //     console.log(days)
    //     return {
    //         seconds, minutes, hours
    //     }
    // })
    return (
        <section className='md:py-20'>
            <div className="container mx-auto">
                <PageTitle sectionTitle="Our" coloredTittle="Blog Post" styles="text-center my-10"></PageTitle>
                <div className='grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6 gap-y-5'>
                    {
                        blogs?.slice(0, 6).map((blog, idx) => (
                            <div key={idx} className='border border-slate-300 rounded-md md:rounded-3xl'>
                                <img src={blog?.blog_img} alt={blog?.title} className='w-full' />
                                <div className='p-2 md:p-6 space-y-2 md:space-y-5'>
                                    <div className='space-x-1 sm:space-x-4'>
                                        <span className='p-2 bg-gray-100 text-sm md:text-base'>{blog?.category}</span>
                                        <time className='text-sm md:text-base'>{blog?.readingTime} min read</time>
                                    </div>
                                    <h4 className='text-sm md:text-2xl font-bold py-1'>{blog?.title}</h4>
                                    <p className='text-sm md:text-base'>{blog?.description}</p>
                                    <button className='flex items-center gap-1 text-primary font-bold text-sm md:text-base'>Read More <IoIosArrowForward /></button>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='text-center'>
                    <button className='bg-primary text-white py-2 px-5 rounded-lg mt-10 text-sm md:text-base'>See More</button>
                </div>
            </div>
        </section>
    )
}

export default Blogs
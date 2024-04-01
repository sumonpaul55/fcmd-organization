import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import MyHelmet from '../../shared/navbar/MyHelmet';
import "./events.css"
import { IoIosArrowForward } from 'react-icons/io';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import EachEvents from './EachEvents';
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md';
function UpCommingEvent() {
    const { data: upcommingevent } = useQuery({
        queryKey: ["upcommingEvents"],
        queryFn: () => axios.get("database.json")
            .then(data => {
                return data?.data?.upCommingEvents
            })
    })

    return (
        <>
            <MyHelmet siteTitle="Up Comming events"></MyHelmet>
            <main className='px-2 sm:px-0'>
                <section className=''>
                    <div className="container mx-auto py-6 mt-3">
                        <h2 className='flex items-center gap-3'>Home <IoIosArrowForward /> <span className='font-bold'>Upcomming Events</span></h2>
                    </div>
                    <div className='container mx-auto events-banner rounded-lg'>
                        <Swiper pagination={true} autoplay={true} modules={[Pagination]} className="mySwiper">
                            <SwiperSlide>  <div className=''>
                                <div className='text-center space-y-6 py-10 sm:py-20 px-2'>
                                    <h4 className='text-lg sm:text-xl md:text-2xl lg:text-3xl'>
                                        <span className='text-primary'>Upcomming </span>
                                        <span className='font-bold'>Events</span>
                                    </h4>
                                    <p className='md:max-w-[40%] mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit.  . </p>
                                </div>
                            </div>
                            </SwiperSlide>
                            <SwiperSlide>  <div className=''>
                                <div className='text-center space-y-6 py-10 sm:py-20 px-2'>
                                    <h4 className='text-lg sm:text-xl md:text-2xl lg:text-3xl'>
                                        <span className='text-primary'>Upcomming </span>
                                        <span className='font-bold'>Events</span>
                                    </h4>
                                    <p className='md:max-w-[40%] mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit.  . </p>
                                </div>
                            </div>
                            </SwiperSlide>
                            <SwiperSlide>  <div className=''>
                                <div className='text-center space-y-6 py-10 sm:py-20 px-2'>
                                    <h4 className='text-lg sm:text-xl md:text-2xl lg:text-3xl'>
                                        <span className='text-primary'>Upcomming </span>
                                        <span className='font-bold'>Events</span>
                                    </h4>
                                    <p className='md:max-w-[40%] mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit.  . </p>
                                </div>
                            </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </section>
                <section className='py-20 px-2 sm:px-0'>
                    <div className="container mx-auto">
                        <div className='grid grid-cols-2 lg:grid-cols-3 lg:gap-8 gap-4'>
                            {
                                upcommingevent?.map((items, idx) => (
                                    <EachEvents key={idx} events={items} btnStyle="py-2 px-7 rounded-md bg-primary text-white sm:px-10 sm:text-xl md:px-16"></EachEvents>
                                ))
                            }
                        </div>
                    </div>
                    <div className='flex justify-center gap-2 md:gap-6 items-center mt-20'>
                        <button className='border size-12 flex items-center justify-center rounded-md'><MdOutlineArrowBackIos /></button>
                        <button className='border duration-200 size-12 flex items-center text-primary justify-center hover:bg-primary hover:text-white md:font-bold rounded-md border-primary'>1</button>
                        <button className='border duration-200 size-12 flex items-center text-primary justify-center hover:bg-primary hover:text-white md:font-bold rounded-md border-primary'>2</button>
                        <button className='border duration-200 size-12 flex items-center text-primary justify-center hover:bg-primary hover:text-white md:font-bold rounded-md border-primary'>3</button>
                        <button className='border duration-200 size-12 flex items-center text-primary justify-center hover:bg-primary hover:text-white md:font-bold rounded-md border-primary'>4</button>
                        <button className='border duration-200 size-12 flex items-center text-primary justify-center hover:bg-primary hover:text-white md:font-bold rounded-md border-primary'>5</button>
                        <button className='border size-12 flex items-center justify-center rounded-md'><MdOutlineArrowForwardIos /></button>
                    </div>
                </section>
            </main>
        </>
    )
}

export default UpCommingEvent
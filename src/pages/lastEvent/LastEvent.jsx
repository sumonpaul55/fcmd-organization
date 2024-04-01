import React from 'react'
import MyHelmet from '../../shared/navbar/MyHelmet';
// import "./events.css"
import { IoIosArrowForward } from 'react-icons/io';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md';
import EachEvents from './../upCommingEvent/EachEvents';
import SectionTitle from './../../components/sectionTitle/SectionTitle';
import { Link } from 'react-router-dom';
function LastEvent() {
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
                        <h2 className='flex items-center gap-3'>Home <IoIosArrowForward /> <span className='font-bold'>Last Events</span></h2>
                    </div>
                    <div className='container mx-auto'>
                        <SectionTitle sectionTitle="Our" coloredTittle="Last Events" styles="text-center mb-10 italic"></SectionTitle>
                        <p className='text-center max-w-[500px] mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </section>
                <section className='py-20 px-2 sm:px-0'>
                    <div className="container mx-auto">
                        <div className='grid grid-cols-2 lg:grid-cols-3 lg:gap-8 gap-4'>
                            {
                                upcommingevent?.map((items, idx) => (
                                    <Link key={idx} to="/event-details">
                                        <EachEvents events={items} btnStyle="py-1 px-3 rounded-md bg-primary md:bg-white md:border md:border-pink-500 md:text-pink-500 text-white sm:px-10 sm:text-xl md:px-16"></EachEvents>
                                    </Link>
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

export default LastEvent;
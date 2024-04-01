import React from 'react'

import { IoIosArrowForward } from 'react-icons/io';
import SectionTitle from './../../../components/sectionTitle/SectionTitle';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Loading from '../../../components/Loading';
import { FaFacebook, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md';

const AdminPanel = () => {
    const { data: team, isloaded } = useQuery({
        queryKey: ["team"],
        queryFn: () => axios.get('database.json')
            .then(data => {
                return data.data.team
            })
    })
    if (isloaded) {
        return <Loading></Loading>
    }
    return (
        <main>
            <div className="container mx-auto py-6 mt-3">
                <h2 className='flex items-center gap-3'>Home <IoIosArrowForward /> <span className='font-bold'>Blog</span></h2>
            </div>
            <section className='sm:py-20'>
                <div className="container mx-auto">
                    <SectionTitle sectionTitle="Our" coloredTittle="Leadership" styles="text-center mb-10 italic"></SectionTitle>
                    <p className='text-center max-w-[500px] mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit.  . </p>

                    <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-14 md:gap-20 mt-20 px-2 md:px-0'>
                        {
                            team?.map((team, idx) => (
                                <div key={idx} className=''>
                                    <img src={team?.img} alt={team?.name} className='w-full mx-auto' />
                                    <div className='space-y-2 mt-3'>
                                        <h2 className='font-bold text-base md:text-xl'>{team?.name}</h2>
                                        <p className='text-primary text-sm md:text-lg'>{team?.designation}</p>
                                        <ul className='hidden sm:flex gap-5'>
                                            <li><FaXTwitter size={24} color='#777' /></li>
                                            <li><FaFacebook size={24} color='#777' /></li>
                                            <li><FaLinkedin size={24} color='#777' /></li>
                                        </ul>
                                    </div>

                                </div>
                            ))
                        }
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
                </div>

            </section>
        </main>
    )
}

export default AdminPanel
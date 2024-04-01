import React from 'react'
import PageTitle from '../../../components/sectionTitle/SectionTitle'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { MdOutlineArrowBackIos } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { Link } from 'react-router-dom';
import { FaFacebook, FaLinkedin, } from 'react-icons/fa6';

function Speakers() {
    const { data: speaker } = useQuery({
        queryKey: ["speaker"],
        queryFn: () => axios.get('database.json')
            .then(data => {
                return data.data.speakers
            })
    })
    return (
        <section className='my-20'>
            <div className="container mx-auto">
                <PageTitle sectionTitle="Last Year" coloredTittle="Speaker List" styles="text-center py-10"></PageTitle>
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-7'>
                    {
                        speaker?.map((speaker, idx) => (
                            <div key={idx} className='shadow-md rounded-md border overflow-hidden group cursor-pointer'>
                                <img src={speaker?.speake_img} alt={speaker?.speakesName} className='p-1 sm:p-2 lg:p-4' style={{ paddingBottom: 0 }} />
                                <div className='h-20 relative'>
                                    <div className='absolute left-3 group-hover:left-[-300%] top-3 duration-300'>
                                        <h4 className='italic text-sm sm:text-base font-bold md:text-2xl'>{speaker?.speakesName}</h4>
                                        <h4 className='text-sm md:text-base'>{speaker?.designation}</h4>
                                    </div>
                                    <div className='absolute left-[300%] group-hover:left-0 top-0 duration-300 bg-slate-100 h-full w-full flex items-center'>
                                        <ul className='flex flex-col gap-2 ml-5'>
                                            <li><Link className='hover:scale-105 duration-200 flex gap-1 items-center'><FaFacebook size={20} />Profile</Link></li>
                                            <li><Link className='hover:scale-105 duration-200 flex gap-1 items-center'><FaLinkedin size={20} />Profile</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='flex justify-center gap-2 md:gap-6 items-center mt-12'>
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
    )
}

export default Speakers
import React from 'react'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Loading from '../../../components/Loading';
// import { FaFacebook, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md';
import { IoIosArrowForward } from 'react-icons/io';
import SectionTitle from './../../../components/sectionTitle/SectionTitle';
import { FaLocationArrow, FaPhone } from 'react-icons/fa6';
import { FaMailBulk } from 'react-icons/fa';

const BloodDoner = () => {
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
            <div className="container mx-auto py-6 mt-3 px-2">
                <h2 className='flex items-center gap-3'>Home <IoIosArrowForward /> <span className='font-bold'>Blog</span></h2>
            </div>
            <SectionTitle sectionTitle="Blood" coloredTittle="Donner" styles="text-center mb-3 italic"></SectionTitle>
            <p className='text-center max-w-[500px] mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit.  . </p>

            <section className=''>
                <div className="container mx-auto">

                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20 '>
                        {
                            team?.map((team, idx) => (
                                <div key={idx} className='text-center border p-2 rounded-lg'>
                                    <div className='flex gap-3'>
                                        <img src={team?.img} alt="doner" className='size-32 sm:max-w-[150px] sm:w-full' />
                                        <div className='flex flex-col items-start justify-between'>
                                            <h3 className='font-semibold md:text-lg'>{team?.name}</h3>
                                            <p className='text-sm'>Donated 5 times</p>
                                            <h2 className='font-bold text-primary'>Blood Group: B+</h2>
                                            <address className='flex items-center justify-start text-left text-xs'>
                                                <FaLocationArrow />
                                                <span>Cumilla, Adosho Sodor </span>
                                            </address>
                                        </div>
                                    </div>
                                    <div className='flex gap-2 lg:gap-5 mt-5 flex-col xl:flex-row'>
                                        <div className='flex gap-2 items-center font-medium'>
                                            <FaPhone></FaPhone>
                                            01234565789
                                        </div>
                                        <div className='flex gap-2 items-center font-medium'>
                                            <FaMailBulk></FaMailBulk>
                                            example@gmail.com
                                        </div>
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
            <section className='py-20'>
                <div className="container mx-auto">
                    <div className='rounded-xl bg-red-800 p-7 sm:px-20 sm:py-32 flex gap-9 flex-col items-start lg:items-center lg:flex-row'>
                        <div className='flex-1 space-y-5'>
                            <h1 className='text-2xl sm:text-3xl md:text-4xl xl:text-5xl text-white font-semibold'>Empower Lives through Blood Donation  </h1>
                            <p className='text-slate-200'>Join the Movement for Positive Change</p>
                        </div>
                        <div className='flex-1 space-x-6 flex justify-center'>
                            <button className='bg-white rounded-lg text-red-800 py-2 px-4 md:py-3 md:px-6 hover:bg-transparent hover:border border hover:text-white duration-200'>Join as a Volunteer</button>
                            <button className='border rounded-lg text-white hover:text-red-800 hover:bg-white duration-200 py-2 px-4 md:py-3 md:px-6'>Registration</button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default BloodDoner
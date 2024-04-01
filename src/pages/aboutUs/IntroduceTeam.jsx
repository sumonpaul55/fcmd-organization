import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import Loading from '../../components/Loading'
import { FaFacebook, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md';

const IntroduceTeam = () => {
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
        <section className='py-20'>
            <div className="container mx-auto">
                <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-y-20'>
                    {
                        team?.map((team, idx) => (
                            <div key={idx} className='text-center'>
                                <img src={team?.img} alt={team?.name} className='size-32 mx-auto' />
                                <div className='space-y-4'>
                                    <h2 className='font-bold text-base md:text-xl'>{team?.name}</h2>
                                    <p className='text-primary text-sm md:text-lg'>{team?.designation}</p>
                                    <ul className='flex gap-5 justify-center'>
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
    )
}

export default IntroduceTeam
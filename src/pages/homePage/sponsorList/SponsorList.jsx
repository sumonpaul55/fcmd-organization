import React from 'react'
import PageTitle from '../../../components/sectionTitle/SectionTitle'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Link } from 'react-router-dom'

const SponsorList = () => {
    const { data: sponsors } = useQuery({
        queryKey: ["sponsors"],
        queryFn: () => axios.get("database.json")
            .then(data => {
                return data.data.sponsorList;
            })
    })
    return (
        <section className='md:py-20'>
            <div className="container mx-auto">
                <PageTitle sectionTitle="Last Year" styles="text-center my-10" coloredTittle="Sponsor List"></PageTitle>
                <div className='grid grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6'>
                    {
                        sponsors?.slice(0, 15).map((sponsor, idx) => (
                            <Link key={idx} to={`${sponsor?.website_url}`} target="_blank" className='border p-3 md:p-6 lg:p-10 rounded-md group relative overflow-hidden shadow'>
                                <div className=''>
                                    <img src={sponsor?.logo} alt={sponsor?.sponsorsName} className='w-full' />
                                    <div className='absolute duration-200 left-0 font-semibold top-full group-hover:top-0 flex justify-center items-end pb-2 bg-opacity-80 text-white bg-primary w-full h-full'>
                                        <h2 className='md:text-xl'>{sponsor?.sponsorsName}</h2>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </section >
    )
}

export default SponsorList
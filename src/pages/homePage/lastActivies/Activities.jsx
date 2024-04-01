import React, { } from 'react'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Pagetitle from '../../../components/sectionTitle/SectionTitle';
import handPen from "../../../assets/handPen.png";
import sky from "../../../assets/sky.png";


function Activities() {
    const { data: activities, } = useQuery({
        queryKey: ['activity'],
        queryFn: () => axios.get("database.json")
            .then(data => {
                return data.data.lastActivities
            })
    })


    return (
        <section className='py-20'>
            <div className="container mx-auto">
                <Pagetitle sectionTitle="Last" coloredTittle="activities" styles="text-center my-5" />
                <p className='lg:text-lg text-center max-w-xl mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tris</p>
                <div className='py-10'>
                    <div className='grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-5'>
                        {
                            activities?.map((activty, idx) => (
                                <div key={idx} className='border rounded-lg p-2 lg:p-7 space-y-2 md:space-y-4 shadow-lg'>
                                    <div className={`rounded-full justify-center size-12 flex items-center`} style={{ background: activty?.iconBg }}><img src={activty?.icon} alt={activty?.title} /></div>
                                    <h3 className='text-sm md:text-2xl font-bold'>{activty?.title}</h3>
                                    <p className='text-sm md:text-lg line-clamp-2'>{activty?.description}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                {/* Unleashing Global Potential */}
                <div className='py-10 lg:py-20'>
                    <div className='grid grid-cols-2 gap-5 items-center'>
                        <div className='grid grid-cols-2 gap-1 lg:gap-3'>
                            <div>
                                <img src={handPen} alt="Hand Pen" className='w-full mt-8 shadow-lg border p-1 rounded-lg' />
                            </div>
                            <div>
                                <img src={sky} alt="Sky" className='w-full mb-8  shadow-lg border p-1 rounded-lg' />
                            </div>
                        </div>
                        <div className='space-y-3 lg:space-y-6'>
                            <Pagetitle sectionTitle="Unleashing" coloredTittle={["Global", <br key={1} className='hidden lg:block' />, " Potential"]}></Pagetitle>
                            <p className='line-clamp-5 text-sm lg:text-base'>Join our freelance community for boundless opportunities, global collaboration, and creative empowerment. Unleash your potential in a dynamic online space where skills meet prosperity</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Activities
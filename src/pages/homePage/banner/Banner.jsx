import React from 'react'
import bannerImg from "../../../assets/bannerimg.png"
import sliderbg2 from "../../../assets/sliderbg2.png"
import slider3 from "../../../assets/slider3.jpg"
import Buttton from '../../../components/buttons/Buttton'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

function Banner() {
    return (
        <section className='min-h-[85vh] flex items-center justify-center py-10'>
            <div className="container mx-auto">
                <Swiper pagination={true} autoplay={true} modules={[Pagination]} className="mySwiper">
                    <SwiperSlide>  <div className='grid lg:grid-cols-2 gap-5 items-center'>
                        <div className='space-y-7'>
                            <h1 className='text-3xl lg:text-5xl font-bold' style={{ lineHeight: 1.4 }}><span className='font-medium'>Building a Thriving <br className='hidden lg:block' />Community of </span><br className='hidden lg:block' /><span className='text-primary'>Independent Talents</span></h1>
                            <p className='lg:text-lg'>a dynamic hub where independent talents unite, collaborate, and thrive. Whether you re a seasoned pro or just starting out, discover endless.</p>
                            <div className='flex gap-5'>
                                <Buttton styles="bg-primary border text-white hover:bg-white hover:text-primary hover:border border-primary">Blood Donation</Buttton>
                                <Buttton styles="text-primary border border-primary hover:bg-primary hover:text-white">Volunteering</Buttton>
                            </div>
                        </div>
                        <div className='p-4 lg:p-7'>
                            <img src={bannerImg} alt="bannerImg" />
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>  <div className='grid lg:grid-cols-2 gap-5 items-center'>
                        <div className='space-y-7'>
                            <h1 className='text-3xl lg:text-5xl font-bold' style={{ lineHeight: 1.4 }}><span className='font-medium'>Building a Thriving <br className='hidden lg:block' />Community of </span><br className='hidden lg:block' /><span className='text-primary'>Independent Talents</span></h1>
                            <p className='lg:text-lg'>a dynamic hub where independent talents unite, collaborate, and thrive. Whether you re a seasoned pro or just starting out, discover endless.</p>
                            <div className='flex gap-5'>
                                <Buttton styles="bg-primary border text-white hover:bg-white hover:text-primary hover:border border-primary">Blood Donation</Buttton>
                                <Buttton styles="text-primary border border-primary hover:bg-primary hover:text-white">Volunteering</Buttton>
                            </div>
                        </div>
                        <div className='p-4 lg:p-7'>
                            <img src={sliderbg2} alt="bannerImg" />
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>  <div className='grid lg:grid-cols-2 gap-5 items-center'>
                        <div className='space-y-7'>
                            <h1 className='text-3xl lg:text-5xl font-bold' style={{ lineHeight: 1.4 }}><span className='font-medium'>Building a Thriving <br className='hidden lg:block' />Community of </span><br className='hidden lg:block' />Independent Talents</h1>
                            <p className='lg:text-lg'>a dynamic hub where independent talents unite, collaborate, and thrive. Whether you re a seasoned pro or just starting out, discover endless.</p>
                            <div className='flex gap-5'>
                                <Buttton styles="bg-primary border text-white hover:bg-white hover:text-primary hover:border border-primary">Blood Donation</Buttton>
                                <Buttton styles="text-primary border border-primary hover:bg-primary hover:text-white">Volunteering</Buttton>
                            </div>
                        </div>
                        <div className='p-4 lg:p-7'>
                            <img src={slider3} alt="bannerImg" />
                        </div>
                    </div>
                    </SwiperSlide>
                </Swiper>

            </div>
        </section>
    )
}

export default Banner
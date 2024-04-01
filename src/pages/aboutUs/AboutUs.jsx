import React from 'react'
import { IoIosArrowForward } from 'react-icons/io';
import AboutBanner from './AboutBanner';
import WhoWeAre from './WhoWeAre';
import OurVision from './OurVision';
import IntroduceTeam from './IntroduceTeam';
import MyHelmet from '../../shared/navbar/MyHelmet';

const AboutUs = () => {
    return (
        <>
            <MyHelmet siteTitle="About us"></MyHelmet>
            <main className='min-h-screen px-2 md:px-0'>
                <div className="container mx-auto py-6 mt-3">
                    <h2 className='flex items-center gap-3'>Home <IoIosArrowForward /> <span className='font-bold'>About Us</span></h2>
                </div>
                <AboutBanner></AboutBanner>
                <WhoWeAre></WhoWeAre>
                <OurVision></OurVision>
                <IntroduceTeam></IntroduceTeam>
            </main>
        </>
    )
}

export default AboutUs
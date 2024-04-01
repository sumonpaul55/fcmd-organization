import React from 'react'
import "./about.css"

const AboutBanner = () => {
    return (
        <section>
            <div className="container mx-auto">
                <div className='about-banner rounded-xl h-[150px] sm:h-[300px] md:h-[400] lg:h-[500px]'></div>
                <div className='py-6 space-y-4'>
                    <h1 className='font-bold text-xl md:text-2xl lg:text-3xl'>Describe why OurCommunity exists [mission statement]</h1>
                    <p className='md:text-lg'>Explain what Our Community is working on and the value you provide to your people</p>
                </div>
            </div>
        </section>
    )
}

export default AboutBanner
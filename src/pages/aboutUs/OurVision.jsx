import React from 'react'
import vision from "../../assets/images/vision.png"
const OurVision = () => {
    return (
        <section className='py-10'>
            <div className="container mx-auto">
                <div className='grid md:grid-cols-2 gap-6 items-center'>
                    <div className='order-2 md:order-1'>
                        <img src={vision} alt="Our Vision" className='w-full rounded-lg' />
                    </div>
                    <div className='order-1'>
                        <h2 className='font-bold text-xl md:text-2xl lg:tex-3xl my-6'>Our Vision</h2>
                        <p className='justify-center leading-sung'>Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.</p>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurVision
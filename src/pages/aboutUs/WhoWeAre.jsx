import React from 'react'
const WhoWeAre = () => {
    return (
        <section className='py-20'>
            <div className='container mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-14 items-center'>
                    <div>
                        <h2 className='font-bold text-xl md:text-2xl lg:tex-3xl my-6'>Who We Are</h2>
                        <p className='justify-center leading-sung'>Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.</p>
                    </div>
                    <div className='flex gap-7 flex-col lg:flex-row'>
                        <div className='w-full lg:w-[312px] lg:h-[390px] h-48 -mt-8 aboutWhowe rounded-xl'></div>
                        <div className='w-full lg:w-[312px] lg:h-[390px] h-48 aboutWhowe rounded-xl'>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhoWeAre
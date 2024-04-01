import React from 'react'

const ReplayForm = () => {
    return (
        <section className='py-5'>
            <div className="container mx-auto">
                <div>
                    <h2 className='font-medium text-xl md:text-2xl lg:text-3xl'>Write a Comment</h2>
                    <form action="" className='py-3 flex flex-col gap-6'>
                        <input type="text" placeholder='Your Name' className='w-full p-3 outline-0 border rounded-md' />
                        <input type="text" placeholder='Your E-mail' className='w-full p-3 outline-0 border rounded-md' />
                        <textarea name="" id="" rows="5" className='w-full p-3 outline-0 border rounded-md'></textarea>
                        <div>
                            <input type="submit" value="Submit" className='py-2 md:py-3 px-3 md:px-5 bg-primary text-white rounded-md' />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ReplayForm
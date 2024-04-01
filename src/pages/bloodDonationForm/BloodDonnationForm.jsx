import React, { useState } from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { CiEdit } from "react-icons/ci";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import bloodDonner from "../../assets/images/bloodDonner.png"
const BloodDonnationForm = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <main className='px-2 sm:px-0'>
            <div className="container mx-auto py-6 mt-3 px-2">
                <h2 className='flex items-center gap-3'>Blood <IoIosArrowForward /> <span className='font-bold'>Donation</span></h2>
            </div>
            <section>
                <div className="container mx-auto">
                    <div className='grid lg:grid-cols-5 grid-cols-1 gap-6 mt-10'>
                        {/* grid col-1 */}
                        <div className='md:col-span-3'>
                            <form action="" className='w-full space-y-5'>
                                {/* name */}
                                <div className='flex md:flex-row flex-col gap-5'>
                                    <div className='border p-3 md:p-6 flex flex-col gap-4 rounded-lg flex-1'>
                                        <label htmlFor="" className='font-bold'>First Name</label>
                                        <div className='relative'>
                                            <input type="text" placeholder='First Name' className='w-full outline-0 border py-2 px-2 pr-7 rounded-lg' />
                                            <span className='text-gray-400 absolute right-2 top-1/2 text-xl -translate-y-1/2'><CiEdit /></span>
                                        </div>
                                    </div>
                                    <div className='border p-3 md:p-6 flex flex-col gap-4 rounded-lg  flex-1'>
                                        <label htmlFor="" className='font-bold'>Last Name</label>
                                        <div className='relative'>
                                            <input type="text" placeholder='Last Name' className='w-full outline-0 border py-2 px-2 pr-7 rounded-lg' />
                                            <span className='text-gray-400 absolute right-2 top-1/2 text-xl -translate-y-1/2'><CiEdit /></span>
                                        </div>
                                    </div>
                                </div>
                                {/* blood group and date */}
                                <div className='flex md:flex-row flex-col gap-5'>
                                    <div className='border p-3 md:p-6 flex flex-col gap-4 rounded-lg flex-1'>
                                        <label htmlFor="" className='font-bold'>Blood Group</label>
                                        <div className='relative'>
                                            <input type="text" placeholder='Blood Group' className='w-full outline-0 border py-2 px-2 pr-7 rounded-lg' />
                                            <span className='text-gray-400 absolute right-2 top-1/2 text-xl -translate-y-1/2'><CiEdit /></span>
                                        </div>
                                    </div>
                                    <div className='border p-3 md:p-6 flex flex-col gap-4 rounded-lg  flex-1'>
                                        <label htmlFor="" className='font-bold'>Donation Date</label>
                                        <div className='relative'>
                                            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className='w-full outline-0 border py-2 px-2 pr-7 rounded-lg cursor-pointer' />
                                            <span className='text-gray-400 absolute right-2 top-1/2 text-xl -translate-y-1/2 pointer-events-none'><CiEdit /></span>
                                        </div>
                                    </div>
                                </div>
                                {/* email and phone */}
                                <div className='flex md:flex-row flex-col gap-5'>
                                    <div className='border p-3 md:p-6 flex flex-col gap-4 rounded-lg flex-1'>
                                        <label htmlFor="" className='font-bold'>Email</label>
                                        <div className='relative'>
                                            <input type="email" placeholder='Email' className='w-full outline-0 border py-2 px-2 pr-7 rounded-lg' />
                                            <span className='text-gray-400 absolute right-2 top-1/2 text-xl -translate-y-1/2'><CiEdit /></span>
                                        </div>
                                    </div>
                                    <div className='border p-3 md:p-6 flex flex-col gap-4 rounded-lg  flex-1'>
                                        <label htmlFor="" className='font-bold'>Phone Number</label>
                                        <div className='relative'>
                                            <input type="number" placeholder='Phone Number' className='w-full outline-0 border py-2 px-2 pr-7 rounded-lg appearance-none' />
                                            <span className='text-gray-400 absolute right-2 top-1/2 text-xl -translate-y-1/2'><CiEdit /></span>
                                        </div>
                                    </div>
                                </div>
                                <div className='border p-3 md:p-6 flex flex-col gap-4 rounded-lg  flex-1'>
                                    <label htmlFor="" className='font-bold'>Address</label>
                                    <div className='relative'>
                                        <input type="text" placeholder='............' className='w-full outline-0 border py-2 px-2 pr-7 rounded-lg' />
                                        <span className='text-gray-400 absolute right-2 top-1/2 text-xl -translate-y-1/2'><CiEdit /></span>
                                    </div>
                                </div>
                                <div className='border p-3 md:p-6 flex flex-col gap-4 rounded-lg  flex-1'>
                                    <label htmlFor="" className='font-bold'>Message</label>
                                    <div className='relative'>
                                        <textarea name="" id="" cols="30" rows="5" className='w-full outline-0 border py-2 px-2 pr-7 rounded-lg'></textarea>
                                        <span className='text-gray-400 absolute right-2 top-1/2 text-xl -translate-y-1/2'><CiEdit /></span>
                                    </div>
                                </div>
                            </form>
                        </div>
                        {/* grid cols-2 */}
                        <div className='lg:col-span-2 hidden lg:block'>
                            <img src={bloodDonner} alt="" className='w-full h-full' />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default BloodDonnationForm
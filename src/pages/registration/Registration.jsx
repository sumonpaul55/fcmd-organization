import React, { useState } from 'react'
import { FaGoogle } from 'react-icons/fa6'

const Registration = () => {
    const [register, setRegister] = useState(true)
    return (
        <main>
            <section className='px-2 md:px-0'>
                <div className="container mx-auto">
                    <div className='flex items-center mt-10 md:mt-40 max-w-[500px] mx-auto justify-center'>
                        <div className='w-full'>
                            <div className='toggle flex items-center gap-5'>
                                <button onClick={() => setRegister(true)} className={`w-full rounded-md md:text-lg py-2 font-medium duration-200  ${register ? "bg-primary text-white" : "bg-white text-primary"}`}>Registration</button>
                                <button onClick={() => setRegister(false)} className={`w-full rounded-md md:text-lg py-2 font-medium duration-200 ${!register ? "bg-primary text-white" : "bg-white text-primary"}`}>Login</button>
                            </div>
                            <div className='overflow-hidden p-1 h-fit relative max-w-[500px]'>
                                {/* register form */}
                                <div className={`py-10 p-2 absolute w-full duration-300 ${!register ? "-left-full" : "left-0"}`}>
                                    <h2 className='text-center font-bold sm:text-xl md:text-2xl lg:text-3xl'>Register</h2>
                                    <p className='text-center my-2'>Lorem ipsum, dolor sit amet consectetur Asperiores!</p>
                                    <form className='mt-5'>
                                        <div className='flex flex-col gap-2 py-2'>
                                            <label htmlFor="">Name</label>
                                            <input type="text" name="name" id="" className='w-full p-2 rounded-lg border border-black outline-0' />
                                        </div>
                                        <div className='flex flex-col gap-2 py-2'>
                                            <label htmlFor="">Email</label>
                                            <input type="email" name="email" id="" className='w-full p-2 rounded-lg border border-black outline-0' />
                                        </div>
                                        <div className='flex flex-col gap-2 py-2'>
                                            <label htmlFor="">Password</label>
                                            <input type="password" name="password" id="" className='w-full p-2 rounded-lg border border-black outline-0' />
                                        </div>
                                        <input type="submit" value="Sign Up" name="password" id="" className='w-full p-2 rounded-lg hover:bg-opacity-80 border mt-5 cursor-pointer bg-primary text-white outline-0' />
                                        <button className='w-full p-2 rounded-lg hover:bg-slate-100 border mt-5 cursor-pointer border-black flex justify-center items-center gap-2'><FaGoogle /> <span>Sign up with google</span></button>
                                    </form>
                                </div>
                                {/* login form */}
                                <div className={`py-10 p-2 relative w-full duration-300 ${register ? "left-full" : "left-0"}`}>
                                    <h2 className='text-center font-bold sm:text-xl md:text-2xl lg:text-3xl'>Login</h2>
                                    <p className='text-center my-2'>Lorem ipsum, dolor sit amet consectetur Asperiores!</p>
                                    <form className='mt-5'>
                                        <div className='flex flex-col gap-2 py-2'>
                                            <label htmlFor="">Name</label>
                                            <input type="text" name="name" id="" className='w-full p-2 rounded-lg border border-black outline-0' />
                                        </div>
                                        <div className='flex flex-col gap-2 py-2'>
                                            <label htmlFor="">Email</label>
                                            <input type="email" name="email" id="" className='w-full p-2 rounded-lg border border-black outline-0' />
                                        </div>
                                        <div className='flex flex-col gap-2 py-2'>
                                            <label htmlFor="">Password</label>
                                            <input type="password" name="password" id="" className='w-full p-2 rounded-lg border border-black outline-0' />
                                        </div>
                                        <input type="submit" value="Sign Up" name="password" id="" className='w-full p-2 rounded-lg hover:bg-opacity-80 border mt-5 cursor-pointer bg-primary text-white outline-0' />
                                        <button className='w-full p-2 rounded-lg hover:bg-slate-100 border mt-5 cursor-pointer border-black flex justify-center items-center gap-2'><FaGoogle /> <span>Sign up with google</span></button>
                                    </form>
                                    <div className='flex gap-1 mt-10 justify-center'>
                                        <p>Don&apos;t have Account?</p>
                                        <button onClick={() => setRegister(true)} className='text-red-600 underline'>Sign Up</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className='text-center mt-10'>© 2023 FCMD. All rights reserved.</p>
                </div>
            </section>
        </main>
    )
}

export default Registration
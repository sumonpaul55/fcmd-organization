import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import footerLogo from "../../assets/footeLogo.png"
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { FaYoutube } from "react-icons/fa6";


// import logo from
function Footer() {
    const { data: contributors } = useQuery({
        queryKey: ["contributor"],
        queryFn: () => axios.get('database.json')
            .then(data => {
                return data.data.sponsorList
            })
    })
    return (
        <section className='pt-20 bg-primary px-4 lg:px-0 mt-10'>
            <div className="container mx-auto">
                <div className='flex text-white lg:gap-5 flex-col lg:flex-row gap-20 items-start justify-center'>
                    <div className="lg:w-5/12 w-full space-y-12">
                        <img src={footerLogo} alt="FCMD" className='max-w-[200px]' />
                        <p className='max-w-[350px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendiss</p>
                        <ul className='flex gap-5'>
                            <li><Link className='hover:scale-125 duration-200 block'><FaFacebook size={24} /></Link></li>
                            <li><Link className='hover:scale-125 duration-200 block'><FaInstagram size={24} /></Link></li>
                            <li><Link className='hover:scale-125 duration-200 block'><BsTwitterX size={24} /></Link></li>
                            <li><Link className='hover:scale-125 duration-200 block'><FaLinkedin size={24} /></Link></li>
                            <li><Link className='hover:scale-125 duration-200 block'><FaYoutube size={24} /></Link></li>
                        </ul>
                    </div>
                    <div className='lg:w-7/12 w-full flex justify-between flex-col md:flex-row gap-10'>
                        <div className='flex w-full md:justify-evenly'>
                            <div className='w-1/2 md:w-auto'>
                                <h2 className='text-lg font-bold mb-5'>Helpful Link</h2>
                                <ul className='space-y-3'>
                                    <li><Link>Blood Donation</Link></li>
                                    <li><Link>Admin Panel</Link></li>
                                    <li><Link>About us</Link></li>
                                    <li><Link>User Registration</Link></li>
                                    <li><Link>Contact Us</Link></li>
                                </ul>
                            </div>
                            <div className='w-1/2 md:w-auto'>
                                <h2 className='text-lg font-bold mb-5'>Blog</h2>
                                <ul className='space-y-3'>
                                    <li><Link>Volunteering</Link></li>
                                    <li><Link>Last Event</Link></li>
                                    <li><Link>Photo Gallery</Link></li>
                                    <li><Link>Upcoming Event</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-full md:w-auto">
                            <h2 className='text-lg font-bold mb-5'>Stay up to date</h2>
                            <form action="" className='flex flex-wrap sm:flex-nowrap gap-2'>
                                <input type="email" placeholder='Enter your email' className='w-fullw rounded-lg p-2 bg-transparent text-white border outline-none placeholder:text-white' />
                                <input type="submit" value="Subscribe" className='py-2 px-2 sm:px-3 bg-white text-primary rounded-lg hover:bg-opacity-90 font-semibold cursor-pointer duration-200' />
                            </form>
                            <div className='pt-10'>
                                <h3 className='font-bold'>Web Contributor</h3>
                                {/* <p>Asraful Islam Hanif, Mehedi hasan</p> */}
                                <div className='flex items-center gap-3 mt-5 flex-wrap lg:flex-nowrap'>
                                    {
                                        contributors?.slice(0, 4).map((contributor, idx) => (
                                            <Link key={idx} to={contributor?.website_url} className='p-1 bg-white rounded-md h-10 flex items-center hover:scale-110 duration-200'>
                                                <img src={contributor?.logo} alt={contributor?.sponsorsName} className='max-w-20' />
                                            </Link>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom border-t py-10 mt-20 flex justify-between flex-col md:flex-row gap-5">
                    <h3 className='text-white'>&copy; 2023 FCMD. All rights reserved.</h3>
                    <ul className='text-white flex items-center gap-5'>
                        <li><Link>Terms</Link></li>
                        <li><Link>Privacy</Link></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Footer
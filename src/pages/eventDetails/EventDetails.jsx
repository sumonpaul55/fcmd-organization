import React from 'react'
import MyHelmet from '../../shared/navbar/MyHelmet'
import { IoIosArrowForward } from 'react-icons/io'
import eventDetailsImg from "../../assets/images/eventDetails.png"
import ReactPlayer from 'react-player'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6'
const EventDetails = () => {


    return (
        <>
            <MyHelmet siteTitle="Event Details"></MyHelmet>
            <main>
                <div className="container mx-auto py-6 mt-3">
                    <h2 className='flex items-center gap-3'>Home <IoIosArrowForward /> events <IoIosArrowForward /> <span className='font-bold'>Events Details</span></h2>
                </div>
                <section className='py-10'>
                    <div className="container mx-auto">
                        <div className='flex flex-col lg:flex-row gap-5'>
                            {/* col left */}
                            <div className='lg:w-8/12'>
                                <img src={eventDetailsImg} alt="" className='w-full' />
                                <div className=''>
                                    <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold my-10'>Description</h1>
                                    <p className='md:text-lg'>Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.</p>
                                    <p className='mt-8 md:text-lg'>Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac </p>
                                    <div className='rounded-2xl overflow-hidden border mt-20 mb-3'>
                                        <ReactPlayer light="false" url='https://www.youtube.com/watch?v=uWaxNtkC3_Q&t=2446s' width="100%" height="400px" style={{ borderRadius: "20px" }} />
                                    </div>
                                    <h3 className='pl-2 border-l-4 font-semibold border-black'>Video Captions will go here</h3>
                                    <p className="mt-10 font-semibold md:text-lg">
                                        Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.
                                    </p>
                                    <p className="mt-8 md:text-lg">
                                        Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus. Sed condimentum enim dignissim adipiscing faucibus consequat, urna. Viverra purus et erat auctor aliquam. Risus, volutpat vulputate posuere purus sit congue convallis aliquet. Arcu id augue ut feugiat donec porttitor neque. Mauris, neque ultricies eu vestibulum, bibendum quam lorem id. Dolor lacus, eget nunc lectus in tellus, pharetra, porttitor.
                                    </p>
                                    <p className='md:text-lg mt-8 pl-2 border-l-4 italic'>
                                        <q className=''>
                                            Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus.
                                        </q>
                                    </p>
                                    <div className='conclusion space-y-5 md:text-lg'>
                                        <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold my-10'>Conclusion</h1>
                                        <p>Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.</p>
                                        <p>Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas condimentum mi massa. In tincidunt pharetra consectetur sed duis facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit dictum eget nibh tortor commodo cursus.</p>
                                        <p>Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce aliquet. Nam elementum urna nisi aliquet erat dolor enim. Ornare id morbi eget ipsum. Aliquam senectus neque ut id eget consectetur dictum. Donec posuere pharetra odio consequat scelerisque et, nunc tortor.Nulla adipiscing erat a erat. Condimentum lorem posuere gravida enim posuere cursus diam.</p>
                                    </div>
                                    <div className='spacy-x-5 flex gap-5 mt-12'>
                                        <span className='py-1 px-4 border'>tag one</span>
                                        <span className='py-1 px-4 border'>tag two</span>
                                        <span className='py-1 px-4 border'>tag three</span>
                                        <span className='py-1 px-4 border'>tag four</span>
                                    </div>
                                </div>
                            </div>
                            {/* col right */}
                            <div className='lg:w-4/12'>
                                <button className='py-2 px-7 rounded-md bg-primary text-white sm:px-10 sm:text-xl md:px-16 mb-8'>Ticket</button>
                                <div className='flex flex-col gap-9'>
                                    <time className='border rounded-md p-3'><span className='font-bold'>Date</span> :   January 1, 2023 - April 1, 2027</time>
                                    <time className='border rounded-md p-3'><span className='font-bold'>Reg Deadline</span> :   January 1, 2023 - April 1, 2027</time>
                                    <address className='border rounded-md p-3'><span className='font-bold'>Address</span> :   Mymensingh</address>
                                    <h3 className='border rounded-md p-3'><span className='font-bold'>Ticket price :</span> 3000 Taka</h3>
                                </div>
                                <div className='mt-10'>
                                    <h2 className='font-bold text-primary sm:text-2xl md:text-3xl'>Organizers</h2>
                                    <div className='grid lg:block grid-cols-2 gap-2'>
                                        {
                                            Array.from({ length: 8 }, (_, items) => (
                                                <div key={items} className='space-y-3 mt-5 border rounded-lg p-10 sm:p-4 lg:w-2/3 w-full'>
                                                    <h2>Henri Robert</h2>
                                                    <p>Email: <span className='text-pink-500'>admin@gmai.com</span></p>
                                                    <div className='flex gap-2'>
                                                        <h2>Social :</h2>
                                                        <ul className='flex text-2xl text-primary gap-5'>
                                                            <li><FaFacebook /></li>
                                                            <li><FaTwitter /></li>
                                                            <li><FaInstagram /></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default EventDetails
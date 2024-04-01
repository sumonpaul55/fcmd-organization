import React from 'react'
import featuredImage from '../../../assets/images/featuredImage.png'
import commentors from '../../../assets/images/commentors.png'
import { PiLinkSimpleBold } from 'react-icons/pi'
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa6'
import ReplayForm from './ReplayForm'
const BlogDescription = () => {
    return (
        <section className='px-2 md:px-0'>
            <div className="max-w-[900px] mx-auto">
                <h1 className='text-sm md:text-[40px] font-bold'>Intruductions</h1>
                <div className='py-3 md:py-10 space-y-3 sm:space-y-6 text-sm md:text-base'>
                    <p>Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.</p>
                    <p>Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.</p>
                </div>
                <div className=''>
                    <img src={featuredImage} alt="featured Image" className='w-full rounded-2xl' />
                    <h4 className='border-l-2 border-black mt-2 md:mt-3 pl-4'>Image caption goes here</h4>
                </div>

                <div className='py-3 md:py-10 space-y-4 sm:space-y-8 text-sm md:text-base'>
                    <p className='font-semibold'>Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.</p>
                    <p>Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus. Sed condimentum enim dignissim adipiscing faucibus consequat, urna. Viverra purus et erat auctor aliquam. Risus, volutpat vulputate posuere purus sit congue convallis aliquet. Arcu id augue ut feugiat donec porttitor neque. Mauris, neque ultricies eu vestibulum, bibendum quam lorem id. Dolor lacus, eget nunc lectus in tellus, pharetra, porttitor.</p>
                    <div className='text-xl border-l-2 pl-4 border-black italic'>
                        <q>Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus.</q>
                    </div>
                    <p>Tristique odio senectus nam posuere ornare leo metus, ultricies. Blandit duis ultricies vulputate morbi feugiat cras placerat elit. Aliquam tellus lorem sed ac. Montes, sed mattis pellentesque suscipit accumsan. Cursus viverra aenean magna risus elementum faucibus molestie pellentesque. Arcu ultricies sed mauris vestibulum.</p>
                </div>

                <div className='py-3 md:py-8 space-y-3 sm:space-y-6 text-sm md:text-base'>
                    <h1 className='text-sm md:text-[40px] font-bold'>Conclusion</h1>
                    <p>Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.</p>
                    <p>Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas condimentum mi massa. In tincidunt pharetra consectetur sed duis facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit dictum eget nibh tortor commodo cursus.</p>
                    <p>Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce aliquet. Nam elementum urna nisi aliquet erat dolor enim. Ornare id morbi eget ipsum. Aliquam senectus neque ut id eget consectetur dictum. Donec posuere pharetra odio consequat scelerisque et, nunc tortor.Nulla adipiscing erat a erat. Condimentum lorem posuere gravida enim posuere cursus diam.</p>
                </div>
                <div className='grid sm:grid-cols-2 gap-4 border-b pb-9'>
                    <div>
                        <strong className='mb-7 block'>Share this post</strong>
                        <ul className='flex items-center justify-start gap-4'>
                            <li className='size-10 bg-gray-100 flex items-center justify-center rounded-full'><PiLinkSimpleBold size={24} /></li>
                            <li className='size-10 bg-gray-100 flex items-center justify-center rounded-full'><FaLinkedin size={24} /></li>
                            <li className='size-10 bg-gray-100 flex items-center justify-center rounded-full'><FaTwitter size={24} /></li>
                            <li className='size-10 bg-gray-100 flex items-center justify-center rounded-full'><FaFacebook size={24} /></li>
                        </ul>
                    </div>
                    <div className='flex items-end justify-end gap-4'>
                        <span className='py-1 px-2 text-sm bg-gray-300'>Tag one</span>
                        <span className='py-1 px-2 text-sm bg-gray-300'>Tag two</span>
                        <span className='py-1 px-2 text-sm bg-gray-300'>Tag three</span>
                        <span className='py-1 px-2 text-sm bg-gray-300'>Tag four</span>
                    </div>
                </div>
                {/* post comments */}
                <div className='py-10'>
                    <h1 className='text-base md:text-3xl font-semibold'>Comments (1)</h1>
                    <div className='py-2 flex gap-5 mt-5 items-center   '>
                        <div>
                            <img src={commentors} alt="Commentors name" className='max-w-20' />
                        </div>
                        <div className='md:space-y-2'>
                            <h2 className='capitalize font-semibold text-base sm:text-2xl'>Davide oliver</h2>
                            <p>E-learning has rapidly evolved in recent years, with technology playing a crucial role in transforming traditional education systems.</p>
                            <button className='font-bold text-primary'>Replay</button>
                        </div>
                    </div>
                </div>
                <ReplayForm></ReplayForm>
            </div>
        </section>
    )
}

export default BlogDescription
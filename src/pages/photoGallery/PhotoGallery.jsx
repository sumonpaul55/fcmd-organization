import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import SectionTitle from '../../components/sectionTitle/SectionTitle'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md'

const PhotoGallery = () => {
    const { data: photos } = useQuery({
        queryKey: ["photos"],
        queryFn: () => axios.get("database.json")
            .then(data => {
                return data.data.gallery
            })
    })
    return (
        <main className='px-2 md:px-0'>
            <div className="container mx-auto py-6 mt-3">
                <h2 className='flex items-center gap-3'>Home <IoIosArrowForward /> <span className='font-bold'>Photo Gallery</span></h2>
            </div>
            <section>
                <div className="container mx-auto">
                    <div className='container mx-auto'>
                        <SectionTitle sectionTitle="Photo" coloredTittle="Gallery" styles="text-center mb-6 italic"></SectionTitle>
                        <p className='text-center max-w-[500px] mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
            </section>
            <section className='py-20'>
                <div className="container mx-auto">
                    <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-7'>
                        {
                            photos?.map((photo, idx) => (
                                <div key={idx}>
                                    <img src={photo?.img} alt="photos" className='w-full rounded-lg' />
                                </div>
                            ))
                        }
                    </div>
                    <div className='flex justify-center gap-2 md:gap-6 items-center mt-20'>
                        <button className='border size-12 flex items-center justify-center rounded-md'><MdOutlineArrowBackIos /></button>
                        <button className='border duration-200 size-12 flex items-center text-primary justify-center hover:bg-primary hover:text-white md:font-bold rounded-md border-primary'>1</button>
                        <button className='border duration-200 size-12 flex items-center text-primary justify-center hover:bg-primary hover:text-white md:font-bold rounded-md border-primary'>2</button>
                        <button className='border duration-200 size-12 flex items-center text-primary justify-center hover:bg-primary hover:text-white md:font-bold rounded-md border-primary'>3</button>
                        <button className='border duration-200 size-12 flex items-center text-primary justify-center hover:bg-primary hover:text-white md:font-bold rounded-md border-primary'>4</button>
                        <button className='border duration-200 size-12 flex items-center text-primary justify-center hover:bg-primary hover:text-white md:font-bold rounded-md border-primary'>5</button>
                        <button className='border size-12 flex items-center justify-center rounded-md'><MdOutlineArrowForwardIos /></button>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default PhotoGallery
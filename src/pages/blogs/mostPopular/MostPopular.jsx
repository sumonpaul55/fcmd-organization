import React, { useEffect, useState } from 'react'
import SectionTitle from './../../../components/sectionTitle/SectionTitle';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Post from './post';

function MostPopular() {
    const [tabView, setTabView] = useState(true)
    const { data: popularPost } = useQuery({
        queryKey: ["popularPost"],
        queryFn: () => axios.get("database.json")
            .then(data => {
                return data.data.blogs
            })
    })
    useEffect(() => {
        if (window.innerWidth < 768) {
            setTabView(!tabView)
        }
    }, [])
    return (
        <section className='py-2'>
            <div className="container mx-auto">
                <SectionTitle sectionTitle="Most" coloredTittle="Popular" styles="py-16"></SectionTitle>
                <div className='grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-10'>
                    {
                        popularPost?.slice(0, tabView ? 3 : 4).map((post, idx) => (
                            <Post key={idx} post={post}></Post>
                        ))
                    }
                </div>
                {/* past blog */}
                <div>
                    <SectionTitle sectionTitle="Past" coloredTittle="Blog" styles="py-16"></SectionTitle>
                    <div className='grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-10'>
                        {
                            popularPost?.slice(0, tabView ? 6 : 4).map((post, idx) => (
                                <Post key={idx} post={post}></Post>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MostPopular
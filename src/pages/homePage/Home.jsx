import React from 'react'
import Banner from './banner/Banner'
import Activities from './lastActivies/Activities'
import MyHelmet from '../../shared/navbar/MyHelmet'
import SponsorList from './sponsorList/SponsorList'
import Speakers from './speakers/Speakers'
import Blogs from './blogs/Blogs'

function Home() {
    return (
        <>
            <MyHelmet siteTitle="Home"></MyHelmet>
            <main className='px-1 md:px-0'>
                <Banner></Banner>
                <Activities></Activities>
                <SponsorList></SponsorList>
                <Speakers></Speakers>
                <Blogs></Blogs>
            </main>
        </>
    )
}

export default Home
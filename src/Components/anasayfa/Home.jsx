import React from 'react'
import SlideRefarance from './slide-reference/SlideRefarance'
import Banner from './banners/Banner'
import { useEffect } from 'react'
import Gecis from './gecis/Gecis'
import Asks from './sıksorular/Asks'
import Footer from '../footer/Footer'
import Contact from './contact us/contact'
import Marketing from './marketing/Marketing'
import AOS from 'aos';
import 'aos/dist/aos.css';




const Home = () => {
    useEffect(() => {
        AOS.init({ duration: 900 });
    }, []);


    return (
        <>

            <Banner />
            <SlideRefarance />
            <Marketing />
            <Gecis />

        </>
    )
}

export default Home
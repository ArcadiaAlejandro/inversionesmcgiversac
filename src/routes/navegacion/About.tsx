import { useEffect } from 'react';

import Header from '../../components/header'
import Footer from '../../components/Footer'

import Section1 from '../../resources/sobre nosotros/section1'
import Section2 from '../../resources/sobre nosotros/section2'
import Section3 from '../../resources/sobre nosotros/section3'
import Section4 from '../../resources/sobre nosotros/section4'
export default function Route() {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
    <>
        <Header/>
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>     
        <Footer/>

    </>
    )
}


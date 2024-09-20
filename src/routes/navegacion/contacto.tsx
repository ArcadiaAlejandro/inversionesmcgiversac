import { useEffect } from 'react';

import Header from '../../components/header'
import Footer from '../../components/Footer'

import Section1 from '../../resources/contactanos/section1'
import Section2 from '../../resources/contactanos/section2'
import Section3 from '../../resources/contactanos/section3'
export default function Route() {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
    <>  
    <Header/>
    <Section1/>
    <Section3/>
    <hr />
    <Section2/>
    <Footer/>

    </>
    )
}

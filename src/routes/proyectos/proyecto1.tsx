import { useEffect } from 'react';

import Header from '../../components/header'
import Footer from '../../components/Footer'

import Section1 from '../../resources/proyectos/portafolio/proyecto1'

export default function Route() {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
    <>
        <Header/>
        <Section1/>    
        <Footer/>

    </>
    )
}


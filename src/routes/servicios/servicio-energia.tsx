import { useEffect } from 'react';

import Header from '../../components/header'
import Footer from '../../components/Footer'

import Energia from '../../resources/servicios/energia/section1'
export default function Route(){

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
    <>
    <Header/>
    <Energia />
    <Footer/>

    </>
    )
}
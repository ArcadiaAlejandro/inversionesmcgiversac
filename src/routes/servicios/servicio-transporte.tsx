import { useEffect } from 'react';

import Header from '../../components/header'
import Footer from '../../components/Footer'

import Transporte from '../../resources/servicios/transporte/section1'
export default function Route(){

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
    <>
    <Header/>
    <Transporte />
    <Footer/>

    </>
    )
}
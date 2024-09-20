import { useEffect } from 'react';

import Header from '../../components/header'
import Footer from '../../components/Footer'

import Resguardo from '../../resources/servicios/resguardo/section1'
export default function Route(){

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
    <>
    <Header/>
    <Resguardo />
    <Footer/>

    </>
    )
}
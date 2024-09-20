import { useEffect } from 'react';

import Header from '../../components/header'
import Footer from '../../components/Footer'

export default function Route(){

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
    <>
    <Header/>
        <h1>Hola desde Servicios</h1>
    <Footer/>

    </>
    )
}
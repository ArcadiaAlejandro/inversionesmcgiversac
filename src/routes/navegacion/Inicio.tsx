import { useEffect } from 'react';

import Section1 from '../../resources/Inicio/Section1'
import Section2 from '../../resources/Inicio/Section2'
import Section3 from '../../resources/Inicio/section3'
import Section4 from '../../resources/Inicio/Section4'
import Section5 from '../../resources/Inicio/Section5'
import Section6 from '../../resources/Inicio/Section6'
import Section7 from '../../resources/Inicio/Section7'

import Header from '../../components/header'
import Footer from '../../components/Footer'
export default function Route(){

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
    <>
        <Header/>

        {/*Seccion del video */ }
        <Section1/>
        {/*Seccion de presentacion */ }
        <Section2/>
        {/*Seccion de servicios */ }
        <Section3/>
        {/*Seccion de estadistica */ }
        <Section4/>
        {/*Seccion de proyectos */ }
        <Section5/>
        {/*Seccion de empresas aliadas */ }
        <Section6/>
        {/*Seccion de FQA */ }
        <Section7/>
        
        <Footer/>
    </>
    )
}


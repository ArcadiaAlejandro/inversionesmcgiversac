import { useEffect, useState } from 'react';
import Storage  from '../firebase/firebase';
import { ref, getDownloadURL } from 'firebase/storage';

const Footer = () => {

    const [logo, setlogo] = useState('');

    useEffect(() => {
    // Reemplaza 'videos/Video_Presentacion.mp4' con la ruta de tu video en Firebase
    const videoRef = ref(Storage, 'https://firebasestorage.googleapis.com/v0/b/mcguiver-b7682.appspot.com/o/inversiones%2Fsvg%2FLogo.svg?alt=media&token=02165639-42b9-40c6-8f5c-4a332ab352b5');
    
    getDownloadURL(videoRef)
      .then((logo) => {
        setlogo(logo); // Guarda la URL en el estado
      })
      .catch((error) => {
        console.error('Error al obtener el logo', error);
      });
  }, []);

  return (
    <>
        <footer className="bg-[#1C1C1C]">
        <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <img src={logo} className="mr-5 h-6 sm:h-9" alt="logo" />
                <p className="max-w-xs mt-4 text-sm text-[#B0B0B0]">
                Somos una empresa peruana líder en los sectores de telecomunicaciones, construcción, transporte, diseño e ingeniería, con una especialización destacada en el rubro eléctrico. A lo largo de nuestra trayectoria, hemos ejecutado diversos proyectos a nivel nacional, consolidándonos como un referente en cada uno de nuestros campos.
                </p>
                <div className="flex mt-8 space-x-6 text-[#B0B0B0]">
                {/* Aqui van todo lo que viene siendo los logos*/}
                <a className="hover:opacity-75" href="https://www.facebook.com/InversionesMcGiver/"  target="_blank" rel="noopener" >
                    <span className="sr-only">Facebook</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                </a>
                
                <span className="[&>svg]:h-5 [&>svg]:w-5">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 496 512">
                        <path
                        d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z" />
                    </svg>
                    </span>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
                <div>
                <p className="font-medium text-[#FFFFFF]">
                    Gestiones
                </p>
                    <nav className="flex flex-col mt-4 space-y-2 text-sm text-[#B0B0B0]">
                        <a className="hover:opacity-75" href="" > Inicio </a>
                        <a className="hover:opacity-75"  href=""> Sobre Nosotros </a>
                        <a className="hover:opacity-75"  href=""> Servicios </a>
                        <a className="hover:opacity-75"  href=""> Proyectos </a>
                        <a className="hover:opacity-75"  href=""> Contactanos </a>
                    </nav>
                </div>
                <div>
                <p className="font-medium text-[#FFFFFF]">
                    Servicios
                </p>
                <nav className="flex flex-col mt-4 space-y-2 text-sm text-[#B0B0B0]">
                    <a className="hover:opacity-75" href=""> Proyectos Electromecanicos</a>
                    <a className="hover:opacity-75" href=""> Proyectos Telecomunicaciones </a>
                    <a className="hover:opacity-75" href=""> Servicios de Energia Electrica </a>
                    <a className="hover:opacity-75" href=""> Servicios de Coubicacion </a>
                    <a className="hover:opacity-75" href=""> Servicio de Transporte de Carga </a>
                    <a className="hover:opacity-75" href=""> Servicio de Transmision electrica </a>
                </nav>
                </div>
                <div>
                <p className="font-medium text-[#FFFFFF]">
                    Soporte y Ayuda
                </p>
                <nav className="flex flex-col mt-4 space-y-2 text-sm text-[#B0B0B0]">
                    <a className="hover:opacity-75" href=""> Contact </a>
                    <a className="hover:opacity-75" href=""> FAQs </a>
                </nav>
                </div>
                <div>
                <p className="font-medium text-[#FFFFFF]">
                    Legal
                </p>
                <nav className="flex flex-col mt-4 space-y-2 text-sm text-[#B0B0B0]">
                    <a className="hover:opacity-75" href=""> Politicas de Privacidad </a>
                    <a className="hover:opacity-75" href=""> Terminos &amp; Condiciones </a>
                </nav>
                </div>
            </div>
            </div>
            
         
                <p className="mt-8 text-xs text-[#B0B0B0]">
                    © 2024 Todos los derechos reservados.
                 </p>
        </div>
        </footer>
        
    </>
  )
}

export default Footer

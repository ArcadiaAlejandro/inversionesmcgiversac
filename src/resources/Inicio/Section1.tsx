import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Storage  from '../../firebase/firebase';
import { ref, getDownloadURL } from 'firebase/storage';

const Section1 = () => {
  const [videoUrl, setVideoUrl] = useState('');

  useEffect(() => {
    // Reemplaza 'videos/Video_Presentacion.mp4' con la ruta de tu video en Firebase
    const videoRef = ref(Storage, 'https://firebasestorage.googleapis.com/v0/b/mcguiver-b7682.appspot.com/o/Video_Presentacion.mp4?alt=media&token=8bbc373e-4987-4ec4-a709-3b6a1da6f2bd');
    
    getDownloadURL(videoRef)
      .then((url) => {
        setVideoUrl(url); // Guarda la URL en el estado
      })
      .catch((error) => {
        console.error('Error al obtener la URL del video:', error);
      });
  }, []);

  return (
    <>
      <section className="relative h-screen flex flex-col items-center justify-center text-center text-white">
        <div className="video-docker absolute inset-0 w-full h-full overflow-hidden">
          <video
            className="min-w-full min-h-full absolute object-cover"
            src={videoUrl} // Usa la URL obtenida de Firebase
            muted
            loop
            autoPlay
          />
        </div>

        <div className="relative z-10 container mx-auto flex flex-col items-start pl-4 py-12 sm:py-24">
          <div className="w-11/12 sm:w-2/3 lg:flex justify-start items-center flex-col mb-5 sm:mb-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-left text-white font-black leading-tight">
              Construyendo el Futuro{' '}
              <span className="text-[#E8222E]">Soluciones Integrales</span>  para un Mundo Interconectado
            </h1>
          </div>
          <div className="flex justify-start items-start space-x-4">
            <Link to='/Proyectos'>
              <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2D3C83] bg-[#E8222E] transition duration-150 ease-in-out hover:bg-[#BF1A1F] lg:text-xl lg:font-bold rounded-md text-white px-4 sm:px-10 py-2 sm:py-4 text-sm border border-transparent">
                Ver Proyectos
              </button>
            </Link>
            <Link to='/AboutUs'>
              <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2D3C83] bg-transparent transition duration-150 ease-in-out hover:bg-[#E8222E] hover:text-white lg:text-xl lg:font-bold rounded-md border border-[#2D3C83] text-[#2D3C83] px-4 sm:px-10 py-2 sm:py-4 text-sm">
                Sobre Nosotros
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Section1;

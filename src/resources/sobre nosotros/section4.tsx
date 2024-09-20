import Storage  from '../../firebase/firebase';
import { ref, getDownloadURL } from 'firebase/storage';
import { useEffect, useState } from 'react';

const Section7 = () => {

  const [logos, setLogos] = useState<string[]>([]);

  useEffect(() => {
    const logoRefs  = [
      'https://firebasestorage.googleapis.com/v0/b/mcguiver-b7682.appspot.com/o/inversiones%2Faliados%2Flogo%20%20TELECOMUNICATIONS%20PARTNERS.png?alt=media&token=9585dd95-c92b-4781-bff6-652c3d07f10e',
      'https://firebasestorage.googleapis.com/v0/b/mcguiver-b7682.appspot.com/o/inversiones%2Faliados%2Flogo%20%20TORRES%20UNIDAS.jpg?alt=media&token=9d82fa42-91ef-4329-90a2-3c89503a1453',
      'https://firebasestorage.googleapis.com/v0/b/mcguiver-b7682.appspot.com/o/inversiones%2Faliados%2Flogo%20AESA.jpg?alt=media&token=24f1930c-dd28-486b-996b-5481ea42ccc6',
      'https://firebasestorage.googleapis.com/v0/b/mcguiver-b7682.appspot.com/o/inversiones%2Faliados%2Flogo%20ATP.png?alt=media&token=d3d1aae3-cc89-4395-90bc-3b90b1c8f7e7',
      'https://firebasestorage.googleapis.com/v0/b/mcguiver-b7682.appspot.com/o/inversiones%2Faliados%2Flogo%20BECHTEL.jpg?alt=media&token=e2ba253a-017a-407f-af88-5d032d8cfea8',
      'https://firebasestorage.googleapis.com/v0/b/mcguiver-b7682.appspot.com/o/inversiones%2Faliados%2Flogo%20BTS.png?alt=media&token=dc078c68-184a-46e6-bd35-658aa94f7f75',
      'https://firebasestorage.googleapis.com/v0/b/mcguiver-b7682.appspot.com/o/inversiones%2Faliados%2Flogo%20C%26J.png?alt=media&token=47f96e03-7f15-43c6-8618-67952d69d7ed',
      'https://firebasestorage.googleapis.com/v0/b/mcguiver-b7682.appspot.com/o/inversiones%2Faliados%2Flogo%20GRUPO%20ABC%20INGENIEROS.png?alt=media&token=570e6205-bdbc-451c-b758-d2b18c5a3698',
      'https://firebasestorage.googleapis.com/v0/b/mcguiver-b7682.appspot.com/o/inversiones%2Faliados%2Flogo%20GRUPO%20GRA%C3%91A%20Y%20MONTERO.jpg?alt=media&token=a0ed029f-e3f5-4587-875a-5faf05ec2acb',
      'https://firebasestorage.googleapis.com/v0/b/mcguiver-b7682.appspot.com/o/inversiones%2Faliados%2Flogo%20INCORP.jpg?alt=media&token=9dd60e94-e87c-4209-ad8a-57cdabfbc268',
      'https://firebasestorage.googleapis.com/v0/b/mcguiver-b7682.appspot.com/o/inversiones%2Faliados%2Flogo%20JJC%20GRUPO.jpg?alt=media&token=7bdd24e8-5ef9-4bd2-a41d-39d9bdfc4f30',
      'https://firebasestorage.googleapis.com/v0/b/mcguiver-b7682.appspot.com/o/inversiones%2Faliados%2Flogo%20OHL.jpg?alt=media&token=703d90f4-5967-4f2d-be69-b31575192233',
      'https://firebasestorage.googleapis.com/v0/b/mcguiver-b7682.appspot.com/o/inversiones%2Faliados%2Flogo%20RCP%20SAC.jpg?alt=media&token=3e86ffa6-9b7f-4691-9fab-b1f85ade0329',
      'https://firebasestorage.googleapis.com/v0/b/mcguiver-b7682.appspot.com/o/inversiones%2Faliados%2Flogo%20SC%20INGENERIA%20Y%20CONSTRUCCION.png?alt=media&token=7b404132-361a-411f-9258-be705c2e2072',
      'https://firebasestorage.googleapis.com/v0/b/mcguiver-b7682.appspot.com/o/inversiones%2Faliados%2Flogo%20SC%20INGENIEROS%20DE%20PROYECTOS%20SAC.jpg?alt=media&token=3d2cbf3d-41a7-448c-9c68-f0b99e84babd',
      'https://firebasestorage.googleapis.com/v0/b/mcguiver-b7682.appspot.com/o/inversiones%2Faliados%2Flogo%20SOLUCIONES%20ALIMENTICIAS%20SAC.png?alt=media&token=2360eb15-c317-45b0-82f4-0322a7544a8f',
      'https://firebasestorage.googleapis.com/v0/b/mcguiver-b7682.appspot.com/o/inversiones%2Faliados%2Flogo%20TURRISTELECOM.png?alt=media&token=fcab57c3-3427-4a72-a798-e3f041e1c5ab',
      'https://firebasestorage.googleapis.com/v0/b/mcguiver-b7682.appspot.com/o/inversiones%2Faliados%2Flogo%20XSTRATA%20COPPER.jpg?alt=media&token=1f5e0820-e192-456e-a578-585dfe62ba8c',
      'https://firebasestorage.googleapis.com/v0/b/mcguiver-b7682.appspot.com/o/inversiones%2Faliados%2FYOFC.jpg?alt=media&token=3c90222f-e680-4699-88b2-e7f12ff04042',
      'https://firebasestorage.googleapis.com/v0/b/mcguiver-b7682.appspot.com/o/inversiones%2Faliados%2FQMC.jpg?alt=media&token=b177ba19-6522-4318-8423-a638406f4df4',
      'https://firebasestorage.googleapis.com/v0/b/mcguiver-b7682.appspot.com/o/inversiones%2Faliados%2FLOGO%20INTERNEXA.jpg?alt=media&token=8a9004a1-00b7-44ab-89fa-9d5d69817737',
      'https://firebasestorage.googleapis.com/v0/b/mcguiver-b7682.appspot.com/o/inversiones%2Faliados%2FINTERNET%20PARA%20TODOS.jpg?alt=media&token=23932df3-08e0-4cf8-98d2-572b058d7a12',
      // Agrega más rutas según sea necesario
    ];

    const fetchLogos = async () => {
      try {
        const urls = await Promise.all(
          logoRefs.map((path) => {
            const logoRef = ref(Storage, path);
            return getDownloadURL(logoRef);
          })
        );
        setLogos(urls);
      } catch (error) {
        console.error('Error al obtener las URLs de los logos:', error);
      }
    };

    fetchLogos();
  }, []);

    return (
       
        <section className="bg-gray-100">
  <div className="flex items-center justify-center h-full">
    <div className="mx-auto w-full max-w-7xl px-5 md:px-10 md:py-20">
      <h5 className="mb-12 text-xl font-semibold md:mb-16 lg:mb-20 lg:text-5xl text-[#0000005a] text-center">
        Empresas que ya confían en <span className="text-[#E8222E]">NOSOTROS</span>
      </h5>
      
      <div className="flex overflow-hidden space-x-40 group">
        <div className="flex space-x-52 animate-loop-scroll">
          {logos.map((logo, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={logo}
                alt={`Logo ${index}`}
                className="max-w-none w-52 filter grayscale transition-all duration-2 hover:filter-none"
              />
            </div>
          ))}
        </div>
        <div className="flex space-x-16 animate-loop-scroll" aria-hidden="true">
          {logos.map((logo, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={logo}
                alt={`Logo ${index}`}
                className="max-w-none w-20 filter grayscale transition-all duration-300 hover:filter-none"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

    );
};

export default Section7;

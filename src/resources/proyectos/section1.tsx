import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';

import Storage  from '../../firebase/firebase';
import { ref, getDownloadURL } from 'firebase/storage';

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const clientes: string[] = [
    'TELECOMUNICATIONS ',
    'TORRESUNIDAS ',
    'AESA ',
    'ATP ',
    'BECHTEL ',
    'BTS ',
    'CyJ',
    'GRUPOABCINGENIEROS ',
    'GRUPOGRAÑAYMONTERO ',
    'INCORP ',
    'JJCGRUPO ',
    'OHL',
    'RCPSAC ',
    'SCINGENERIAYCONSTRUCCION',
    'INGENIEROSDEPROYECTOSSAC ',
    'SOLUCIONESALIMENTICIASSAC ',
    'TURRISTELECOM ',
    'XSTRATACOPPER ',
];

const projectsData = [
    {
        title: 'Proyecto de Talara',
        description: 'Un innovador proyecto de infraestructura en la región de Talara.',
        imgSrc: 'https://images.unsplash.com/photo-1625722662233-297060231b85?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fFBST1lFQ1RPUyUyMFRFTEVDT01VTklDQUNJT05FU3xlbnwwfHwwfHx8MA%3D%3D',
        cliente: clientes[0], // Asignar el primer cliente
        startDate: '14/05/2024',
        category: 'Construcción y Diseño',
        link: '/Proyectos/ejemplo'
    },
    {
        title: 'Servicio de Telecomunicaciones',
        description: 'Desarrollo de soluciones avanzadas en telecomunicaciones.',
        imgSrc: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8',
        cliente: clientes[1], // Asignar el segundo cliente
        startDate: '01/01/2024',
        category: 'Mantenimiento en Telecomunicaciones',
        link: '/Proyectos/ejemplo'
    },
    {
        title: 'Proyecto Acobamba',
        description: 'Un ambicioso proyecto de desarrollo urbano en Acobamba.',
        imgSrc: 'https://images.unsplash.com/photo-1527199768775-bdabf8b32f61?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        cliente: clientes[2], // Asignar el tercer cliente
        startDate: '14/09/2023',
        category: 'Transporte y Alquileres',
        link: '/Proyectos/ejemplo'
    }
    // Agrega más proyectos aquí y asigna más clientes si es necesario
];

const categories = [
    'Todos',
    'Mantenimiento en Telecomunicaciones',
    'Construcción y Diseño',
    'Transporte y Alquileres',
    'Energía Eléctrica',
    'Resguardo Particular'
];

const Section1 = () => {


    const [Animacion, setAnimacion] = useState('');

  useEffect(() => {
  // Reemplaza 'videos/Video_Presentacion.mp4' con la ruta de tu video en Firebase
  const videoRef = ref(Storage, 'https://firebasestorage.googleapis.com/v0/b/mcguiver-b7682.appspot.com/o/inversiones%2Fgif%2Ftrabajo.gif?alt=media&token=e590b8cf-1589-44ae-916f-6b06e0f00c3b');
  
  getDownloadURL(videoRef)
    .then((Animacion) => {
        setAnimacion(Animacion); // Guarda la URL en el estado
    })
    .catch((error) => {
      console.error('Error al obtener el logo', error);
    });
}, []);

    const [selectedCategory, setSelectedCategory] = useState('Todos');

    const filteredProjects = selectedCategory === 'Todos'
        ? projectsData
        : projectsData.filter(project => project.category === selectedCategory);

    return (
        <div className="py-12 sm:py-40">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-6xl px-4 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className="text-center md:text-left text-sm text-gray-400">
                            <span>Explora nuestros proyectos más destacados y descubre cómo transformamos ideas en resultados excepcionales.</span>
                            <h1 className="text-3xl font-bold tracking-tight text-[#2f3f89] sm:text-4xl md:text-5xl">
                                Bienvenido a Nuestro Portafolio de Proyectos
                            </h1>
                            <p className="mt-6 text-lg leading-7 text-gray-700">
                                Cada proyecto en nuestro portafolio refleja nuestro compromiso con la excelencia técnica y la calidad operativa. Desde el diseño y la implementación de infraestructuras de telecomunicaciones de vanguardia hasta la optimización de redes complejas, nuestras soluciones están orientadas a generar resultados tangibles y sostenibles.
                                <br />
                                <br />
                                A través de este portafolio, demostramos nuestra experiencia en la gestión de proyectos de gran envergadura y nuestra capacidad para adaptarnos a los requisitos únicos de cada cliente.
                            </p>
                        </div>
                        <div className="flex justify-center mb-6 md:mb-0">
                            <img
                                src={Animacion}
                                alt='Animación de bienvenida'
                                className="w-full h-auto max-w-sm"
                            />
                        </div>
                    </div>
                </div>

                <br className="mt-10" />
                <hr />
                <br className="mb-10" />
                {/* Filtros de Categoría */}
                <div className="mb-5 flex justify-center gap-2 overflow-x-auto whitespace-nowrap">
                    {categories.map((category, index) => (
                        <button
                            key={index}
                            className={`py-1 px-3 font-medium rounded-md transition duration-300 ease-in-out ${selectedCategory === category ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-900'} text-xs sm:text-sm md:text-base`}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="mt-10 flow-root sm:mt-20">
                    {/* Rejilla de Proyectos */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                        {filteredProjects.map((project, index) => (
                            <div key={index} className="rounded overflow-hidden shadow-lg flex flex-col">
                                <Link to={project.link}>
                                    <div className="relative">
                                        <img
                                            className="w-full"
                                            src={project.imgSrc}
                                            alt={project.title}
                                        />
                                        <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                                    </div>
                                    <div className="text-xs absolute top-0 right-0 bg-[#4257C0] px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-[#4257C0] transition duration-500 ease-in-out">
                                        {index % 2 === 0 ? 'Proyecto' : 'Servicio'}
                                    </div>
                                </Link>
                                <div className="px-6 py-4 mb-auto">
                                    <Link
                                        to={project.link}
                                        className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
                                    >
                                        {project.title}
                                    </Link>
                                    <p className="text-gray-500 text-sm">
                                        {project.description}
                                    </p>
                                </div>
                                <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
                                    <span className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                                        <FontAwesomeIcon
                                            icon={faBriefcase}
                                            className="h-5 w-5 text-gray-600 mr-1"
                                        />
                                        <span className="ml-1">{project.cliente}</span>
                                    </span>
                                    <span className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                                        <FontAwesomeIcon
                                            icon={faProjectDiagram}
                                            className="h-5 w-5 text-gray-600 mr-1"
                                        />
                                        <span className="ml-1">Fecha: {project.startDate}</span>
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section1;

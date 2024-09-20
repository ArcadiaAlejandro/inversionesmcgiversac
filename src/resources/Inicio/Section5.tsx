import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import corporate_alt from '../../assets/img/svg/corporate.svg'; // Logo que se pone
import { Link } from 'react-router-dom';

const projectsData = [
    {
        title: 'Proyecto de Talara',
        description: 'Un innovador proyecto de infraestructura en la región de Talara.',
        imgSrc: 'https://images.unsplash.com/photo-1625722662233-297060231b85?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fFBST1lFQ1RPUyUyMFRFTEVDT01VTklDQUNJT05FU3xlbnwwfHwwfHx8MA%3D%3D',
        days: '30 días calendarios',
        startDate: '14/05/2024',
        category: 'Construcción y Diseño'
    },
    {
        title: 'Servicio de Telecomunicaciones',
        description: 'Desarrollo de soluciones avanzadas en telecomunicaciones.',
        imgSrc: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8',
        days: '20 días calendarios',
        startDate: '01/01/2024',
        category: 'Mantenimiento en Telecomunicaciones'
    },
    {
        title: 'Proyecto Acobamba',
        description: 'Un ambicioso proyecto de desarrollo urbano en Acobamba.',
        imgSrc: 'https://images.unsplash.com/photo-1527199768775-bdabf8b32f61?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        days: '10 días calendarios',
        startDate: '14/09/2023',
        category: 'Transporte y Alquileres'
    }
];

const categories = [
    'Todos',
    'Mantenimiento en Telecomunicaciones',
    'Construcción y Diseño',
    'Transporte y Alquileres',
    'Energía Eléctrica',
    'Resguardo Particular'
];

const Section6 = () => {
    const [selectedCategory, setSelectedCategory] = useState('Todos');

    const filteredProjects = selectedCategory === 'Todos'
        ? projectsData
        : projectsData.filter(project => project.category === selectedCategory);

    return (
        <>
            <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
                
                {/* Título de la Sección */}
                <div className="text-center mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">
                        Nuestros Proyectos Destacados
                    </h2>
                    <p className="text-gray-600">
                        Explora algunos de nuestros proyectos más recientes y descubre cómo transformamos ideas en realidad.
                    </p>
                </div>

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




                {/* Encabezado de Proyectos */}
                <div className="border-b mb-5 flex justify-between text-sm">
                    <div className="text-[#4257C0] flex items-center pb-2 pr-2 border-b-2 border-[#4257C0] uppercase">
                        <img className="h-5 w-5 mr-1" src={corporate_alt} alt="Corporate Logo" />
                        <a href="#" className="font-semibold inline-block">Nuestros Proyectos</a>
                    </div>
                    <Link to="/Proyectos">
                    <a href="#" className="text-blue-600 hover:underline">Ver todos los proyectos</a>
                    </Link>
                </div>

                {/* Rejilla de Proyectos */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                    {filteredProjects.map((project, index) => (
                        <div key={index} className="rounded overflow-hidden shadow-lg flex flex-col">
                            <a href="#"></a>
                            <div className="relative">
                                <a href="#">
                                    <img
                                        className="w-full"
                                        src={project.imgSrc}
                                        alt={project.title}
                                    />
                                    <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                                </a>
                                <a href="#!">
                                    <div className="text-xs absolute top-0 right-0 bg-[#4257C0] px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-[#4257C0] transition duration-500 ease-in-out">
                                        {index % 2 === 0 ? 'Proyecto' : 'Servicio'}
                                    </div>
                                </a>
                            </div>
                            <div className="px-6 py-4 mb-auto">
                                <a
                                    href="#"
                                    className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
                                >
                                    {project.title}
                                </a>
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
                                    <span className="ml-1">{project.days}</span>
                                </span>

                                <span className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                                    <FontAwesomeIcon
                                        icon={faProjectDiagram}
                                        className="h-5 w-5 text-gray-600 mr-1"
                                    />
                                    <span className="ml-1">Fecha de Inicio: {project.startDate}</span>
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Section6;

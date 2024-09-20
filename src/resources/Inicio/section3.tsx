import React, { useState } from 'react';

import { Link } from 'react-router-dom';

// Define los tipos para los beneficios
interface Benefit {
    title: string;
    description: string;
    link: string;
    imageUrl: string;
}

const Section3: React.FC = () => {
    // Especifica el tipo de selectedGroup
    const [selectedGroup, setSelectedGroup] = useState<'telecomunicaciones' | 'construccion' | 'transporte' | 'energia' | 'resguardo' | null>(null);

    // Define los beneficios con el tipo Benefit
    const benefits: Record<'telecomunicaciones' | 'construccion' | 'transporte' | 'energia' | 'resguardo', Benefit[]> = {
        telecomunicaciones: [
            {
                title: "Soluciones de Generación Eléctrica",
                description: "Desarrollamos desde el diseño e implementación hasta el mantenmiento de generadores, paneles solares, turbinas eólicas, plantas de energía, entre otras soluciones de generación eléctrica.",
                link: "/Contacto",
                imageUrl: 'https://images.unsplash.com/photo-1629754093005-410efa256407?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
            {
                title: "Soluciones de Transmisión Eléctrica",
                description: "Gestionamos desde el diseño e instalación hasta el mantenimiento de sistemas de transmisión electrica.",
                link: "/Contacto",
                imageUrl: 'https://images.unsplash.com/photo-1509390144018-eeaf65052242?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
            {
                title: "Soluciones de Distribución Eléctrica",
                description: "Abarcamos el proceso de diseño, instalación y gestión de infraestructuras como transformadores, cables, equipos de control.",
                link: "/Contacto",
                imageUrl: 'https://images.unsplash.com/photo-1413882353314-73389f63b6fd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGVuZXJnaWElMjBlbGVjdHJpY2F8ZW58MHwwfDB8fHww',
            },
            {
                title: "Servicios de Mantenimiento y Operación Eléctrica",
                description: "Nos encargamos de la inspección, reparación, optimización de equipos como generadores, transformadores, redes de distribución, así como la gestión operativa de estos sistemas.",
                link: "/Contacto",
                imageUrl: 'https://images.unsplash.com/photo-1597502310092-31cdaa35b46d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
        ],
        construccion: [
            {
                title: "Construcciones Civiles y Metálicas",
                description: "Abarcamos el proceso de diseño, construcción y mantenimiento de estructuras utilizando materiales civiles tradicionales (como concreto y mampostería) y metálicos (como acero).",
                link: "/Contacto",
                imageUrl: 'https://images.unsplash.com/photo-1632398535774-b95738ddff68?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29uc3RydWNjaSVDMyVCM24lMjBjaXZpbHxlbnwwfDB8MHx8fDA%3D',
            },
            {
                title: "Edificaciones casas y acabados",
                description: "Realizamos servicios de cimentación estructurada hasta los detalles finales como acabados interiores e exteriores.",
                link: "/Contacto",
                imageUrl: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
            {
                title: "Ampliaciones - Modificaciones en general",
                description: "Nos encargamos de la expansión de espacios, la adición de nuevas áreas, la renovación y reconfiguración de elementos internos, a fin de mejorar el diseño y la capacidad de los inmuebles.",
                link: "/Contacto",
                imageUrl: 'https://plus.unsplash.com/premium_photo-1681989497830-fe4a50acfbfb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
            {
                title: "Fabricación y Montaje de Subestaciones hasta 33kv",
                description: "Abarcamos desde la construcción de los componentes estructurales hasta la integración de equipos eléctricos y sistemas de control.",
                link: "/Contacto",
                imageUrl: 'https://plus.unsplash.com/premium_photo-1679673035124-ae09ce5cb488?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
        ],
        transporte: [
            {
                title: "Autos",
                description: "Ideal para satisfacer todas sus necesidades de transporte, desde autos compactos hasta SUVs, nuestros autos son ideales para ofrecer un transporte comodo ya sea urbano o rural.",
                link: "/Contacto",
                imageUrl: 'https://images.unsplash.com/photo-1615887110697-0819ec23465f?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
            {
                title: "Camioneta 4x4",
                description: "Ideal para terrenos difíciles y actividades off-road. Con capacidad para carga ligera y un rendimiento confiable en diversas condiciones, es perfecta para aventuras y trabajos exigentes.",
                link: "/Contacto",
                imageUrl: 'https://images.unsplash.com/photo-1524095838546-2d9b8d00f212?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
            {
                title: "Minivan H-1",
                description: "Adecuada para el transporte de grupos medianos o familias. Ideal para viajes largos y excursiones.",
                link: "/Contacto",
                imageUrl: 'https://images.unsplash.com/photo-1675311183084-755007dbb223?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
            {
                title: "Van Toyota Hiace",
                description: "Con gran capacidad para el transporte de grupos grandes o equipos, esta van ofrece un amplio espacio interior y configuraciones flexibles, garantizando comodidad y funcionalidad en cada viaje.",
                link: "/Contacto",
                imageUrl: 'https://th.bing.com/th/id/R.5fa86103a5eefbcead66aecdbdfdd663?rik=0y43LhGATKtVLA&pid=ImgRaw&r=0',
            },
            {
                title: "Custer",
                description: "Adecuado tanto para el transporte de carga como de pasajeros. Ideal para operaciones comerciales en entornos urbanos o rurales.",
                link: "/Contacto",
                imageUrl: 'https://www.afatoursperu.com/wp-content/uploads/2021/01/couster-1.jpg',
            },
            {
                title: "Omnibus",
                description: "Diseñado para el transporte de pasajeros en trayectos largos o cortos, este autobús de gran capacidad ofrece confort y seguridad, proporcionando una experiencia de viaje agradable para grupos grandes.",
                link: "/Contacto",
                imageUrl: 'https://th.bing.com/th/id/R.a8a17460d95399000683c158e4c4598a?rik=VKM6v5G3RA4Nkw&pid=ImgRaw&r=0',
            },
            {
                title: "Bus cama e Interprovincial",
                description: "Diseñado para largos viajes interprovinciales, es ideal para viajes extensos o  largos recorridos.",
                link: "/Contacto",
                imageUrl: 'https://images.unsplash.com/photo-1570125909517-53cb21c89ff2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
            {
                title: "Grua HIAB",
                description: "Equipado con una grúa de alto rendimiento, ideal para levantar y transportar materiales pesados o voluminosos.",
                link: "/Contacto",
                imageUrl: 'https://th.bing.com/th/id/R.1c6232bd7a70aebd15d45a158d1ca829?rik=XjrPy1tLq3dW9A&pid=ImgRaw&r=0',
            },
            {
                title: "Volquetes",
                description: "Con una caja basculante, ideal para transportar y descargar materiales de construcción, tierra u otros desechos.",
                link: "Contacto",
                imageUrl: 'https://th.bing.com/th/id/R.a247d108b2de35583a0a3f09f40120a2?rik=gyrFoHjsv2hZUQ&pid=ImgRaw&r=0',
            },
            {
                title: "Camión Cisterna",
                description: "Especializado en el transporte de líquidos, como agua, combustible o productos químicos.",
                link: "/Contacto",
                imageUrl: 'https://bbrskrental.s3-sa-east-1.amazonaws.com/images/product/284-F5-1300.jpg',
            },
            {
                title: "Camion Furgón",
                description: "Diseñado con una plataforma baja para facilitar la carga y descarga de equipos pesados, es ideal para el transporte de grandes objetos que requieren un acceso directo y sencillo",
                link: "/Contacto",
                imageUrl: 'https://www.truck1.eu/img/Truck_Box_truck_DAF_LF_45_150_Manual_Lift-xxl-7117/7117_732080362076.jpg',
            },
            {
                title: "Camión Cama Baja",
                description: "Con una plataforma baja, facilita la carga y descarga de equipos pesados o maquinaria.",
                link: "/Contacto",
                imageUrl: 'https://ecomaqgruas.cl/wp-content/uploads/2019/10/A-16-1400x630.jpg',
            },
            {
                title: "Camión Plataforma",
                description: "El camión plataforma dispone de una superficie abierta ideal para el transporte de cargas grandes y voluminosas.",
                link: "/Contacto",
                imageUrl: 'https://th.bing.com/th/id/OIP.fJxUn0vdITrfoN9ufGQwHQHaE8?rs=1&pid=ImgDetMain',
            },
            {
                title: "Semi Trailer - Plataforma",
                description: "Diseñado con una superficie abierta para el transporte de cargas grandes y pesadas. Ideal para mercancías voluminosas y equipos pesados, ",
                link: "/Contacto",
                imageUrl: 'https://th.bing.com/th/id/R.6dee4a9a46b84057ef43f37214dcfed2?rik=pQ93%2fRccSNDZ1A&pid=ImgRaw&r=0',
            },
            {
                title: "Semi Trailer - Furgón",
                description: "Equipado con una estructura cerrada. Ideal para mercancías que requieren resguardo contra condiciones ambientales y seguridad adicional.",
                link: "/Contacto",
                imageUrl: 'https://th.bing.com/th/id/OIP.4mEduZKKTcko-n1e-hjUXgHaE8?rs=1&pid=ImgDetMain',
            },
        ],
        energia: [
            {
                title: "Mantenimiento de Subestaciones Eléctricas",
                description: "Nos enfocamos en realizar inspecciones, reparaciones y actualizaciones, asegurando el funcionamiento continuo y eficiente de sus subestaciones eléctricas.",
                link: "/Contacto",
                imageUrl: 'https://plus.unsplash.com/premium_photo-1678766819153-b3f7307c5127?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
            {
                title: "Cableados y conexiones de Fuerza, Control e Instrumentación",
                description: "Nos encargamos de la instalación de: conexiones, cableado, implementacion de instrumentos de control para sistemas eléctricos, asegurando el rendimiento optimo de tus sistemas.",
                link: "/Contacto",
                imageUrl: 'https://plus.unsplash.com/premium_photo-1682148175448-8e418fcfbaa7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3wyfHx8ZW58MHx8fHx8',
            },
            {
                title: "Fabricación y Montaje de Subestaciones hasta 33kv",
                description: "Cubrimos desde la construcción de componentes estructurales hasta la integración de equipos eléctricos y sistemas de control.",
                link: "/Contacto",
                imageUrl: 'https://plus.unsplash.com/premium_photo-1679673035124-ae09ce5cb488?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
        ],
        resguardo: [
            {
                title: "Seguridad Física",
                description: "Nos enfocamos en proteger instalaciones, bienes y personas mediante soluciones de vigilancia, control de accesos y patrullaje.",
                link: "/Contacto",
                imageUrl: 'https://i.pinimg.com/736x/1b/16/0f/1b160f9cd3e7e7b86893894b659f1231.jpg',
            },
        ],
    };

    // Especifica el tipo de group
    const handleButtonClick = (group: 'telecomunicaciones' | 'construccion' | 'transporte' | 'energia' | 'resguardo') => {
        setSelectedGroup(group);
    };

    return (
        <section id="features" className="container mx-auto px-4 space-y-6  py-8 md:py-12 lg:py-20">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <span className="text-lg text-gray-400">Haz click en los botones </span>
            <h2 className="font-bold text-2xl leading-[1.1] sm:text-4xl md:text-6xl text-[#363636]">Nuestros Servicios</h2>

            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 text-gray-600 font-light">
            Para obtener información detallada sobre los precios de nuestros servicios, le invitamos a ponerse en contacto con nuestro equipo de atención al cliente o a enviarnos un correo electrónico a través de nuestra página de contacto.
            </p>
            <br />
            <div className="flex flex-wrap gap-4 justify-center">
                <button onClick={() => handleButtonClick('telecomunicaciones')} className="inline-flex text-white bg-[#2f3f8a] border-0 py-2 px-6 focus:outline-none hover:bg-[#3a50b2] rounded text-lg md:text-base lg:text-lg">
                    Mantenimiento en Telecomunicaciones
                </button>
                <button onClick={() => handleButtonClick('construccion')} className="inline-flex text-white bg-[#313131] border-0 py-2 px-6 focus:outline-none hover:bg-[#464545] rounded text-lg md:text-base lg:text-lg">
                    Construcción y Diseño
                </button>
                <button onClick={() => handleButtonClick('transporte')} className="inline-flex text-white bg-[#2f3f8a] border-0 py-2 px-6 focus:outline-none hover:bg-[#3a50b2] rounded text-lg md:text-base lg:text-lg">
                    Transporte y Alquileres
                </button>
                <button onClick={() => handleButtonClick('energia')} className="inline-flex text-white bg-[#313131] border-0 py-2 px-6 focus:outline-none hover:bg-[#464545] rounded text-lg md:text-base lg:text-lg">
                    Energía Eléctrica
                </button>
                <button onClick={() => handleButtonClick('resguardo')} className="inline-flex text-white bg-[#2f3f8a] border-0 py-2 px-6 focus:outline-none hover:bg-[#3a50b2] rounded text-lg md:text-base lg:text-lg">
                    Resguardo Particular
                </button>
            </div>

            <br className="hidden lg:inline-block" />

            {selectedGroup && (
                <h1 className="font-bold text-2xl mt-8 text-[#363636]">Conoce mas de nuestro de: <span className='text-[#e8222e]'>{selectedGroup.charAt(0).toUpperCase() + selectedGroup.slice(1)}</span></h1>
            )}
        </div>

        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
            {selectedGroup && benefits[selectedGroup].map((benefit, index) => (
                <Link key={index} to={benefit.link} className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-[#e8222fa1] p-2">
                    <div className="relative h-48 w-full">
                        <img src={benefit.imageUrl} alt={benefit.title} className="absolute inset-0 w-full h-full object-cover" />
                    </div>
                    <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                        <div className="space-y-2">
                            <h3 className="font-medium text-[#2f3f8a]">{benefit.title}</h3>
                            <p className="text-sm text-muted-foreground text-gray-400">{benefit.description}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    </section>
    );
};

export default Section3;

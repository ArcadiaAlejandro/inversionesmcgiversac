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
    // Establece un valor predeterminado para selectedGroup
    const [selectedGroup] = useState<'transporte'>('transporte');

    // Define los beneficios con el tipo Benefit
    const benefits: Record<'transporte', Benefit[]> = {
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
    };

    return (
<section id="features" className="container mx-auto px-4 py-8 md:py-12 lg:py-20">
    <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:grid-cols-3">
        {benefits[selectedGroup]?.map((benefit, index) => (
            <Link
                key={index}
                to={benefit.link}
                className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow-md hover:shadow-[#e8222f5f]"
            >
                {/* Contenedor para la imagen con relación de aspecto */}
                <div className="relative w-full h-48">
                    <img
                        src={benefit.imageUrl}
                        alt={benefit.title}
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </div>
                <div className="flex flex-col justify-between p-4">
                    <div className="space-y-2">
                        <h3 className="font-medium text-[#2f3f8a] text-lg">{benefit.title}</h3>
                        <p className="text-sm text-gray-600">{benefit.description}</p>
                    </div>
                </div>
            </Link>
        ))}
    </div>
</section>

    );
};

export default Section3;

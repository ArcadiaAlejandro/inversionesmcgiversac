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
    const [selectedGroup] = useState<'telecomunicaciones'>('telecomunicaciones');

    // Define los beneficios con el tipo Benefit
    const benefits: Record<'telecomunicaciones', Benefit[]> = {
        telecomunicaciones: [
            {
                title: "Soluciones de Generación Eléctrica",
                description: "Desarrollamos desde el diseño e implementación hasta el mantenimiento de generadores, paneles solares, turbinas eólicas, plantas de energía, entre otras soluciones de generación eléctrica.",
                link: "/Contacto",
                imageUrl: 'https://images.unsplash.com/photo-1629754093005-410efa256407?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
            {
                title: "Soluciones de Transmisión Eléctrica",
                description: "Gestionamos desde el diseño e instalación hasta el mantenimiento de sistemas de transmisión eléctrica.",
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

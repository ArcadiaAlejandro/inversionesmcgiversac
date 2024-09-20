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
    const [selectedGroup] = useState<'energia'>('energia');

    // Define los beneficios con el tipo Benefit
    const benefits: Record<'energia', Benefit[]> = {
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

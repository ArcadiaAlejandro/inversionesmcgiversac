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
    const [selectedGroup] = useState<'construccion'>('construccion');

    // Define los beneficios con el tipo Benefit
    const benefits: Record<'construccion', Benefit[]> = {
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

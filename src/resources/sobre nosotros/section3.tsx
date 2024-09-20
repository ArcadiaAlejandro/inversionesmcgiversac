import React from 'react';
import { Link } from 'react-router-dom';
const Section3: React.FC = () => {
  return (
    <div className="bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4 items-center">
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Lo Que Hacemos!</h2>
          <p>
            Nos dedicamos a ofrecer soluciones integrales y multifacéticas en diversos sectores, asegurando la excelencia y la eficiencia en cada proyecto.
          </p>
          <ul className="list-disc pl-5">
            <li>Servicio de Mantenimiento en Telecomunicaciones</li>
            <li>Soluciones Eléctricas.</li>
            <li>Servicios Integrales en Construcción y Diseño</li>
            <li>Servicio de Transporte y Alquileres de Maquinaria</li>
          </ul>
          <h3 className="text-2xl font-bold mt-8">Nuestros Estandares!</h3>
          <ul className="list-disc pl-5">
            <li>ISO 9001: Sistema de gestion de la calidad</li>
            <li>ISO 14001: Sistema de gestion Ambiental </li>
            <li>ISO 45001: Sistema de gestion de la seguridad y salud en el trabajo </li>
          </ul>
          <Link to="/Contacto">
          <button className="mt-4 bg-blue-900 text-white py-2 px-4 rounded hover:bg-red-600">
            Contactanos para mayor información
          </button></Link>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img src="https://images.unsplash.com/photo-1582764367269-820716263b19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRlbGVjb211bmljYXRpb25zfGVufDB8fDB8fHww" alt="Construction" className="rounded" />
          <img src="https://plus.unsplash.com/premium_photo-1677434978477-12bd279e58c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8b2JyZXJvJTIwb2JyYXxlbnwwfHwwfHx8MA%3D%3D" alt="Crane" className="rounded" />
          <img src="https://images.unsplash.com/photo-1528845922818-cc5462be9a63?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHRlbGVjb211bmljYXRpb25zfGVufDB8fDB8fHww" alt="Engineer" className="col-span-2 rounded" />

          <img src="https://images.unsplash.com/photo-1574757987642-5755f0839101?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D" alt="Crane" className="rounded" />

          <img src="https://images.unsplash.com/photo-1669910462922-32b56f4998a3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG9icmVybyUyMG9icmF8ZW58MHx8MHx8fDA%3D" alt="Crane" className="rounded" />
        </div>
      </div>
    </div>
  );
};

export default Section3;

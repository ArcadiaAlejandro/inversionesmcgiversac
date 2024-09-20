import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Section2: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('mission');

  const renderContent = () => {
    switch (activeTab) {
      case 'mission':
        return <p>Brindar un servicio eficaz y eficiente en el rubro de Arquitectura, consultoría, ingeniería, construcción y Transporte de Carga, Alquiler de Maquinarias Pesadas, Grúas, Volquetes, Alquiler de Vehículos y Servicios en General a nivel nacional, cumpliendo con los estándares de seguridad, compromiso, garantía y tiempos de entrega pactados con nuestros clientes.</p>;
      case 'vision':
        return <p>Consolidarnos como la empresa líder en el mercado, brindando un mejor servicio cada día, estableciendo alianzas estratégicas comprometiéndonos con las necesidades del cliente y orientándonos hacia un servicio cada vez más competitivo que nos permita alcanzar un reconocido prestigio nacional e internacional.</p>;
      case 'value':
        return <p>
          nuestros valores fundamentales son el corazón de nuestra identidad y la guía para todas nuestras actividades. Por ello cada trabajo que realizamos se basa en los siguientes valores:
          <br />
          * Respeto
          <br />
          * Compromiso
          <br />
          * Responsabilidad
          <br />
          * Trabajo en equipo
          <br />
          * Cooperación 
          <br />
          * Integridad 
          <br />
          * Confianza 
          <br />
          * Servicio 
          <br />
          * Éxito
          <br />
        </p>;
      default:
        return null;
    }
  };

  return (
    <section className="flex flex-col lg:flex-row items-center justify-between p-6 bg-white">
      <div className="lg:w-1/2 mb-6 lg:mb-0">
        <h2 className="text-2xl font-semibold mb-6 text-blue-900">Acerca de Nuestra Empresa</h2>
        <h3 className="text-4xl font-bold mb-6 text-gray-800">Un equipo de Contratistas Altamente Capacitados</h3>
        <p className="mb-6 text-gray-600">Somos <strong className='text-red-500 font-medium'>Inversiones McGuiver</strong>, una empresa multifacética dedicada a proporcionar servicios integrales en los sectores de arquitectura, consultoría, ingeniería, construcción, transporte de carga, alquiler de maquinarias pesadas, grúas, volquetes, vehículos y otros servicios generales a nivel nacional. Nos distinguimos por cumplir rigurosamente con los estándares de seguridad, compromiso, garantía y puntualidad acordados con nuestros clientes.</p>
        <div className="flex border-b border-gray-200 mb-6">
          <button
            onClick={() => setActiveTab('mission')}
            className={`py-2 px-4 rounded-t-md ${activeTab === 'mission' ? 'bg-red-100 text-black font-bold border-b-2 border-red-500' : 'bg-transparent text-gray-800'}`}
          >
            Nuestra Misión
          </button>
          <button
            onClick={() => setActiveTab('vision')}
            className={`py-2 px-4 rounded-t-md ${activeTab === 'vision' ? 'bg-red-100 text-black font-bold border-b-2 border-red-500' : 'bg-transparent text-gray-800'}`}
          >
            Nuestra Visión
          </button>
          <button
            onClick={() => setActiveTab('value')}
            className={`py-2 px-4 rounded-t-md ${activeTab === 'value' ? 'bg-red-100 text-black font-bold border-b-2 border-red-500' : 'bg-transparent text-gray-800'}`}
          >
            Nuestros Valores
          </button>
        </div>
        <div className="mb-6 text-gray-600 border-l-2 border-blue-900 pl-4">
          {renderContent()}
        </div>
        <Link to='/Proyectos'> <button className="bg-red-500 text-white py-2 px-4 hover:bg-blue-900 rounded-md">Ver proyectos desarrollados</button></Link>
        <div className="mt-4">
          <p className="text-gray-600">Contactanos al:</p>
          <p className="text-xl font-bold text-gray-800">+51 939 894 269</p>
        </div>
      </div>
      <div className="lg:w-1/2 flex justify-center">
        <div className="relative">
          <img src="https://plus.unsplash.com/premium_photo-1661681253842-b820ff7406f9?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Team of contractors" className="rounded-lg shadow-lg" />
          <div className="absolute bottom-0 right-0 bg-red-500 text-white py-2 px-4 rounded-md">
            <span className="text-2xl font-bold">25</span>
            <span className="block">WORKS OF</span>
            <span className="block text-lg">EXPERIENCE</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section2;

import { Link } from 'react-router-dom';

import ServiciosTransporte from './section2'
const Section1 = () => {
    return (
      <>
      <div className="flex flex-col">
    <div className="bg-gray-100 py-8 mt-28">
        <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Servicios de Transporte y Alquileres</h1>
            <p className="text-gray-600">Servicio {">"} Transporte y Alquileres</p>
        </div>
    </div>
    <div className="bg-white py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row">
            <div className="w-full md:w-3/4 px-4">
                <img src="https://i.pinimg.com/736x/9a/c9/f5/9ac9f5dad58772d9a455f2aefce316e2.jpg" alt="Blog Featured Image" className="mb-8 w-full" />
                <div className="prose max-w-none">
                    <section>
                    <hr />
                    <header className="text-[#313131] py-4">
                        <div className="container mx-auto text-center">
                            <h1 className="text-3xl font-bold">¿Qué es un servicio de alquiler de Transporte?</h1>
                        </div>
                    </header>

                    <main className="container mx-auto my-8 px-4">
                        <section className="bg-white p-6 rounded-lg shadow-md hover:shadow-black">
                                <h2 className="text-2xl font-bold mb-4">Definición</h2>
                                <p className="mb-4">Un servicio de alquiler de transporte es una oferta que permite a los clientes arrendar vehículos para su uso temporal, en lugar de comprar o poseer un vehículo. Estos servicios pueden incluir una variedad de tipos de vehículos, como automóviles, camionetas, furgones, bicicletas, motocicletas o incluso vehículos especializados como autobuses y camiones. Los clientes pagan una tarifa por el tiempo que utilizan el vehículo, que puede ser por horas, días, semanas o meses.</p>

                                <h3 className="text-xl font-semibold mb-2">Los servicios de alquiler de transporte suelen incluir aspectos como:</h3>
                                <ul className="list-disc list-inside mb-4">
                                    <li>
                                        <strong>Mantenimiento:</strong> Los vehículos están mantenidos y asegurados por la empresa de alquiler, reduciendo responsabilidades adicionales para el cliente.
                                    </li>
                                    <li>
                                        <strong>Variedad de vehiculos: </strong> Nuestros clientes pueden elegir entre diferentes tipos de vehículos según sus necesidades específicas, como autos compactos para viajes cortos o camionetas para mudanzas.
                                        </li>
                                    <li>
                                        <strong>Flexibilidad:</strong> Ofrecemos flexibilidad en términos de duración y tipo de vehículo, adaptándose a diferentes situaciones, desde viajes ocasionales hasta necesidades comerciales. </li>
                                    <li>
                                        <strong>Servicios Adicionales:</strong> Algunos servicios de alquiler pueden incluir opciones adicionales como GPS, asientos para niños o asistencia en carretera.
                                        </li>
                                </ul>
                                <h3 className="text-xl font-semibold mb-2">Importancia del Mantenimiento en Telecomunicaciones</h3>
                                <p>
                                    Un servicio de alquiler de transporte es importante porque proporciona flexibilidad y ahorro al permitir el acceso a vehículos según las necesidades temporales sin los costos y responsabilidades de la propiedad.
                                </p>
                        </section>
                        <br />

                        <section className="bg-white p-6 rounded-lg shadow-md hover:shadow-black">
                            <h2 className="text-2xl font-bold mb-4">¿Cómo te ayuda Inversiones McGiver en el proceso de alquiler?</h2>
                            <p className="mb-4">
                                En Inversiones McGiver, te ayudamos en la tercerización del servicio de alquiler de transporte gestionando la operación completa, desde la adquisición y mantenimiento de la flota hasta la atención al cliente y la logística, permitiendo a otras empresas centrarse en sus actividades principales mientras optimizan costos y procesos relacionados con la movilidad.
                            </p>
                            <p className="mb-4">
                                Nuestros Modelos:
                            </p>
                            <ul className="list-disc pl-5 mb-4">
                                <li>Mantenimiento preventivo para evitar fallos y asegurar la operatividad constante.</li>
                                <li>Diagnóstico y resolución rápida de problemas para minimizar interrupciones.</li>
                                <li>Optimización del rendimiento de los equipos para maximizar su eficiencia.</li>
                                <li>Actualizaciones y mejoras tecnológicas para mantener la compatibilidad y seguridad.</li>
                            </ul>
                            <button className="bg-[#2f3f8a] text-white p-2 rounded hover:bg-[#3a50b2]">Contáctanos</button>
                        </section>

                        <br />
                        <hr />
                        <section className="bg-white p-6">
                                <h2 className="text-3xl font-bold text-center">Nuestros Servicios</h2>
                                <ServiciosTransporte/>
                        </section>

                    </main>
                    <hr />
                    <footer className=" text-gray-400 py-4">
                        <div className="container mx-auto text-center">
                            <p>&copy; 2024 Todos los derechos reservados.</p>
                        </div>
                    </footer>

                    </section>
                </div>
            </div>

             <div className="w-full md:w-1/4 px-4">

                <div className="bg-gray-100 p-4">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Servicios similares</h2>
                    <ul className="list-none">
                        <li className="mb-2">
                           <Link to='/Servicios/Construccion y Diseño'><a className="text-gray-700 hover:text-gray-900">Construcción y Diseño</a></Link>
                        </li>
                        <li className="mb-2">
                           <Link to='/Servicios/Energía Eléctrica'><a className="text-gray-700 hover:text-gray-900">Energía Eléctrica</a></Link>
                        </li>
                        <li className="mb-2">
                            <Link to='/Servicios/Resguardo Particular'><a  className="text-gray-700 hover:text-gray-900">Resguardo Particular</a></Link>
                        </li>
                        <li className="mb-2">
                            <Link to='/Servicios/Telecomunicaciones'><a  className="text-gray-700 hover:text-gray-900">Telecomunicaciones</a></Link>
                        </li>
                    </ul>
                </div>

                
                <div className="bg-gray-100 p-4 mt-4">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Proyectos relacionados</h2>
                    <ul className="list-none">
                        <li className="mb-2">
                            <a href="#" className="text-gray-700 hover:text-gray-900">Proyecto 1</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="text-gray-700 hover:text-gray-900">Proyecto 2</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="text-gray-700 hover:text-gray-900">Proyecto 3</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="text-gray-700 hover:text-gray-900">Proyecto 4</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    </div>
</div>

      </>
    )
  }
  
  export default Section1
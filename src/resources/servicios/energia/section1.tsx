import { Link } from 'react-router-dom';

import ServiciosEnergia from './section2'
const Section1 = () => {
    return (
      <>
      <div className="flex flex-col">
    <div className="bg-gray-100 py-8 mt-28">
        <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Servicios de Energía Eléctrica</h1>
            <p className="text-gray-600">Servicio {">"} Energía Eléctrica </p>
        </div>
    </div>
    <div className="bg-white py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row">
            <div className="w-full md:w-3/4 px-4">
                <img src="https://i.pinimg.com/474x/39/05/81/390581cb4563930c4852fb213a6fd3a1.jpg" alt="Blog Featured Image" className="mb-8 w-full" />
                <div className="prose max-w-none">
                    <section>
                    <hr />
                    <header className="text-[#313131] py-4">
                        <div className="container mx-auto text-center">
                            <h1 className="text-3xl font-bold">¿Qué es un servicio de Energía Eléctrica?</h1>
                        </div>
                    </header>

                    <main className="container mx-auto my-8 px-4">
                        <section className="bg-white p-6 rounded-lg shadow-md hover:shadow-black">
                                <h2 className="text-2xl font-bold mb-4">Definición</h2>
                                <p className="mb-4">Un servicio de energía eléctrica incluye todas las actividades relacionadas con la provisión, gestión y mantenimiento de sistemas eléctricos. Abarca tanto la generación de electricidad como su distribución y consumo. </p>
                                <br />
                                <h3 className="text-xl font-semibold mb-2">Importancia del Mantenimiento en Telecomunicaciones</h3>
                                <p>
                                    El servicio de energía eléctrica es crucial para asegurar un suministro continuo, seguro y eficiente de electricidad, fundamental para el funcionamiento de infraestructuras y la vida cotidiana.
                                </p>
                        </section>
                        <br />

                        <section className="bg-white p-6 rounded-lg shadow-md hover:shadow-black">
                            <h2 className="text-2xl font-bold mb-4">¿Cómo te ayuda Inversiones McGiver en el proceso de Energía Eléctrica?</h2>
                            <p className="mb-4">
                                En Inversiones McGiver, te ayudamos en la gestión de tareas, tanto en la instalacion como en el mantemiento de sistesmas eléctricos, optimizando la eficiencia, reduciendo costos operativos y permitiendo que la empresa principal se enfoque en sus actividades clave mientras asegura un suministro eléctrico confiable y seguro.
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
                                <ServiciosEnergia/>
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
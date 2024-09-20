import { Link } from 'react-router-dom';

import ServiciosConstruccion from './section2'
const Section1 = () => {
    return (
      <>
      <div className="flex flex-col">
    <div className="bg-gray-100 py-8 mt-28">
        <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Servicios de Construcción y Diseño</h1>
            <p className="text-gray-600">Servicio {">"} Construcción y Diseño</p>
        </div>
    </div>
    <div className="bg-white py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row">
            <div className="w-full md:w-3/4 px-4">
                <img src="https://i.pinimg.com/474x/f2/64/df/f264df205abb4f48f642c427808a0fe1.jpg" alt="Blog Featured Image" className="mb-8 w-full" />
                <div className="prose max-w-none">
                    <section>
                    <hr />
                    <header className="text-[#313131] py-4">
                        <div className="container mx-auto text-center">
                            <h1 className="text-3xl font-bold">¿Qué es un servicio de Construcción y Diseño?</h1>
                        </div>
                    </header>

                    <main className="container mx-auto my-8 px-4">
                        <section className="bg-white p-6 rounded-lg shadow-md hover:shadow-black">
                                <h2 className="text-2xl font-bold mb-4">Definición</h2>
                                <p className="mb-4">
                                    
                                Un servicio de Construcción y Diseño abarca dos áreas clave en el desarrollo de proyectos inmobiliarios y de infraestructura:
                                <br />
                                <br />
                               <strong>Diseño:</strong>Esta fase incluye la conceptualización y planificación del proyecto. Los profesionales involucrados en el diseño, como arquitectos e ingenieros, trabajan en la creación de planos, la selección de materiales y la definición de las especificaciones técnicas y estéticas del proyecto. El objetivo es desarrollar una propuesta que cumpla con los requisitos funcionales y estéticos del cliente, y que también cumpla con las normativas y regulaciones locales.
                               <br />
                               <br />
                               <strong>Construcción: </strong> Una vez aprobado el diseño, se pasa a la fase de construcción, que implica la ejecución física del proyecto. Esto incluye la gestión de la obra, la coordinación de los trabajadores y subcontratistas, la compra y uso de materiales, y el seguimiento del avance del proyecto para asegurar que se mantenga dentro del presupuesto y los plazos establecidos. Los constructores y contratistas son responsables de llevar a cabo la construcción según los planos y especificaciones del diseño.
                                </p>

                                <br />
                                <h3 className="text-xl font-semibold mb-2">La importancia de un servicio de Construcción y Diseño radica en varios aspectos fundamentales:</h3>
                                <br />
                                <ul>
                                    <li>
                                        <strong>Integración de Visión y Ejecución:</strong> La colaboración entre diseñadores y constructores asegura que la visión del proyecto se lleve a cabo de manera efectiva. Esto evita malentendidos y errores, ya que los diseñadores pueden guiar a los constructores en cómo implementar sus ideas de manera precisa.
                                    </li>
                                    <li>
                                        <strong>Eficiencia y Optimización:</strong> La combinación de diseño y construcción en un solo servicio puede mejorar la eficiencia del proyecto, optimizar el uso de recursos y reducir costos. Una planificación adecuada y una ejecución bien coordinada minimizan retrasos y sobrecostos.
                                    </li>
                                    <li>
                                        <strong>Cumplimiento Normativo:</strong> Un servicio integrado puede garantizar que el proyecto cumpla con todas las normativas y regulaciones locales y de seguridad. Los diseñadores se aseguran de que el proyecto cumpla con los códigos de construcción, mientras que los constructores implementan esas directrices durante la ejecución.
                                    </li>

                                    <li>
                                        <strong>Calidad y Durabilidad:</strong> La colaboración continua entre diseño y construcción contribuye a la calidad del proyecto final. Un diseño bien pensado y ejecutado de manera competente asegura que el resultado sea estéticamente agradable y funcionalmente eficiente, y que tenga una vida útil prolongada.
                                    </li>

                                    <li>
                                        <strong>Comunicación y Coordinación:</strong> Un servicio integrado facilita la comunicación continua entre todas las partes involucradas, reduciendo la posibilidad de malentendidos y errores. Esto asegura que todos los aspectos del proyecto se coordinen de manera efectiva desde la fase de diseño hasta la finalización de la construcción.
                                    </li>
                                    <li>
                                        <strong>Satisfacción del Cliente:</strong> Un enfoque cohesivo asegura que el proyecto se realice según las expectativas del cliente en términos de diseño, presupuesto y plazos. La satisfacción del cliente es mayor cuando todas las fases del proyecto están alineadas y bien gestionadas.
                                    </li>
                                    <li>
                                        <strong>Innovación y Creatividad:</strong> La integración de diseño y construcción permite una mayor flexibilidad para explorar soluciones innovadoras. Los diseñadores y constructores pueden colaborar para encontrar nuevas formas de mejorar el proyecto, utilizando tecnologías y métodos de construcción modernos.
                                    </li>
                                </ul>
                        </section>
                        <br />

                        <section className="bg-white p-6 rounded-lg shadow-md hover:shadow-black">
                            <h2 className="text-2xl font-bold mb-4">¿Cómo te ayuda Inversiones McGiver en el proceso de construcción y diseño?</h2>
                            <p className="mb-4">
                                En Inversiones McGiver, te ayudamos con la construcción y el diseño, manejando desde la planificación y ejecución del proyecto hasta la coordinación y cumplimiento normativo.
                            </p>
                            <button className="bg-[#2f3f8a] text-white p-2 rounded hover:bg-[#3a50b2]">Contáctanos</button>
                        </section>

                        <br />
                        <hr />
                        <section className="bg-white p-6">
                                <h2 className="text-3xl font-bold text-center">Nuestros Servicios</h2>
                                <ServiciosConstruccion/>
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
                           <Link to='/Servicios/Transporte y Alquileres'> <a className="text-gray-700 hover:text-gray-900">Transporte y Alquileres</a></Link>
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
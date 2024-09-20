import { Link } from 'react-router-dom';
const Section1 = () => {
    return (
      <>
      <div className="flex flex-col">
    <div className="bg-gray-100 py-8 mt-28">
        <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Servicios de Resguardo</h1>
            <p className="text-gray-600">Servicio {">"} Resguardo</p>
        </div>
    </div>
    <div className="bg-white py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row">
            <div className="w-full md:w-3/4 px-4">
                <img src="https://i.pinimg.com/736x/1b/16/0f/1b160f9cd3e7e7b86893894b659f1231.jpg" alt="Blog Featured Image" className="mb-8 w-full" />
                <div className="prose max-w-none">
                    <section>
                    <hr />
                    <header className="text-[#313131] py-4">
                        <div className="container mx-auto text-center">
                            <h1 className="text-3xl font-bold">¿Qué es un servicio de resguardo?</h1>
                        </div>
                    </header>

                    <main className="container mx-auto my-8 px-4">
                        <section className="bg-white p-6 rounded-lg shadow-md hover:shadow-black">
                                <h2 className="text-2xl font-bold mb-4">Definición</h2>
                                <p className="mb-4">Un servicio de resguardo es una forma de protección y seguridad ofrecida para salvaguardar bienes, personas, información o cualquier otro tipo de activo. La naturaleza exacta del servicio puede variar según el contexto en el que se aplique.</p>

                                <h3 className="text-xl font-semibold mb-2">Áreas Principales:</h3>
                                <ul className="list-disc list-inside mb-4">
                                    <li>
                                        <strong>Seguridad Física:</strong> En el ámbito físico, puede referirse a la protección de instalaciones, propiedades o eventos mediante vigilancia y guardias de seguridad.
                                    </li>
                                </ul>
                                <h3 className="text-xl font-semibold mb-2">¿Porque es importante tener un Resguardo?</h3>
                                <p>
                                Tener un resguardo es importante porque protege contra pérdidas y asegura la continuidad y seguridad de los activos, ya sean físicos, digitales o personales.
                                </p>
                        </section>
                        <br />

                        <section className="bg-white p-6 rounded-lg shadow-md hover:shadow-black">
                            <h2 className="text-2xl font-bold mb-4">¿Cómo te ayuda Inversiones McGiver en el proceso?</h2>
                            <p className="mb-4">
                                En Inversiones McGiver, te proporcionamos una experiencia especializada y soluciones personalizadas para proteger activos, asegurar la continuidad del negocio y gestionar riesgos de manera más eficiente y efectiva que si se hiciera internamente.
                            </p>
                            <Link to='/Contacto'>
                            <button className="bg-[#2f3f8a] text-white p-2 rounded hover:bg-[#3a50b2]">Contáctanos</button></Link>
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
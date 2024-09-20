import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Storage  from '../firebase/firebase';
import { ref, getDownloadURL } from 'firebase/storage';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const [logo, setlogo] = useState('');

  useEffect(() => {
  // Reemplaza 'videos/Video_Presentacion.mp4' con la ruta de tu video en Firebase
  const videoRef = ref(Storage, 'https://firebasestorage.googleapis.com/v0/b/mcguiver-b7682.appspot.com/o/inversiones%2Fsvg%2FLogo.svg?alt=media&token=02165639-42b9-40c6-8f5c-4a332ab352b5');
  
  getDownloadURL(videoRef)
    .then((logo) => {
      setlogo(logo); // Guarda la URL en el estado
    })
    .catch((error) => {
      console.error('Error al obtener el logo', error);
    });
}, []);

  return (
    <nav className="bg-white border-gray-200 fixed top-0 left-0 right-0 shadow-md z-50">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-10">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-8" alt="Inversiones McGiver" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-blue-900">
            Inversiones McGiver
          </span>
        </Link>
        <button
          data-collapse-toggle="mega-menu-full"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:hover:bg-gray-700 dark:focus:ring-gray-600 text-black"
          aria-controls="mega-menu-full"
          aria-expanded={isMenuOpen ? 'true' : 'false'}
          onClick={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          id="mega-menu-full"
          className={`items-center justify-center font-medium ${isMenuOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`}
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-white md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 text-black hover:text-gray-700 hover:border-b-2 hover:border-red-500 md:hover:bg-transparent md:p-0"
              >
                Inicio
              </Link>
            </li>
            <li>
              <button
                id="mega-menu-full-dropdown-button"
                data-collapse-toggle="mega-menu-full-dropdown"
                className="flex items-center justify-between w-full py-2 px-3 text-black md:w-auto hover:text-gray-700 hover:border-b-2 hover:border-red-500 md:hover:bg-transparent md:border-0 md:p-0"
                aria-expanded={isDropdownOpen ? 'true' : 'false'}
                aria-controls="mega-menu-full-dropdown"
                onClick={toggleDropdown}
              >
                Servicios
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
            </li>
            <li>
              <Link
                to="/Proyectos"
                className="block py-2 px-3 text-black hover:text-gray-700 hover:border-b-2 hover:border-red-500 md:hover:bg-transparent md:p-0"
              >
                Proyectos
              </Link>
            </li>
            <li>
              <Link
                to="/AboutUs"
                className="block py-2 px-3 text-black hover:text-gray-700 hover:border-b-2 hover:border-red-500 md:hover:bg-transparent md:p-0"
              >
                Sobre Nosotros
              </Link>
            </li>
            <li>
              <Link
                to="/Contacto"
                className="block py-2 px-3 text-black hover:text-gray-700 hover:border-b-2 hover:border-red-500 md:hover:bg-transparent md:p-0"
              >
                Contáctanos
              </Link>
            </li>
            {/* Botón de inicio de sesión */}
            <li>
              <Link
                to="/Login"
                className="block py-2 px-3 text-black hover:text-gray-700 hover:bg-blue-100 md:hover:bg-transparent md:p-1 bg-blue-900 text-white rounded-md"
              >
                Iniciar Sesión
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div
        id="mega-menu-full-dropdown"
        className={`mt-1 border-gray-200 shadow-sm bg-white md:bg-white border-y ${isDropdownOpen ? 'block' : 'hidden'}`}
      >
        <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:px-6">
          <ul>
            <li>
              <Link
                to="/Servicios/Telecomunicaciones"
                className="block p-3 rounded-lg hover:bg-blue-100"
              >
                <div className="font-semibold text-black">
                  Mantenimiento en Telecomunicaciones
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Proporcionamos servicios especializados en el mantenimiento y optimización de equipos y sistemas de telecomunicaciones para asegurar su funcionamiento continuo y eficiente.
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/Servicios/Construccion y Diseño"
                className="block p-3 rounded-lg hover:bg-blue-100"
              >
                <div className="font-semibold text-black">
                  Servicios de Construcción y Diseño
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Ofrecemos soluciones integrales en construcción y diseño, desde la edificación hasta la modificación de estructuras, adaptándonos a las necesidades de cada proyecto.
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/Servicios/Energía Eléctrica"
                className="block p-3 rounded-lg hover:bg-blue-100"
              >
                <div className="font-semibold text-black">
                  Servicios de Energía Eléctrica
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Ofrecemos soluciones integrales en energía eléctrica diseñadas para satisfacer todas tus necesidades energéticas.
                </span>
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link
                to="/Servicios/Transporte y Alquileres"
                className="block p-3 rounded-lg hover:bg-blue-100"
              >
                <div className="font-semibold text-black">
                  Servicio de Transporte y Alquileres
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Garantizamos transporte seguro y eficiente de carga a nivel nacional, con vehículos adecuados para diversas necesidades logísticas.
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/Servicios/Resguardo Particular"
                className="block p-3 rounded-lg hover:bg-blue-100"
              >
                <div className="font-semibold text-black">
                  Servicio de Resguardo
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Disponemos de una amplia gama de maquinaria pesada, vehículos y equipos para alquiler, adaptados a los requerimientos específicos de cada proyecto.
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;

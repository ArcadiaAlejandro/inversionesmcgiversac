import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import './index.css';


import Home from './routes/navegacion/Inicio.tsx';
import Contacto from './routes/navegacion/contacto.tsx';
import AboutUs from './routes/navegacion/About.tsx';
import Servicios from './routes/navegacion/service.tsx';
import Proyectos from './routes/navegacion/proyectos.tsx';

//importacion de rutas para el login y register

import Login from './routes/login/login.tsx';

import Dashboard from './routes/login/dashboard/dashboard.tsx';

//servicios paginas
import Telecomunicaciones from './routes/servicios/servicio-telecom.tsx'
import   Construccion from './routes/servicios/servicios-construccion.tsx'
import   Transporte from './routes/servicios/servicio-transporte.tsx'
import   Energía from './routes/servicios/servicio-energia.tsx'
import   Resguardo from './routes/servicios/servicio-resguardo.tsx'

//proyectos paginas

import ProyectosEjemplo from './routes/proyectos/proyecto1.tsx'

// Importa el componente PrivateRoute
import PrivateRoute from './routes/privateRoute.tsx';


const router = createHashRouter([
  {
    path: '/',
    element: <Home />,
  },

  {
    path: '/AboutUs',
    element: <AboutUs />,
  },

  {
    path: '/Servicios',
    element: <Servicios />,
  },

  {
    path: '/Servicios/Telecomunicaciones',
    element: <Telecomunicaciones />
  },

  {
    path: '/Servicios/Construccion y Diseño',
    element: <Construccion />
  },

  {
    path: '/Servicios/Transporte y Alquileres',
    element: <Transporte />
  },

  {
    path: '/Servicios/Energía Eléctrica',
    element: <Energía />
  },

  
  {
    path: '/Servicios/Resguardo Particular',
    element: <Resguardo />
  },

  {
    path: '/Proyectos',
    element: <Proyectos />,
  },

  {
    path: '/Proyectos/ejemplo',
    element: <ProyectosEjemplo/>,
  },

  {
    path: '/Contacto',
    element: <Contacto />
  },

  {
    path: '/login',
    element: <Login />
  },
  //Ruta protegida para dashboard

  {
    path: '/dashboard',
    element: <PrivateRoute element={<Dashboard />} />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)

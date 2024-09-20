import { useState } from 'react';
import logo from '../../../assets/img/svg/Logo.svg';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

    

  return (
    <div className="h-screen font-sans bg-cover flex items-center justify-center"
         style={{ backgroundImage: "url('https://images.unsplash.com/photo-1591926867314-8cede09981e8?q=80&w=1213&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
      <div className="container mx-auto flex flex-col justify-center items-center h-full p-4">
        <div className="w-full max-w-lg">
          <div className="leading-loose">
            <form className="p-6 sm:p-8 md:p-10 bg-white bg-opacity-75 rounded-lg shadow-lg">
              <div className="mb-6 flex justify-center">
                <img 
                  src={logo} 
                  alt="Your Company Logo" 
                  className="h-12 w-auto sm:h-16"
                />
              </div>
              <p className="text-gray-900 text-center text-lg sm:text-xl font-bold">Inicio de Sesión</p>
              <div className="mt-4">
                <label className="block text-sm text-gray-700" htmlFor="email">Correo Electrónico</label>
                <input 
                  className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500" 
                  type="email" 
                  id="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Ingrese su Correo Electrónico" 
                  aria-label="email" 
                  required
                />
              </div>
              <div className="mt-4">
                <label className="block text-sm text-gray-700" htmlFor="password">Contraseña</label>
                <input 
                  className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500" 
                  type="password" 
                  id="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Ingrese su contraseña" 
                  aria-label="password" 
                  required
                />
              </div>
              <div className="mt-6 flex flex-col items-center">
                <button 
                  className="px-4 py-2 text-white font-semibold bg-blue-900 hover:bg-blue-700 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  type="submit"
                >
                  Iniciar Sesión
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

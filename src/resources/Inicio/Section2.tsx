import { Link } from 'react-router-dom';
const Section3 = () => {
  return (
  <>

<section className="relative bg-white dark:bg-gray-900 overflow-hidden">
  <div className="container mx-auto px-6 py-10 md:py-10 relative z-10">
    <div className="bg-white p-6 md:p-10 lg:p-12 lg:max-w-lg shadow-lg">
      <div className="flex justify-between font-bold text-sm text-gray-800">
        <p>Sobre Nosotros</p>
        <p className="text-[#4257C0]">Más que una empresa, somos tus socios</p>
      </div>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 md:mt-6 lg:mt-8">
        ¿Qué es Inversiones McGiver?
      </h2>
      <br />
      <p className="my-3 text-justify font-medium text-gray-700 leading-relaxed">
        Somos una empresa peruana líder en los sectores de telecomunicaciones, rquitectura, consultoría, ingeniería, construcción, transporte de carga, alquiler de maquinaria pesada, grúas, volquetes y vehículos, entre otros servicios.
        <br />
        <br />
        Nuestra cobertura es a nivel nacional, destacandonos por cumplir rigurosamente con los
        estándares de seguridad, compromiso, garantía y puntualidad acordados con nuestros clientes.
      </p>
      <Link to='/AboutUs'> <button className="mt-4 md:mt-6 p-3 px-5 bg-black text-white font-bold text-sm hover:bg-[#4257C0] transition duration-300">
        Conocer más →
      </button></Link>
    </div>
  </div>
  <div className="absolute top-0 right-0 bottom-0 left-0 z-0 overflow-hidden">
    <img
      className="object-cover w-full h-full transform scale-110"
      src="https://images.unsplash.com/photo-1511233744044-194342066754?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Sobre Nosotros"
    />
  </div>
</section>




  </>
  )
}

export default Section3

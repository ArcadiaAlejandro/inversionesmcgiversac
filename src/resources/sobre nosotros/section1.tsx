const Section1 = () => {
    return (
      <>
       <div className="relative w-screen h-screen overflow-hidden">
            {/*Capa Azul */}
            <div className="absolute inset-0 bg-[#161D39] opacity-50 z-10"></div>
            
            {/*Imagen de Fondo*/}
            <img 
                src="https://plus.unsplash.com/premium_photo-1663040243895-00ffc155caff?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                className="absolute top-0 left-0 w-full h-full object-cover" 
                alt="Fondo de contacto" 
            />

            {/*Contenid*/}
            <div className="relative z-20 flex items-center justify-center w-full h-full px-6">
                <div className="text-center max-w-screen-lg">
                    <h1 className="text-white font-bold text-4xl lg:text-5xl mb-6">Sobre Nosotros</h1>
                    <p className="text-stone-100 text-base lg:text-lg mb-8">
                        Inicio <strong className="text-red-600"> {'>>'} </strong> Sobre Nosotros
                    </p>
                </div>
            </div>
        </div>

      </>
    )
  }
  
  export default Section1
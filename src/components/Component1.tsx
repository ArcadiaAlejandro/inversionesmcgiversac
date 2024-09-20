import { useState, useEffect } from 'react';

const AppearingText = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500); // Ajusta el retraso según sea necesario
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="text-center px-4 py-8 space-y-8">
      {/* Título Principal */}
      <h1
        className={`text-3xl font-bold tracking-tight text-white sm:text-5xl ${isVisible ? 'fade-in-up' : ''}`}
        style={{ animationDelay: '0.5s', marginTop: '-20px' }}
      >
        Nuestros Clientes Nos Prefieren <br />
        por Nuestra Vasta Experiencia
      </h1>
      
      {/* Descripción Principal */}
      <p
        className={`text-lg leading-8 text-gray-300 ${isVisible ? 'fade-in-up' : ''}`}
        style={{ animationDelay: '0.5s' }}
      >
        En <strong className='text-red-500'>Inversiones McGuiver</strong>, nuestra experiencia y profesionalismo son la base de la confianza que nuestros clientes depositan en nosotros. Con años de trayectoria en el sector, hemos demostrado nuestra capacidad para entregar soluciones precisas y efectivas que responden a las necesidades específicas de cada cliente. Nuestro compromiso con la excelencia y la calidad nos ha permitido establecer relaciones duraderas con nuestros clientes, basadas en la confianza y la satisfacción mutua. Los testimonios de satisfacción que recibimos son el mejor reflejo de nuestro trabajo y la prueba de nuestro enfoque en ofrecer resultados que marcan la diferencia. 
      </p>

      {/* Conclusión */}
      <p className={`text-lg leading-8 text-gray-300 ${isVisible ? 'fade-in-up' : ''}`} style={{ animationDelay: '1s' }}>
        Con nuestro apoyo, no solo mejorarás la eficiencia operativa, sino que también asegurarás resultados exitosos y sostenibles a largo plazo.
      </p>
    </div>
  );
};

export default AppearingText;

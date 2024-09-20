import { useState, useEffect } from 'react';

const images = [
  "https://i.pinimg.com/736x/73/5c/16/735c16075ffce93806abdc07158eaa11.jpg",
  "https://i.pinimg.com/474x/f2/64/df/f264df205abb4f48f642c427808a0fe1.jpg",
  "https://i.pinimg.com/474x/3e/eb/e9/3eebe9eb53f4102b1dc355ebbe6e36bc.jpg",
  "https://i.pinimg.com/474x/b4/98/31/b49831b7df3f645aae99c0c323a9e1c4.jpg",
  "https://i.pinimg.com/736x/5c/c0/be/5cc0bedf24f9f5075f5dfb081813874a.jpg",
  "https://i.pinimg.com/736x/9a/c9/f5/9ac9f5dad58772d9a455f2aefce316e2.jpg",
  "https://i.pinimg.com/736x/1b/16/0f/1b160f9cd3e7e7b86893894b659f1231.jpg",
  "https://i.pinimg.com/474x/39/05/81/390581cb4563930c4852fb213a6fd3a1.jpg",
];

const Section1 = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage(prevImage => (prevImage + 1) % images.length);
    }, 2000);

    return () => clearInterval(intervalId); // Limpiar intervalo al desmontar el componente
  }, []);

  return (
    <>
      <div className="w-screen h-screen overflow-hidden relative before:block before:absolute before:bg-black before:h-full before:w-full before:top-0 before:left-0 before:z-10 before:opacity-30">
        <img
          src={images[currentImage]}
          className="absolute top-0 left-0 min-h-screen w-full object-contain"
          alt="Fondo de contacto"
        />
        <div className="relative z-20 max-w-screen-lg mx-auto grid grid-cols-12 h-full items-center px-6">
          <div className="col-span-12 lg:col-span-6">
            <span className="uppercase text-white text-sm font-normal mb-2 block">Somos Expertos en Telecomunicaciones</span>
            <h1 className="text-white font-bold text-4xl lg:text-5xl mb-6">Contáctanos para Asistencia Personalizada</h1>
            <p className="text-stone-100 text-base lg:text-lg mb-8">
              En Inversiones McGuiver, nos enorgullecemos de ofrecer un servicio al cliente excepcional y soporte técnico especializado. Si tienes preguntas sobre nuestros servicios, necesitas ayuda con un problema técnico, o simplemente quieres saber más sobre lo que ofrecemos, estamos aquí para ayudarte.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section1;

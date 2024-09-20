import emailjs from 'emailjs-com';
import { useState } from 'react';

const Section2 = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm('service_i9jfr3o', 'template_zuqd9iv', e.currentTarget, 'BgK7sNZ-qyG5ijcMh')
      .then((result) => {
        console.log(result.text);
        alert("Mensaje enviado exitosamente");
      }, (error) => {
        console.log(error.text);
        alert("Error al enviar el mensaje");
      });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: ''
    });
  };

  return (
    <>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe width="100%" height="100%" className="absolute inset-0" title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3904.7618029813952!2d-77.07024092582209!3d-11.851939888369873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c7a2adb4ac11%3A0x99f2c265aa9ff45d!2sINVERSIONES%20MCGIVER%20SAC!5e0!3m2!1ses!2sbr!4v1722185246551!5m2!1ses!2sbr"
            ></iframe>
            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">Direccion de nuestra oficina Principal</h2>
                <p className="mt-1">URB. los parques de Carabayllo - DPTO 204 - Edificio 3, Etapa II - Lima</p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                <a className="text-red-500 leading-relaxed">inversionesmcgiver@gmail.com</a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">Celular</h2>
                <p className="leading-relaxed">939-894-269</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-gray-900 text-2xl mb-1 font-bold title-font">¿Como podemos ayudarte?</h2>
            <p className="leading-relaxed mb-5 text-gray-600">Nuestro equipo está disponible para resolver tus dudas y ofrecerte la información que necesitas sobre nuestros productos y servicios.

              <br />
              <br />
              <h2 className="text-gray-900 text-3xl mb-1 font-bold title-font">Formulario de Contacto</h2>
              Completa el formulario a continuación con tus datos y tu mensaje. Nos aseguraremos de responderte lo antes posible.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="relative mb-4">
                <label htmlFor="name" className="leading-7 text-sm text-gray-600">Nombre Completo</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Correo Electronico</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <div className="relative mb-4">
                <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Celular</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <div className="relative mb-4">
                <label htmlFor="company" className="leading-7 text-sm text-gray-600">Nombre de la empresa</label>
                <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <div className="relative mb-4">
                <label htmlFor="subject" className="leading-7 text-sm text-gray-600">Asunto del mensaje</label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <div className="relative mb-4">
                <label htmlFor="message" className="leading-7 text-sm text-gray-600">Mensaje</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
              </div>
              <button type="submit" className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">Enviar Correo Electronico</button>
            </form>

            <p className="text-xs text-gray-500 mt-3">En Inversiones McGiver, valoramos tu tiempo y estamos aquí para asegurarnos de que tengas la mejor experiencia posible con nuestros servicios. No dudes en comunicarte con nosotros; estamos listos para asistirte.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section2;



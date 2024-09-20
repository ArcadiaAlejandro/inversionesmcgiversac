import React from 'react';
import html2pdf from 'html2pdf.js';
import Logo from '../../../assets/img/jpg/logo.jpg';

const ArticleComponent: React.FC = () => {
  const generatePDF = () => {
    const element = document.getElementById('content-to-export');
    if (element) {
      const opt = {
        margin: [0.5, 0.5, 0.5, 0.5], // Ajusta los márgenes si es necesario (top, left, bottom, right)
        filename: 'documento.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 , useCORS: true },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' } // Configura orientación vertical y formato de hoja
      };
      html2pdf().set(opt).from(element).save();
    } else {
      console.error('El elemento no se encontró.');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-center mb-4">
        <img 
          src={Logo} 
          alt="Logo de la Empresa" 
          className="w-32"
        />
      </div>
      <article id="content-to-export" className="mt-8 p-8 bg-white rounded shadow-lg max-w-5xl mx-auto">
        <div className="text-center mb-6">
          <h1 className="mb-3 text-3xl font-bold text-gray-900 md:text-4xl">
            Rise of Tailwind - A Utility First CSS Framework
          </h1>
          <p className="text-base text-gray-500">January 18, 2021 — Written by Praveen Juge</p>
        </div>
        <hr />
        <br />
        <div className="flex justify-center mb-6 space-x-4">
          <p className="text-gray-600">Share this article</p>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
              <path d="M13.397,20.997v-8.196h2.765l0.411-3.209h-3.176V7.548c0-0.926,0.258-1.56,1.587-1.56h1.684V3.127C15.849,3.039,15.025,2.997,14.201,3c-2.444,0-4.122,1.492-4.122,4.231v2.355H7.332v3.209h2.753v8.202H13.397z" />
            </svg>
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
              <path d="M19.633,7.997c0.013,0.175,0.013,0.349,0.013,0.523c0,5.325-4.053,11.461-11.46,11.461c-2.282,0-4.402-0.661-6.186-1.809c0.324,0.037,0.636,0.05,0.973,0.05c1.883,0,3.616-0.636,5.001-1.721c-1.771-0.037-3.255-1.197-3.767-2.793c0.249,0.037,0.499,0.062,0.761,0.062c0.361,0,0.724-0.05,1.061-0.137c-1.847-0.374-3.23-1.995-3.23-3.953v-0.05c0.537,0.299,1.16,0.486,1.82,0.511C3.534,9.419,2.823,8.184,2.823,6.787c0-0.748,0.199-1.434,0.548-2.032c1.983,2.443,4.964,4.04,8.306,4.215c-0.062-0.3-0.1-0.611-0.1-0.923c0-2.22,1.796-4.028,4.028-4.028c1.16,0,2.207,0.486,2.943,1.272c0.91-0.175,1.782-0.512,2.556-0.973c-0.299,0.935-0.936,1.721-1.771,2.22c0.811-0.088,1.597-0.312,2.319-0.624C21.104,6.712,20.419,7.423,19.633,7.997z" />
            </svg>
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
              <circle cx="4.983" cy="5.009" r="2.188" />
              <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zM3.095 8.855H6.87V20.994H3.095z" />
            </svg>
          </a>
        </div>
        <img 
          src="https://images.unsplash.com/photo-1582764367269-820716263b19?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          className="object-cover w-full h-64 bg-center rounded mb-6" 
          alt="Kutty" 
        />
        <div className="prose mx-auto">
          <p>
            What if there is an easy way to achieve responsive UI without using any UI kit? Can we create new and fresh designs for every project with a CSS framework? Enter Tailwind CSS, will this be the
            perfect CSS framework, well let’s find out.
          </p>
          <p>Tailwind is a utility-first CSS framework, the keyword being ‘utility’. It is basically a set of classes that you can use in your HTML.</p>
          <p>
            Therefore, we don’t have to write any custom CSS to get this button. This can be heavily extended to build whole web applications without the need for any other styles apart from Tailwind.
          </p>
          <p>...</p>
        </div>
      </article>
      <div className="flex justify-center mt-6">
        <button onClick={generatePDF} className="px-4 py-2 bg-blue-900 text-white rounded">
          Exportar a PDF
        </button>
      </div>
    </div>
  );
};

export default ArticleComponent;

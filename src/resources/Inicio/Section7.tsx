import React, { useState, useRef } from 'react';

type FAQSubSubItem = {
  question: string;
  answer: string;
};

type FAQSubItem = {
  question: string;
  answer: string;
  subSubItems?: FAQSubSubItem[];
};

type FAQItem = {
  question: string;
  answer: string;
  subItems: FAQSubItem[];
};

const FAQ_DATA: FAQItem[] = [
  {
    question: '1. Información General',
    answer: '',
    subItems: [
      {
        question: '1.1 ¿Qué es Inversiones McGuiver?',
        answer: 'Inversiones McGuiver es una empresa multifacética que ofrece servicios integrales en los sectores de arquitectura, consultoría, ingeniería, construcción, transporte de carga, alquiler de maquinaria pesada, grúas, volquetes, vehículos y otros servicios generales a nivel nacional. Nos destacamos por nuestra seguridad, compromiso, garantía y puntualidad en cada proyecto.',
        subSubItems: [
          {
            question: '1.1.1 ¿Cuál es la misión de Inversiones McGuiver?',
            answer: 'Nuestra misión es proporcionar servicios de alta calidad con un enfoque en la seguridad, la puntualidad y el compromiso, satisfaciendo las necesidades de nuestros clientes en cada proyecto.',
          },
          {
            question: '1.1.2 ¿Cuáles son los valores de Inversiones McGuiver?',
            answer: 'Nos guiamos por valores de integridad, excelencia, innovación, y responsabilidad social y ambiental.',
          }
        ]
      },
      {
        question: '1.2 ¿Dónde se encuentra Inversiones McGuiver?',
        answer: 'Nuestra sede principal está ubicada en URB LOS PARQUES DE CARABAYLLO - LIMA DPTO 204 - EDIFICIO 3, ETAPA II. Atendemos a nivel nacional, por lo que estamos disponibles para proyectos en diversas regiones del país.',
      },
      {
        question: '1.3 ¿Cómo puedo contactar con Inversiones McGuiver?',
        answer: 'Puedes ponerte en contacto con nosotros a través de:\n Teléfono: 939-894-269 \n Correo electrónico: informes@inversionesmcgiver.com \nDirección: DPTO 204 - EDIFICIO 3, ETAPA II - URB LOS PARQUES DE CARABAYLLO - LIMA',
      },
    ],
  },
  {
    question: '2. Servicios',
    answer: '',
    subItems: [
      {
        question: '2.1 ¿Qué servicios ofrecen en telecomunicaciones?',
        answer: 'Ofrecemos servicios de mantenimiento en telecomunicaciones, que incluyen:\n- Resolución de problemas técnicos\n- Actualización de equipos y software\n- Prevención de fallos futuros\n- Optimización del rendimiento general',
      },
      {
        question: '2.2 ¿Qué soluciones de generación eléctrica proporcionan?',
        answer: 'Proporcionamos soluciones completas en generación eléctrica, incluyendo la instalación y mantenimiento de equipos de generación para asegurar un suministro eléctrico continuo y eficiente.',
      },
      {
        question: '2.3 ¿Qué incluye el servicio de construcción y diseño?',
        answer: 'Nuestros servicios de construcción y diseño abarcan:\n- Construcciones civiles y metálicas\n- Edificación de casas y acabados\n- Ampliaciones y modificaciones generales\n- Fabricación y montaje de subestaciones hasta 33kV\n- Fabricación y mantenimiento de transformadores\n- Montaje de redes aéreas hasta 33kV\n- Mantenimiento de subestaciones eléctricas\n- Cableados y conexiones de fuerza, control e instrumentación\n- Cableado estructurado y de fibra óptica',
      },
      {
        question: '2.4 ¿Qué tipo de vehículos y maquinaria tienen disponibles para alquiler?',
        answer: 'Ofrecemos una amplia gama de vehículos y maquinaria, incluyendo:\n- Autos, camionetas 4x4, minivans, vans, y buses\n- Grúas HIAB\n- Volquetes\n- Camiones cisterna, furgón, cama baja, plataforma, semi trailer\n- Otros equipos según necesidades específicas',
      },
    ],
  },
  {
    question: '3. Proyectos y Precios',
    answer: '',
    subItems: [
      {
        question: '3.1 ¿Dónde puedo ver proyectos relacionados con sus servicios?',
        answer: 'Puedes ver ejemplos de nuestros proyectos relacionados en la sección de Proyectos en nuestro sitio web. Esto te dará una idea del alcance y calidad de nuestro trabajo.',
      },
      {
        question: '3.2 ¿Cómo obtengo información sobre precios?',
        answer: 'Para obtener información detallada sobre los precios de nuestros servicios, te invitamos a ponerte en contacto con nuestro equipo de atención al cliente. Estaremos encantados de proporcionarte toda la información necesaria y asesorarte en la elección de la opción que mejor se adapte a tus necesidades.',
      },
    ],
  },
  {
    question: '4. Experiencia y Clientes',
    answer: '',
    subItems: [
      {
        question: '4.1 ¿Qué experiencia tiene Inversiones McGuiver?',
        answer: 'Contamos con una extensa trayectoria en el sector, demostrando capacidad para entregar soluciones efectivas y precisas. Nuestra experiencia es reflejada en los testimonios de satisfacción de nuestros clientes y en los resultados exitosos de nuestros proyectos.',
      },
      {
        question: '4.2 ¿Cuál es el nivel de satisfacción de los clientes?',
        answer: 'Nuestro índice de satisfacción es del 99%, lo que refleja el alto nivel de confianza y satisfacción de nuestros clientes con nuestros servicios.',
      },
    ],
  },
  {
    question: '5. Seguridad y Garantías',
    answer: '',
    subItems: [
      {
        question: '5.1 ¿Qué garantías ofrecen con sus servicios?',
        answer: 'Ofrecemos garantías rigurosas sobre nuestros servicios, asegurando que se cumplan los estándares de calidad, seguridad y puntualidad acordados con nuestros clientes.',
      },
      {
        question: '5.2 ¿Cómo aseguran la seguridad en sus proyectos?',
        answer: 'Implementamos estrictos protocolos de seguridad para garantizar un entorno de trabajo seguro y cumplir con las normativas vigentes. Nuestra prioridad es la protección de nuestros empleados y la integridad de los proyectos.',
      },
    ],
  },
  {
    question: '6. Consultas',
    answer: '',
    subItems: [
      {
        question: '¿Cómo puedo hacer seguimiento a mi consulta?',
        answer: 'Te responderemos por correo electrónico en un plazo de 48 horas. Si no recibes respuesta dentro de ese tiempo, por favor contáctanos a otro canal, disponemos de telefonos, whatsapp, telegram, oficinas y emails.',
      },
      {
        question: '¿Qué debo incluir en mi mensaje?',
        answer: 'Incluye todos los detalles relevantes y cualquier información adicional que pueda ayudarnos a responder tu consulta de manera efectiva.',
      },
    ],
  },
];

const Section8: React.FC = () => {
    const [expanded, setExpanded] = useState<number | null>(null);
    const [expandedSub, setExpandedSub] = useState<{ [key: number]: number | null }>({});
    const faqRefs = useRef<Array<HTMLDivElement | null>>([]);
    const subFaqRefs = useRef<{ [key: number]: Array<HTMLDivElement | null> }>({});
  
    const toggleFAQ = (index: number) => {
      setExpanded(expanded === index ? null : index);
      if (faqRefs.current[index]) {
        faqRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
  
    const toggleSubFAQ = (sectionIndex: number, subIndex: number) => {
      setExpandedSub((prevState) => ({
        ...prevState,
        [sectionIndex]: prevState[sectionIndex] === subIndex ? null : subIndex,
      }));
    };
  
    return (
      <div className="py-24 px-8 max-w-5xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="flex flex-col text-left basis-1/2">
          <p className="inline-block font-semibold text-primary mb-4">Información General</p>
          <p className="sm:text-4xl text-3xl font-extrabold text-base-content">Preguntas Frecuentes (FAQ)</p>
        </div>
        <ul className="basis-1/2">
          {FAQ_DATA.map((section, sectionIndex) => (
            <li key={sectionIndex} className={`faq-item ${expanded === sectionIndex ? 'faq-item-active' : ''}`}>
              <button
                type="button"
                className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
                aria-expanded={expanded === sectionIndex}
                onClick={() => toggleFAQ(sectionIndex)}
              >
                <span className="flex-1 text-base-content">{section.question}</span>
                <svg
                  className={`flex-shrink-0 w-4 h-4 ml-auto fill-current transform transition duration-200 ${
                    expanded === sectionIndex ? 'rotate-90' : ''
                  }`}
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className="transform origin-center transition duration-200 ease-out"
                  ></rect>
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className="transform origin-center rotate-90 transition duration-200 ease-out"
                  ></rect>
                </svg>
              </button>
              <div
                ref={(el) => (faqRefs.current[sectionIndex] = el)}
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  expanded === sectionIndex ? 'max-h-full' : 'max-h-0'
                }`}
                style={{ transition: 'max-height 0.3s ease-in-out' }}
              >
                <div className="pb-5 leading-relaxed">
                  {section.subItems.map((subItem, subIndex) => (
                    <div
                      key={subIndex}
                      className={`space-y-2 leading-relaxed faq-item ${expandedSub[sectionIndex] === subIndex ? 'faq-item-active' : ''}`}
                    >
                      <button
                        type="button"
                        className="relative flex gap-2 items-center w-full py-3 text-base font-semibold text-left md:text-lg border-b border-base-content/10"
                        aria-expanded={expandedSub[sectionIndex] === subIndex}
                        onClick={() => toggleSubFAQ(sectionIndex, subIndex)}
                      >
                        <span className="flex-1 text-base-content">{subItem.question}</span>
                        <svg
                          className={`flex-shrink-0 w-4 h-4 ml-auto fill-current transform transition duration-200 ${
                            expandedSub[sectionIndex] === subIndex ? 'rotate-90' : ''
                          }`}
                          viewBox="0 0 16 16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            y="7"
                            width="16"
                            height="2"
                            rx="1"
                            className="transform origin-center transition duration-200 ease-out"
                          ></rect>
                          <rect
                            y="7"
                            width="16"
                            height="2"
                            rx="1"
                            className="transform origin-center rotate-90 transition duration-200 ease-out"
                          ></rect>
                        </svg>
                      </button>
                      <div
                        ref={(el) => {
                          if (!subFaqRefs.current[sectionIndex]) subFaqRefs.current[sectionIndex] = [];
                          subFaqRefs.current[sectionIndex][subIndex] = el;
                        }}
                        className={`transition-all duration-300 ease-in-out overflow-hidden ${
                          expandedSub[sectionIndex] === subIndex ? 'max-h-full' : 'max-h-0'
                        }`}
                        style={{ transition: 'max-height 0.3s ease-in-out' }}
                      >
                        <div className="pl-4">
                          <p>{subItem.answer}</p>
                          {subItem.subSubItems && (
                            <ul className="mt-4 space-y-2">
                              {subItem.subSubItems.map((subSubItem, subSubIndex) => (
                                <li key={subSubIndex} className="space-y-1 leading-relaxed">
                                  <p className="font-semibold">{subSubItem.question}</p>
                                  <p>{subSubItem.answer}</p>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
};

export default Section8;

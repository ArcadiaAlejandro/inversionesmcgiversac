import { useState, useEffect } from 'react';
import AppearingText from '../../components/Component1';

const Counter = ({ end, duration }: { end: number, duration: number }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let start = 0;
    const endValue = parseInt(String(end), 10);
    const incrementTime = (duration / endValue) * 1000;

    const counter = setInterval(() => {
      start += 1;
      setCount(start);

      if (start === endValue) {
        clearInterval(counter);
      }
    }, incrementTime);

    return () => clearInterval(counter);
  }, [end, duration]);

  return <span>{count}</span>;
};

const Section2 = () => {
  return (
    
  <div className="bg-[#4257C0] py-24 sm:py-12">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-none">
      <div className="text-center text-pretty space-y-4">
          <AppearingText/>
      </div>
        <br />
        <dl className="mt-5 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col bg-white/5 p-8">
            <dt className="text-sm font-semibold leading-6 text-gray-300">Capital levantado</dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-white"><strong>+</strong><Counter end={12} duration={5} />K</dd>
          </div>
          <div className="flex flex-col bg-white/5 p-8">
            <dt className="text-sm font-semibold leading-6 text-gray-300">Presupuesto desarrollado</dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-white"><strong>+</strong><Counter end={10} duration={5} />K</dd>
          </div>
          <div className="flex flex-col bg-white/5 p-8">
            <dt className="text-sm font-semibold leading-6 text-gray-300">Clientes satisfechos</dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-white"><Counter end={99} duration={5} />%</dd>
          </div>
          <div className="flex flex-col bg-white/5 p-8">
            <dt className="text-sm font-semibold leading-6 text-gray-300">Empresas que trabajan con nosotros</dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-white"><strong>+</strong><Counter end={18} duration={5} /></dd>
          </div>
        </dl>
      </div>
    </div>
  </div>

  );
};

export default Section2;
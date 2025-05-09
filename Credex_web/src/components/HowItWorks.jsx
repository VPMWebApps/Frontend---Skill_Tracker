import React from 'react';
import GETPAID from '../assets/GET PAID.png';

const steps = [
  {
    title: 'Upload License',
    desc: 'Submit your software license details securely.',
    gradient: 'from-purple-200 via-pink-300 to-red-300'
  },
  {
    title: 'Get Valuation',
    desc: 'Receive an instant market value estimation.',
    gradient: 'from-blue-200 via-teal-400 to-lime-200'
  },
  {
    title: 'Get Paid',
    desc: 'Get money directly to your bank account.',
    gradient: 'from-yellow-200 via-orange-300 to-pink-300'
  },
];

function HowItWorks() {
  return (
    <section className="bg-black text-white py-24 px-6 text-center">
      <h2 className="text-9xl font-semibold  mb-4 ">HOW IT</h2>
      <h2 className="text-9xl font-bold mb-12 tracking-widest">WORKS</h2>
      <p className="text-gray-400 max-w-2xl mx-auto mb-20 font-semibold text-lg">
        Easily sell your unused software licenses in 3 simple steps — fast, secure, and hassle-free.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* STEP 1 & 2 */}
        {steps.slice(0, 2).map((step, index) => (
          <div
            key={index}
            className={`relative bg-gradient-to-br ${step.gradient} rounded-xl overflow-hidden shadow-xl group transition-transform hover:-translate-y-2 duration-300`}
          >
            <div className="p-8 flex flex-col items-center justify-center h-[400px]">
              <div className="text-5xl text-black/90 font-bold tracking-widest font-[SF Pro Display] mb-8">
                STEP {index + 1}
              </div>
              <img src={GETPAID} alt={`Step ${index + 1}`} className="w-60 h-60 object-contain mb-6" />
              <h3 className="text-5xl font-semibold mb-2 text-black/80">{step.title}</h3>
              <p className="text-black text-md font-semibold text-2xl">{step.desc}</p>
            </div>
          </div>
        ))}

        {/* STEP 3 - Full Width */}
        <div
          className={`md:col-span-2 relative bg-gradient-to-br ${steps[2].gradient} rounded-xl overflow-hidden shadow-xl group transition-transform hover:-translate-y-2 duration-300`}
        >
          <div className="p-8 flex flex-col items-center justify-center h-[5    00px]">
            <div className="text-5xl text-black/90 font-bold tracking-widest font-[SF Pro Display] mb-8">
              STEP 3
            </div>
            <img src={GETPAID} alt="Step 3" className="w-150 h-100 " />
            <h3 className="text-6xl text-black/80 font-semibold mb-2">{steps[2].title}</h3>
            <p className="text-black font-semibold text-4xl">{steps[2].desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;

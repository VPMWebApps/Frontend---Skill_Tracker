import React from 'react';
import { motion } from 'framer-motion';
import FAST from '../assets/FAST.png';
import secureIcon from '../assets/SECURE.png';
import trustIcon from '../assets/TRUST.png';
import supportIcon from '../assets/SUPPORT.png';

const features = [
    {
        icon: FAST,
        title: 'FAST PROCESS',
        desc: 'GET YOUR LICENSE\n SOLD FASTER',
        align: 'left',
    },
    {
        icon: secureIcon,
        title: 'SECURE',
        desc: 'YOUR DATA IS SAFE WITH US',
        align: 'right',
    },
    {
        icon: trustIcon,
        title: 'TRUST',
        desc: "WE WORK WITH PROFESSIONAL BUYER'S",
        align: 'left',
    },
    {
        icon: supportIcon,
        title: 'SUPPORT',
        desc: 'DEDICATED TEAM TO ASSIST YOU',
        align: 'right',
    },
];

const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const WhyChooseUs = () => {
    return (
        <section className="bg-black text-white py-20 px-6 relative">
            <h2 className="text-9xl font-bold mb-[10vw] text-center ">
                WHY <br />
                <span className="not-italic opacity-80 tracking-widest"> CHOOSE US</span>
            </h2>

            <div className="flex flex-col gap-14 max-w-6xl mx-auto">
                {features.map((item, index) => (
                    <React.Fragment key={index}>
                        <motion.div
                            className={`flex flex-col md:flex-row items-start justify-between ${item.align === 'right' ? 'md:flex-row-reverse' : ''}`}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={fadeIn}
                        >
                            {/* Icon */}
                            <div
                                className={`bg-gradient-to-br from-orange-200 via-pink-200 to-blue-200 p-12 rounded-xl shadow-lg flex items-center justify-center w-120 h-156 ${item.align === 'right' ? 'ml-12' : 'mr-12'
                                    }`}
                            >
                                <img src={item.icon} alt={item.title} className="w-70 h-70 object-contain" />
                            </div>

                            {/* Text */}
                            <div className="text-center md:text-center md:w-1/3">
                                <h3 className="text-8xl  italic font-semibold mb-2">{item.title}</h3>
                                <p className="text-2xl text-gray-300 whitespace-pre-line">{item.desc}</p>
                            </div>
                        </motion.div>

                        {/* Decorative arrows */}
                        {index === 0 && (
                            <div className="flex justify-center relative">
                                <img
                                    src="./src/assets/arrow one.png"
                                    alt="Decorative"
                                    className="w-[400px] h-auto opacity-80 relative ml-[14vw] mb-[-1vw] mt-[-20vw]"
                                />
                            </div>
                        )}
                        {index === 1 && (
                            <div className="flex justify-center relative">
                                <img
                                    src="./src/assets/arrow two.png"
                                    alt="Decorative"
                                    className="w-[300px] h-auto opacity-80 relative ml-[-10vw] mb-[-1vw] mt-[-20vw] rotate-60"
                                />
                            </div>
                        )}
                        {index === 2 && (
                            <div className="flex justify-center relative">
                                <img
                                    src="./src/assets/arrow two.png"
                                    alt="Decorative"
                                    className="w-[300px] h-auto opacity-80 relative ml-[15vw] mb-[-1vw] mt-[-20vw] rotate-117 -scale-y-100"
                                />
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
};

export default WhyChooseUs;

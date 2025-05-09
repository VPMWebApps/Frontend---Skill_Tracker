import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
  {
    name: 'Alex Johnson',
    role: 'IT Manager',
    company: 'TechNova',
    quote: 'SoftSell helped us recover value from unused licenses effortlessly.',
  },
  {
    name: 'Maria Lopez',
    role: 'Procurement Lead',
    company: 'SysCore',
    quote: 'Fast payments and great support. Highly recommended!',
  },
  {
    name: 'Anand C.',
    role: 'CEO',
    company: 'MetroX',
    quote:
      'Lorem ipsum onsectetur adipiscing elit. Blandit mauris etiam faucibus laoreet vestibulum...',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = reviews.length;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? total - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === total - 1 ? 0 : prevIndex + 1));
  };

  const currentReview = reviews[currentIndex];

  return (
    <section className="relative py-16 bg-black text-white text-center">
      <h2 className="text-8xl opacity-80 font-bold mb-2">CUSTOMER</h2>
      <h2 className="text-8xl font-bold tracking-widest">REVIEWS</h2>

      {/* Add spacing between heading and testimonials */}
      <div className="mt-70 flex justify-center items-center gap-90 px-4">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="text-white hover:text-gray-300 transition"
        >
          <ChevronLeft size={36} />
        </button>

        {/* Testimonial Card */}
        <div className="max-w-3xl">
          <p className="text-5xl italic mb-6">“{currentReview.quote}”</p>
          <div className="flex items-center justify-center gap-3">
            <img
              src={`https://i.pravatar.cc/40?u=${currentReview.name}`}
              alt={currentReview.name}
              className="w-10 h-10 rounded-full"
            />
            <div className="text-left">
              <p className="font-semibold">{currentReview.name}</p>
              <p className="text-sm text-gray-400">
                {currentReview.role} of {currentReview.company}
              </p>
            </div>
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="text-white hover:text-gray-300 transition"
        >
          <ChevronRight size={36} />
        </button>
      </div>
    </section>
  );
}

import React, { useEffect, useState } from 'react';

const colors = [
  '#3b82f6', '#6366f1', '#8b5cf6', '#ec4899',
  '#f59e0b', '#10b981', '#06b6d4', '#ef4444',
  '#a855f7', '#22d3ee',
];

function getRandomPosition() {
  return `${Math.floor(Math.random() * 100)}% ${Math.floor(Math.random() * 100)}%`;
}

function getRandomGradient() {
  const selected = [...colors]
    .sort(() => 0.5 - Math.random())
    .slice(0, 8)
    .map(color => `radial-gradient(circle at ${getRandomPosition()}, ${color} 0%, transparent 80%)`);

  // Combine gradients for a layered effect
  return selected.join(', ');
}

function Hero() {
  const [background, setBackground] = useState(getRandomGradient());

  useEffect(() => {
    const interval = setInterval(() => {
      setBackground(getRandomGradient());
    }, 5000); // change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="min-h-screen flex flex-col justify-center items-center text-center p-8 text-white transition-all duration-1000"
      style={{
        background: background,
        backgroundColor: '#1e293b' // dark fallback
      }}
    >
      <h1 className="text-8xl font-bold mb-4">Sell Your Unused Software Licenses</h1>
      <p className="text-xl mb-6 max-w-xl">
        Turn your unused software into cash with SoftSell. Fast, secure, and easy resale process.
      </p>
      <button className="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-gray-200 transition">
        Get a Quote
      </button>
    </section>
  );
}

export default Hero;

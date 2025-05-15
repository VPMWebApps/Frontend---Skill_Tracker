import React, { useState } from 'react';
import { FaPlayCircle } from 'react-icons/fa';

const courseContent = [
  'Introduction to React',
  'JSX and Rendering',
  'Components',
  'State Management',
  'Event Handling',
  'Conditional Rendering',
];

const CurrentCoursePage = () => {
  const [activeTab, setActiveTab] = useState('content');

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-2">React js</h1>
      <p className="text-gray-700 max-w-3xl mb-4">
        React is a JavaScript library used to build user interfaces, especially for single-page applications (SPAs) — like modern websites and web apps. It was developed by Facebook and is now open-source.
      </p>

      <button className="border border-gray-400 px-4 py-2 text-gray-700 rounded mb-6">
        Start Courses
      </button>

      <hr className="border-gray-400 mb-4" />

      {/* Tabs */}
      <div className="flex gap-6 mb-4">
        {['Content', 'About'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab.toLowerCase())}
            className={`font-bold ${
              activeTab === tab.toLowerCase() ? 'underline' : ''
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === 'content' ? (
        <div className="flex flex-col gap-4">
          {courseContent.map((title, index) => (
            <div key={index} className="flex items-center gap-4 text-xl font-semibold">
              <FaPlayCircle className="text-black text-2xl" />
              <span>{title}</span>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600">This course helps you get started with React, covering fundamentals and practical concepts to build scalable frontend apps.</p>
      )}
    </div>
  );
};

export default CurrentCoursePage;

import React, { useState } from 'react';
import CurrentCoursePage from './CurrentCourse'; // adjust path if needed

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  if (selectedCourse === 'Frontend') {
    return <CurrentCoursePage />;
  }

  return (
    <div className="p-6 pl-[5rem] pr-[5rem] bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-semibold mb-6">Courses</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">Current course</h2>
            <div className="bg-gray-200 rounded-lg p-4 border">
              <p className="text-gray-500 text-sm">Current course</p>
              <h3 className="text-2xl font-bold mb-4">Full Stack development</h3>

              <div className="space-y-3">
                <button
                  onClick={() => setSelectedCourse('Frontend')}
                  className="block w-full h-[10vh] bg-black text-white px-4 py-3 rounded-lg text-left hover:bg-gray-800 transition"
                >
                  Frontend
                </button>
                <button
                  onClick={() => setSelectedCourse('Backend')}
                  className="block w-full h-[10vh] bg-black text-white px-4 py-3 rounded-lg text-left hover:bg-gray-800 transition"
                >
                  Backend
                </button>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-gray-200 h-48 rounded-lg border p-5 text-3xl font-medium">
              My Progress
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Recommended for you</h2>
          <div className="bg-gray-200 p-4 rounded-lg border space-y-4">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="h-20 bg-gray-300 rounded-lg border"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}; // Courses.jsx

export default Courses;

import React from 'react';

const skills = [
  {
    id: 1,
    title: "React Js",
    description: "Building user interfaces with React",
    lastAccessed: "01/01/2025",
    progress: 70,
  },
  {
    id: 2,
    title: "React Js",
    description: "Building user interfaces with React",
    lastAccessed: "01/01/2025",
    progress: 90,
  },
  {
    id: 3,
    title: "React Js",
    description: "Building user interfaces with React",
    lastAccessed: "01/01/2025",
    progress: 60,
  },
  {
    id: 4,
    title: "React Js",
    description: "Building user interfaces with React",
    lastAccessed: "01/01/2025",
    progress: 85,
  },
   {
    id: 5,
    title: "React Js",
    description: "Building user interfaces with React",
    lastAccessed: "01/01/2025",
    progress: 85,
  },
   {
    id: 6,
    title: "React Js",
    description: "Building user interfaces with React",
    lastAccessed: "01/01/2025",
    progress: 85,
  },
   {
    id: 7,
    title: "React Js",
    description: "Building user interfaces with React",
    lastAccessed: "01/01/2025",
    progress: 85,
  },
   {
    id: 8,
    title: "React Js",
    description: "Building user interfaces with React",
    lastAccessed: "01/01/2025",
    progress: 85,
  },
];

const MySkills = () => {
  return (
    <div className="pl-[6rem] pr-[6rem] pt-[3rem] bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-7xl font-semibold pb-10">My Skills</h1>
        <button className="bg-black text-white px-5   py-3 rounded-2xl hover:bg-gray-800">+ Add Skills</button>
      </div>

      <div className="flex flex-wrap gap-4 mb-6">
        <input
          type="text"
          placeholder="Search skills"
          className="px-4 py-2 border rounded-md w-60"
        />
        <button className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800">All Categories</button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        {skills.map((skill) => (
          <div key={skill.id} className="border rounded-lg p-4 bg-white shadow-sm">
            <div className="flex items-center gap-4 mb-2">
              <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
              <div>
                <h2 className="font-bold text-lg">{skill.title}</h2>
                <p className="text-gray-600 text-sm">{skill.description}</p>
                <p className="text-xs text-gray-500 mt-1">last accessed {skill.lastAccessed}</p>
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-black h-2 rounded-full"
                style={{ width: `${skill.progress}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MySkills;

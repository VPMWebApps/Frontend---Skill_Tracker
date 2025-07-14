import React from 'react';

const TeacherDashboard = () => {
  return (
    <div className="p-10 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 pl-[6rem] pr-[6rem]">
        {/* Welcome Section */}
        <div className="md:col-span-2 bg-black text-white w-[42vw] h-[40vh] rounded-3xl p-6">
          <h1 className="text-3xl font-bold">Welcome, Teacher</h1>
          <p className="mt-4">Manage your courses and track student progress</p>
        </div>

        {/* Quick Stats */}
        <div className="md:col-span-2 bg-white border-1 w-[42vw] rounded-3xl p-6">
          <h2 className="text-xl font-semibold text-black">Teaching Stats</h2>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-semibold">Active Courses</h3>
              <p className="text-2xl font-bold">3</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-semibold">Total Students</h3>
              <p className="text-2xl font-bold">45</p>
            </div>
          </div>
        </div>

        {/* Course Management */}
        <div className="md:col-span-2 border-1 rounded-3xl h-[40vh] p-4">
          <h2 className="text-xl font-semibold text-black mb-6">Course Management</h2>
          <div className="space-y-4">
            <div className="bg-gray-200 border-1 rounded-xl p-4">
              <h3 className="font-semibold">React Development</h3>
              <p className="text-sm text-gray-600">25 Students • 12 Lessons</p>
            </div>
            <div className="bg-gray-200 border-1 rounded-xl p-4">
              <h3 className="font-semibold">Node.js Backend</h3>
              <p className="text-sm text-gray-600">20 Students • 15 Lessons</p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-black text-white rounded-3xl p-4">
          <h2 className="text-xl font-semibold">Quick Actions</h2>
          <div className="mt-4 space-y-2">
            <button className="w-full bg-white text-black p-2 rounded-lg hover:bg-gray-200">
              Add New Course
            </button>
            <button className="w-full bg-white text-black p-2 rounded-lg hover:bg-gray-200">
              View Student Progress
            </button>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-black text-white rounded-3xl p-4">
          <h2 className="text-xl font-semibold">Recent Activity</h2>
          <div className="mt-4 space-y-2">
            <p className="text-sm">• New student enrolled in React</p>
            <p className="text-sm">• Course material updated</p>
            <p className="text-sm">• Assignment submitted</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard; 
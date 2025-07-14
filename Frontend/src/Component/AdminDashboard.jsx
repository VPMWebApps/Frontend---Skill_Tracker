import React from 'react';

const AdminDashboard = () => {
  return (
    <div className="p-10 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 pl-[6rem] pr-[6rem]">
        {/* Welcome Section */}
        <div className="md:col-span-2 bg-black text-white w-[42vw] h-[40vh] rounded-3xl p-6">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="mt-4">Manage your platform and monitor system status</p>
        </div>

        {/* System Stats */}
        <div className="md:col-span-2 bg-white border-1 w-[42vw] rounded-3xl p-6">
          <h2 className="text-xl font-semibold text-black">System Overview</h2>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-semibold">Total Users</h3>
              <p className="text-2xl font-bold">150</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-semibold">Active Courses</h3>
              <p className="text-2xl font-bold">12</p>
            </div>
          </div>
        </div>

        {/* User Management */}
        <div className="md:col-span-2 border-1 rounded-3xl h-[40vh] p-4">
          <h2 className="text-xl font-semibold text-black mb-6">User Management</h2>
          <div className="space-y-4">
            <div className="bg-gray-200 border-1 rounded-xl p-4">
              <h3 className="font-semibold">Students</h3>
              <p className="text-sm text-gray-600">120 Active • 30 New this month</p>
            </div>
            <div className="bg-gray-200 border-1 rounded-xl p-4">
              <h3 className="font-semibold">Teachers</h3>
              <p className="text-sm text-gray-600">15 Active • 5 New this month</p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-black text-white rounded-3xl p-4">
          <h2 className="text-xl font-semibold">Quick Actions</h2>
          <div className="mt-4 space-y-2">
            <button className="w-full bg-white text-black p-2 rounded-lg hover:bg-gray-200">
              Add New User
            </button>
            <button className="w-full bg-white text-black p-2 rounded-lg hover:bg-gray-200">
              Manage Courses
            </button>
            <button className="w-full bg-white text-black p-2 rounded-lg hover:bg-gray-200">
              System Settings
            </button>
          </div>
        </div>

        {/* System Status */}
        <div className="bg-black text-white rounded-3xl p-4">
          <h2 className="text-xl font-semibold">System Status</h2>
          <div className="mt-4 space-y-2">
            <p className="text-sm">• Server Status: Online</p>
            <p className="text-sm">• Database: Connected</p>
            <p className="text-sm">• Last Backup: 2 hours ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard; 
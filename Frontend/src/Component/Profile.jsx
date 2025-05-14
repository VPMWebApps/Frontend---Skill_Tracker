import React, { useState } from 'react';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('courses');

  const renderTabContent = () => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="h-30 bg-gray-300 rounded-lg"></div>
        ))}
      </div>
    );
  };

  return (
    <div className="p-6 pl-[5rem] pr-[5rem] bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-semibold mb-6">Profile</h1>

      <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-6">
      
        <div className="bg-black text-white rounded-2xl flex flex-col items-center justify-center p-6">
          <div className="w-32 h-32 bg-gray-300 rounded-full mb-4" />
          <p className="text-xl font-semibold">John doe</p>
        </div>

      
        <div>
        
          <div className="flex gap-4">
            {['courses', 'skills', 'projects'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full font-medium capitalize transition ${
                  activeTab === tab
                    ? 'bg-black text-white'
                    : 'bg-gray-300 text-black'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

        
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default Profile;

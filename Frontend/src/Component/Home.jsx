import React from 'react';

const Home = () => {
  return (
    <div className="p-10  min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 pl-[10rem] pr-[10rem]">
        
        {/* Welcome Box */}
        <div className="md:col-span-2 bg-black text-white w-[39vw]  h-[40vh] rounded-3xl p-6 cursor-pointer">
          <h1 className="text-3xl font-bold  ">Welcome, User</h1>
        </div>

        {/* Skills Progress */}
        <div className="md:col-span-2 bg-white border-1 w-[38vw] to-gray-200 rounded-3xl p-6 cursor-pointer">
          <h2 className="text-xl font-semibold text-black">Skills Progress</h2>
        </div>

        {/* Recommended */}
        <div className=" border-1 rounded-3xl h-[40vh] p-4 md:col-span-2 cursor-pointer">
          <h2 className="text-xl font-semibold text-black mb-6">Recommended for you</h2>
          <div className="bg-gray-200  border-1 rounded-xl h-24 mb-4"></div>
          <div className="bg-black rounded-xl h-24"></div>
        </div>

        {/* Friend Collab */}
        <div className="bg-black text-white rounded-3xl p-4 cursor-pointer">
          <h2 className="text-xl font-semibold">Friend Collab</h2>
        </div>

        {/* My Certification */}
        <div className="bg-black text-white rounded-3xl p-4  cursor-pointer">
          <h2 className="text-xl font-semibold">My certification</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
 
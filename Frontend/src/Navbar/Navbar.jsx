import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <>
            <div className="flex justify-between items-center  p-6 pr-[20rem] pl-[10rem]">

                <img src="https://via.placeholder.com/50" alt="Logo" className="w-10 h-10 rounded-full mr-2" />
                <div className="flex items-center">
                    <ul className="flex space-x-[4rem] pr-7">
                        <li><Link to="/" className="hover:underline">Home</Link></li>
                        <li><Link to="/MySkills" className="hover:underline">My Skills</Link></li>
                        <li><Link to="/Courses" className="hover:underline">My Courses</Link></li>
                        <li><Link to="/Profile" className="hover:underline">Profile</Link></li>

                    </ul>
                    <div className="bg-amber-200 rounded-4xl w-20 h-10">
                        
                    </div>
                </div>

            </div>
        </>
    )
}

export default Navbar;

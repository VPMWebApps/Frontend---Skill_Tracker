import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const role = user.role || 'student';

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/login');
    };

    const renderNavLinks = () => {
        switch (role) {
            case 'teacher':
                return (
                    <>
                        <li><Link to="/teacher-dashboard" className="hover:underline">Teacher Dashboard</Link></li>
                        <li><Link to="/courses" className="hover:underline">My Courses</Link></li>
                        <li><Link to="/profile" className="hover:underline">Profile</Link></li>
                    </>
                );
            case 'admin':
                return (
                    <>
                        <li><Link to="/admin-dashboard" className="hover:underline">Admin Dashboard</Link></li>
                        <li><Link to="/db-manager" className="hover:underline">DB Manager</Link></li>
                        <li><Link to="/profile" className="hover:underline">Profile</Link></li>
                    </>
                );
            default: // student
                return (
                    <>
                        <li><Link to="/" className="hover:underline">Home</Link></li>
                        <li><Link to="/MySkills" className="hover:underline">My Skills</Link></li>
                        <li><Link to="/Courses" className="hover:underline">Courses</Link></li>
                        <li><Link to="/Profile" className="hover:underline">Profile</Link></li>
                    </>
                );
        }
    };

    return (
        <div className="flex justify-between items-center p-6 pr-[20rem] pl-[10rem]">
            <img src="https://via.placeholder.com/50" alt="Logo" className="w-10 h-10 rounded-full mr-2" />
            <div className="flex items-center">
                <ul className="flex space-x-[4rem] pr-7">
                    {renderNavLinks()}
                </ul>
                <button 
                    onClick={handleLogout}
                    className="bg-amber-200 rounded-4xl w-20 h-10 hover:bg-amber-300 transition-colors"
                >
                    Logout
                </button>
            </div>
        </div>
    )
}

export default Navbar;

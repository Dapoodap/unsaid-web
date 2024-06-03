"use client"
import { Navbar } from '@/app/components/Navbar';
import { SpesificThoughts } from '@/app/components/SpesificThoughts';
import React, { useState } from 'react';
import { CiLight } from 'react-icons/ci';
import { FaRegMoon } from 'react-icons/fa';

const ThoughtsPage = ({ params }) => {
  const id = params.id;

  const [dark, setDark] = useState(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    return savedDarkMode ? JSON.parse(savedDarkMode) : false;
  });
  const toggleDarkMode = () => {
    const newDarkMode = !dark;
    setDark(newDarkMode);
    localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
  };
  // Define props to pass to SpesificThoughts component
  return (
    <div className={`${dark && 'dark'} h-[100vh]`}>
      <div
        className={`fixed z-10 p-3 bottom-5 rounded-xl w-fit right-5 ${
          dark ? 'bg-gray-600' : 'bg-gray-200'
        } cursor-pointer`}
        onClick={toggleDarkMode}
      >
        {dark ? (
          <CiLight className="text-2xl font-extrabold text-yellow-300 bg-transparent" />
        ) : (
          <FaRegMoon className="text-2xl font-extrabold text-gray-800 bg-transparent" />
        )}
      </div>
      <Navbar />
      {/* Pass props to SpesificThoughts */}
      <SpesificThoughts id={id} />
      {/* Other components or content */}
    </div>
  );
};

export default ThoughtsPage;

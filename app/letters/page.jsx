"use client"
import { Navbar } from '@/app/components/Navbar';
import { SpesificThoughts } from '@/app/components/SpesificThoughts';
import React, { useState } from 'react';
import { CiLight } from 'react-icons/ci';
import { FaRegMoon } from 'react-icons/fa';
import { FormLetter } from '../components/FormLetter';
import { AllLetters } from '../components/AllLetters';

const LettersPage = () => {

  const [dark, setDark] = useState(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    return savedDarkMode ? JSON.parse(savedDarkMode) : false;
  });
  const toggleDarkMode = () => {
    const newDarkMode = !dark;
    setDark(newDarkMode);
    typeof window !== 'undefined' && localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
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
      <AllLetters/>
    </div>
  );
};

export default LettersPage;

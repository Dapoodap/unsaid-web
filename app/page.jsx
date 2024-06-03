"use client"
import { useState } from 'react';
import { Navbar } from './components/Navbar';
import '@/app/globals.css';
import { FaRegMoon } from 'react-icons/fa';
import { CiLight } from 'react-icons/ci';
import { Header } from './components/Header';
import { Wrapper } from './components/Wrapper';

export default function Home() {
  // Mendapatkan status mode gelap dari localStorage saat aplikasi dimuat
  const [dark, setDark] = useState(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    return savedDarkMode ? JSON.parse(savedDarkMode) : false;
  });

  // Mengubah status mode gelap dan menyimpannya ke localStorage
  const toggleDarkMode = () => {
    const newDarkMode = !dark;
    setDark(newDarkMode);
    typeof window !== 'undefined' && localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
  };

  return (
    <div className={`${dark && 'dark'}`}>
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
      <Header />
      <Wrapper />
    </div>
  );
}

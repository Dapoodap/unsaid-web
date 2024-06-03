"use client"
import { Navbar } from './components/Navbar';
import '@/app/globals.css';
import { Header } from './components/Header';
import { Wrapper } from './components/Wrapper';
import { useContext } from 'react';
import { DarkMode } from '@/context/DarkMode';
import { CiLight } from 'react-icons/ci';
import { FaRegMoon } from 'react-icons/fa';


export default function Home() {
  // Mendapatkan status mode gelap dari context
  const {dark,setDark} = useContext(DarkMode)

  const toggleDarkMode = () => {
    setDark(!dark)
  };
  return (
    <div className={`${dark && 'dark'}`}>
      <div
        className={`fixed z-10 p-3 bottom-5 rounded-xl w-fit right-5 ${
          dark ? 'bg-gray-600' : 'bg-slate-300'
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

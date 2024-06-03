"use client"
import { Navbar } from '@/app/components/Navbar';
import { SpesificThoughts } from '@/app/components/SpesificThoughts';
import { DarkMode } from '@/context/DarkMode';
import { useContext } from 'react';
import { CiLight } from 'react-icons/ci';
import { FaRegMoon } from 'react-icons/fa';


const ThoughtsPage = ({ params }) => {
  const id = params.id;
  const {dark,setDark} = useContext(DarkMode)

  const toggleDarkMode = () => {
    setDark(!dark)
  };

  return (
    <div className={`${dark && 'dark'} h-[100vh]`}>
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
      {/* Pass props to SpesificThoughts */}
      <SpesificThoughts id={id} />
      {/* Other components or content */}
    </div>
  );
};

export default ThoughtsPage;

"use client"
import Image from "next/image";
import logo from "@/public/logo.svg"
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className={`flex  items-center justify-between w-full px-6 py-5  ${isOpen && 'flex-col gap-5'}`}>
      <Image src={logo} width={250} className="bg-transparent"/>
      <div className={`flex-col md:flex-row md:flex gap-5 px-10 py-2 dark:text-white ${isOpen ? 'flex' : 'hidden'} md:flex`}>
        <Link className="text-xl font-medium text-center hover:border-b-2 hover:border-yellow-700" href="/">Home</Link>
        <Link className="text-xl font-medium text-center hover:border-b-2 hover:border-yellow-700" href="/writes">Write</Link>
        <Link className="text-xl font-medium text-center hover:border-b-2 hover:border-yellow-700" href="/letters">Letters</Link>
        <Link className="text-xl font-medium text-center hover:border-b-2 hover:border-yellow-700" href="/about">About</Link>
      </div>
      <div className="flex items-center md:hidden">
        {isOpen ? (
          <IoClose className="text-3xl cursor-pointer dark:text-white" onClick={toggleMenu} />
        ) : (
          <GiHamburgerMenu className="text-3xl cursor-pointer dark:text-white" onClick={toggleMenu} />
        )}
      </div>
    </div>
  );
}

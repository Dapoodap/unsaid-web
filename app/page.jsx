"use client"
import { Navbar } from './components/Navbar';
import '@/app/globals.css';
import { Header } from './components/Header';
import { Wrapper } from './components/Wrapper';

export default function Home() {
  // Mendapatkan status mode gelap dari localStorage saat aplikasi dimuat

  return (
    <div>
      <Navbar />
      <Header />
      <Wrapper />
    </div>
  );
}

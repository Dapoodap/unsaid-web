"use client"
import { Navbar } from '@/app/components/Navbar';
import { AboutMe } from '../components/AboutMe';
import { Footer } from '../components/Footer';


const WritesPage = () => {
  return (
    <div>
      <Navbar />
      <AboutMe/>
      <Footer/>
    </div>
  );
};

export default WritesPage;

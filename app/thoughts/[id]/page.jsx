"use client"
import { Navbar } from '@/app/components/Navbar';
import { SpesificThoughts } from '@/app/components/SpesificThoughts';


const ThoughtsPage = ({ params }) => {
  const id = params.id;

  return (
    <div>
      <Navbar />
      {/* Pass props to SpesificThoughts */}
      <SpesificThoughts id={id} />
      {/* Other components or content */}
    </div>
  );
};

export default ThoughtsPage;

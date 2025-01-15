import React from 'react';
import photo from '../assets/Photo-1.jpg';

const HomePage = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white">

      <section className="flex flex-col items-center justify-center p-5 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to our Website</h1>
        <img src={photo} alt="Welcome-Photo" className="mt-4 rounded-lg shadow-lg" /> 
      </section>

    </div>
  );
};

export default HomePage;
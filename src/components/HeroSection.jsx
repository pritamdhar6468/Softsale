// src/components/HeroSection.jsx
import React from 'react';
import backgroundImage from '../assets/stock.jpg'; // Replace with your gradient background image

const HeroSection = () => {
  return (
    <section
      className='relative pt-28 pb-16 px-6 sm:px-10 md:px-16 lg:px-32 h-[100vh] flex justify-center items-center '
      style={{
        background: 'linear-gradient(to right, #F3F4F6, #E0F7FA)',
      }}
    >
      <div className='max-w-6xl  mx-auto gap-8 flex flex-col md:flex-row items-center'>
        <div className='flex-1 '>
          <h1 className='text-4xl md:text-6xl  font-bold text-black-400 mb-4'>
            Software License Management
          </h1>
          <p className='text-gray-700 text-md md:text-md mb-6'>
            Empowers you to achieve improved efficiency and maximize usage of
            your CAD, CAM, PLM, FEA, CAE, FlexLM, Dassault, AutoDesk, Ansys &
            other engineering and specialty software applications.
          </p>
          <button className='bg-blue-900 text-white px-6 py-3 rounded-md hover:from-orange-500 hover:to-green-600 transition cursor-pointer'>
            Sell My License ➔
          </button>
        </div>
        <div className='flex-1 mt-8 md:mt-0  relative'>
          <img
            src={backgroundImage} // Replace with your image
            alt='Hero Visual'
            className='w-full h-auto max-w-lg md:max-w-full lg:max-w-full rounded-md shadow-md object-cover'
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

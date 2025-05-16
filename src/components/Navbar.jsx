// src/components/Navbar.jsx
import React, { useEffect, useState } from "react";
import topBrand from "../assets/top-brand.png"

const Navbar = () => {
const [scrolled,setScrolled]=useState(false);

useEffect(()=>{
  const handleScroll = () =>{
    setScrolled(window.scrollY > 0);
  }

  window.addEventListener('scroll',handleScroll);
  return ()=> window.removeEventListener('scroll',handleScroll)
},[])

  return (
    <nav style={{
        background: 'linear-gradient(to right, #F3F4F6, #E0F7FA)',
      }} className={`flex items-center justify-between px-6 sm:px-10 md:px-16 lg:px-32 py-4 bg-white fixed w-full z-50 ${scrolled?"shadow-md":"bg-transparent"}`}>
      <div className="flex items-center space-x-4">
<h1 className="text-2xl font-bold text-gray-700 bg-gradient-to-r p-1 italic flex items-center space-x-2">
  <img src={topBrand} alt="Logo" className="w-8 h-8 object-contain" />
  <span>SoftSell</span>
</h1>      </div>
      {/* <div className="flex items-center space-x-6 text-gray-700">
        <a href="#" className="hover:text-blue-600">Solutions</a>
        <a href="#" className="hover:text-blue-600">Pricing</a>
        <a href="#" className="hover:text-blue-600">Supported Software</a>
        <a href="#" className="hover:text-blue-600">Resources</a>
      </div> */}
      <div className="flex items-center space-x-4">
        
        {/* <button className="text-blue-900 font-semibold">Login</button> */}
        <button className="bg-gray-800 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-gray-950 ">
          Create an Account
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

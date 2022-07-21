import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';



const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        'Logo Image Here'
      </div>

      {/* Nav Links */}
      <ul className='hidden md:flex'>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li> 
        <li>Contact</li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Nav Links */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'>Home</li>
        <li className='py-6 text-4xl'>About</li>
        <li className='py-6 text-4xl'>Projects</li>
        <li className='py-6 text-4xl'>Contact</li>
      </ul>

      {/* Social Links */}
      <div className='flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[150px] h-[40px] flex justify-between items-center ml-[-90px] hover:ml-{-10px] duration-300 bg-blue-600'>
            <a className='flex justify-between items-center w-full text-gray-300'
              href="/"> LinkedIn <FaLinkedin size={30}/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
};

export default Navbar;
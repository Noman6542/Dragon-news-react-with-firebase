import React from 'react';
import { NavLink } from 'react-router';
import image from '../assets/user.png'
const Navbar = () => {
  return (
    <div className='flex justify-between items-center mt-5'>
      <div className=''></div>
      <div className='flex gap-3'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/career'>Career</NavLink>
      </div>
      <div className='flex gap-2'>
        <img src={image} alt="" srcset="" />
        <button className="btn bg-[#403f3f] text-white">Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
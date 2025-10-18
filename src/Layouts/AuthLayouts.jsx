import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';

const AuthLayouts = () => {
  return (
    <div className='w-11/12 mx-auto bg-base-200 min-h-screen'>
      <header className='p-4'>
        <Navbar></Navbar>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default AuthLayouts;
import React from 'react';
import swimming from '.././assets/swimming.png'
import playground from '.././assets/playground.png'
import classimag from '../assets/class.png'
const Qzone = () => {
  return (
    <div className='bg-base-200 p-3 '>
      <h1 className='font-bold '>Qzone</h1>
      <div className='space-y-3 flex flex-col justify-center items-center'>
      <img src={swimming} alt="" />
      <img src={playground} alt="" />
      <img src={classimag} alt="" />
      </div>
    </div>
  );
};

export default Qzone;
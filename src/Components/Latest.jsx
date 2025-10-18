import React from 'react';
import Marquee from 'react-fast-marquee';

const Latest = () => {
  return (
    <div className='flex  items-center gap-4 bg-[#f3f3f3] p-3 mt-4'>
      <p className='bg-accent text-white font-bold py-2 px-4' >Latest</p>
      <Marquee>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores recusandae cupiditate expedita, nihil obcaecati consequuntur eos perferendis illum placeat aliquid illo exercitationem nesciunt deleniti inventore iure delectus non veritatis unde!</p>
      </Marquee>
      
    </div>
  );
};

export default Latest;
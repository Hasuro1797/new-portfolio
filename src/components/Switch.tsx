'use client'
import { motion } from 'framer-motion';
import React, { useState } from 'react';

interface Props {
  cb: () => void
}
const Switch: React.FC<Props> = ({cb}) => {
  const [isActive, setIsActive] = useState(false);

  const toggleSwitch = () => {
    setIsActive(!isActive);
    cb()
  };

  return (
    <div onClick={toggleSwitch} className='cursor-pointer max-w-[70px] sm:max-w-[100px] md:max-w-[120px] sm:h-[60px] md:h-[70px] rounded-full w-full bg-secondary p-1 sm:p-[10px]'>
      <motion.div
        className='rounded-full bg-white w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] md:w-[50px] md:h-[50px]'
        animate={{
          // backgroundColor: isActive ? 'green' : 'gray',
          x: isActive ? '0%' : '100%',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      />
    </div>
  );
};

export default Switch;

'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';

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
    <div onClick={toggleSwitch} className='cursor-pointer max-w-[120px] h-[70px] rounded-full w-full bg-secondary p-[10px]'>
      <motion.div
        className='rounded-full bg-white w-[50px] h-[50px]'
        
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

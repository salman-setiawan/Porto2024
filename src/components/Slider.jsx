import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react'
import SmallDesc from './SmallDesc';

const Slider = ({children}) => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    const updateWidth = () => {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    };

    updateWidth();

    window.addEventListener('resize', updateWidth);

    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  return (
    <div>
      <div className="flex flex-col space-y-2 overflow-hidden">
        <motion.div ref={carousel} className='carousel flex'>
          <motion.div 
            drag='x'
            dragConstraints={{ right: 0, left: -width }}
            className='flex space-x-2' 
          >
            {children}
          </motion.div>
        </motion.div>
        <SmallDesc 
          desc='You can shift content to the right and left using the left mouse button or touchscreen.'
        />
      </div>
  </div>
  )
}

export default Slider
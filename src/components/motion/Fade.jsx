import React, { useEffect, useState } from 'react'
import {AnimatePresence, motion } from 'framer-motion';

const Fade = ({children}) => {
  return (
    <div>
      <AnimatePresence mode='wait'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default Fade
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CollectionPages from '../../pages/collection';
import EdufamsArticle from '../../pages/content/edufamsarticle';

// const slide = {
//   initial: {
//     top: "100vh"
//   },
//   enter: {
//     top: "100vh"
//   },
//   exit: {
//     top: "0",
//     transition: {
//       duration: 1,
//       ease: [0.76, 0, 0.24, 1]
//     }
//   }
// }

const PushTop = () => {
  const [currentPage, setCurrentPage] = useState('page1');

  const handlePageChange = () => {
    setCurrentPage(currentPage === 'page1' ? 'page2' : 'page1');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {currentPage === 'page1' ? (
        <CollectionPages />
      ) : (
        <EdufamsArticle />
      )}
      <button onClick={handlePageChange}>Change Page</button>
    </motion.div>
  );
};

export default PushTop;

import React, { useState } from 'react';
import GenerateElem from './../components/FormElem';
import SuccessElem from './../components/SuccesElem';
import { motion } from 'framer-motion';

const fadeUpAnimation = {
  before: {
      opacity: 0,
      y: 30,
  },
  after: {
      opacity: 1,
      y: 0,
      transition: {
          delay: 0.1,
          ease: "easeOut",
      },
  },
};

const Formulir = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [cardKey, setCardKey] = useState('');
    
    const handleSuccess = (key) => {
      setCardKey(key);
      setIsSubmitted(true);
    };

  return (
    <>
      <div className='flex justify-center items-center min-h-screen bg-gradient-to-t from-bgsuccess to-tobgsuccess lg:px-48 md:px-16 px-8 py-16 md:py-23 lg:py-24 overflow-hidden'>
      
      {isSubmitted ? (
          // Show the success element if submitted
          <SuccessElem cardKey={cardKey} />
        ) : (
          // Otherwise, show the form element
          <motion.div variants={fadeUpAnimation} whileInView="after" initial="before" viewport={{ once:true }}>
            <GenerateElem onSuccess={handleSuccess} />
          </motion.div>
        )}
      
      </div>
    </>
  )
}

export default Formulir;





import React, { useState } from 'react';
import GenerateElem from './../components/FormElem';
import SuccessElem from './../components/SuccesElem';
const Formulir = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [cardKey, setCardKey] = useState('');
    
    const handleSuccess = (key) => {
      setCardKey(key);
      setIsSubmitted(true);
    };

  return (
    <>
      <div className='flex justify-center items-center min-h-screen bg-gradient-to-t from-bgsuccess to-tobgsuccess lg:px-48 md:px-16 px-8 py-16 md:py-24 lg:py-32 overflow-hidden'>
      
      {isSubmitted ? (
          // Show the success element if submitted
          <SuccessElem cardKey={cardKey} />
        ) : (
          // Otherwise, show the form element
          <GenerateElem onSuccess={handleSuccess} />
        )}
      
      </div>
    </>
  )
}

export default Formulir;





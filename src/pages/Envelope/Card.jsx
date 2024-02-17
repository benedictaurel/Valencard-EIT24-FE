import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Envelope from '/src/assets/envelope.png';
import LoveBackground2 from '/src/assets/love2.svg';
import Cupid from '/src/assets/cupid.svg';
import DoubleLove from '/src/assets/doublelove.svg';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function Card() {
  const navigate = useNavigate();
  const { token } = useParams();
  const [loading, setLoading] = useState(false);
  const [shake, setShake] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [cardData, setCardData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://valencard-eit24.vercel.app/api/get-card?card_key=${token}`);
        setCardData(response.data.card);
        if (response.data.success === true) {
          setLoading(false);
        } else {
          navigate('/404');
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
  
    const interval = setInterval(toggleShake, 800);
    return () => clearInterval(interval);
  }, [token, navigate]);

  const toggleShake = () => {
    setShake(prevState => !prevState);
  };

  const handleEnvelopeClick = () => {
    setShowMessage(true);
  };

  return (
    <div className="bg-gradient-to-b overflow-hidden from-pink1 to-pink2 min-h-screen justify-center items-center flex relative">
      {showMessage ? (
        <div className="bottom-28 z-10 right-4 md:right-64 left-4 md:left-64 block shadow-xl bg-white transform rotate-178 absolute rounded-lg w-80vw md:w-1000 h-575">
          <img src={LoveBackground2} alt="lovenya doang" className="absolute scale-200 transform -translate-x-1/2 z-20 love-background rotate-180" />
          <img src={Cupid} alt="cupid" className="absolute z-20 rotate-180 bottom-48 md:bottom-40 right-5 cupid-image" />
          <img src={DoubleLove} alt="double love" className="absolute z-20 rotate-180 bottom-5 md:bottom-12 left-5 md:left-12" />
          <div className="font-nanum font-bold non-italic text-lg md:text-5xl rotate-180 absolute right-12 md:right-24 bottom-24 md:bottom-16">
            <p>From : {cardData ? cardData.sender : ''}</p>
          </div>
          <div className="font-nanum font-bold non-italic text-lg md:text-5xl rotate-180 absolute right-12 md:right-24 bottom-32 md:bottom-32">
            <p>To : {cardData ? cardData.recipient : ''}</p>
          </div>
          <div className="font-nanum non-italic text-lg md:text-3xl rotate-180 absolute right-12 md:right-24 bottom-52 md:bottom-52 message-container">
            <p>{cardData ? cardData.message : ''}</p>
          </div>

        </div>
      ) : (
        <div className="card-content z-0">
          <div className="text-wrapper absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-125">
            <a href="#message" onClick={handleEnvelopeClick}>
              <motion.img
                src={Envelope}
                alt="envelope"
                animate={{ rotate: shake ? [-5, 5, -5, 5, 0] : 0 }}
                transition={{ duration: 0.3 }}
              />
            </a>
            <div className="text-6xl font-fredokaone text-color mb-3 bottom-0 text-center">
              <p><b>You have a message !</b></p>
            </div>
            <div className="text-2xl text-color text-center font-poppins">
              <p>( click envelope to open )</p>
            </div>
          </div>
        </div>
      )}
      <div className={`w-screen h-screen flex justify-center items-center loader ${loading ? "z-50" : "hidden z-0"}`}>
        <div className="rhombus">
          <div className="circle1"></div>
          <div className="circle2"></div>
        </div>
        <div className="w-screen text-center m-auto text-red-700 font-sans">
          <p>Loading your card, hang tight!</p>
        </div>
      </div>
    </div>
  );
}

export default Card;

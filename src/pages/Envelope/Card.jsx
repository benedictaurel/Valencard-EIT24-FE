import $ from 'jquery';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Envelope from '/src/assets/envelope.png';
import LoveBackground2 from '/src/assets/love2.svg';
import Cupid from '/src/assets/cupid.svg';
import DoubleLove from '/src/assets/doublelove.svg';
import Buletbawah from "../../assets/buletbulet.png";
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function Card() {
  const navigate = useNavigate();
  const { token } = useParams();
  const [loading, setLoading] = useState(false);
  const [shake, setShake] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [cardData, setCardData] = useState(null);
  const [loveInterval, setLoveInterval] = useState(null)

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
    startLoveAnimation();
    return () => {
      clearInterval(interval)
      clearInterval(loveInterval)
    };
  }, [token, navigate]);

  const toggleShake = () => {
    setShake(prevState => !prevState);
  };

  const handleEnvelopeClick = () => {
    setShowMessage(true);
  };

  const startLoveAnimation = () => {
    const loveInterval = setInterval(function () {
      var r_num = Math.floor(Math.random() * 5) + 1;
      var r_size = Math.floor(Math.random() * 65) + 10;
      var r_left = Math.floor(Math.random() * 100) + 1;
      var r_bg = Math.floor(Math.random() * 25) + 100;
      var r_time = Math.floor(Math.random() * 9) + 5;

      $("#header-plugin").load("https://vivinantony.github.io/header-plugin/", function () {
        $("a.back-to-link").attr("href", "http://blog.thelittletechie.com/2015/03/love-heart-animation-using-css3.html#tlt")
      });

      $('.bg_heart').append("<div class='heart' style='width:" + r_size + "px;height:" + r_size + "px;left:" + r_left + "%;background:rgba(255," + (r_bg - 25) + "," + r_bg + ",1);-webkit-animation:love " + r_time + "s ease;-moz-animation:love " + r_time + "s ease;-ms-animation:love " + r_time + "s ease;animation:love " + r_time + "s ease'></div>");

      $('.bg_heart').append("<div class='heart' style='width:" + (r_size - 10) + "px;height:" + (r_size - 10) + "px;left:" + (r_left + r_num) + "%;background:rgba(255," + (r_bg - 25) + "," + (r_bg + 25) + ",1);-webkit-animation:love " + (r_time + 5) + "s ease;-moz-animation:love " + (r_time + 5) + "s ease;-ms-animation:love " + (r_time + 5) + "s ease;animation:love " + (r_time + 5) + "s ease'></div>");

      $('.heart').each(function () {
        var top = $(this).css("top").replace(/[^-\d\.]/g, '');
        var width = $(this).css("width").replace(/[^-\d\.]/g, '');
        if (top <= -100 || width >= 150) {
          $(this).detach();
        }
      });
    }, 500);
    setLoveInterval(loveInterval);
  };

  return (
    <div className='header-plugin'>
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
            <img src={Buletbawah} alt="bulet bulet bawah" className="fixed bottom-0 left-0 w-full h-auto lg:h-1/3 z-0" />
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
    </div>
  );
}

export default Card;

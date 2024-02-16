import { motion } from 'framer-motion';
import Envelope from '/src/assets/envelope.png';
import LoveBackground from '/src/assets/love.svg';

function Card() {
  return (
    <div className="bg-gradient-to-b overflow-hidden from-pink1 to-pink2 min-h-screen justify-center items-center flex relative">
      <section id="CardPage">
        <div className=" ">
          <img src={LoveBackground} alt="lovenya doang" className="absolute bottom--40 left-1/2 transform -translate-x-1/2 scale-150" />
            <div className="text-wrapper absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-125">
                <a href="/">
                {/* nanti di ganti route nya yaa */}
                <motion.img 
                    src={Envelope} 
                    alt="envelope" 
                    whileHover={{ rotate: [0, -5, 5, -5, 0], transition: { duration: 0.3 } }}
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
      </section>
    </div>
  );
}

export default Card;

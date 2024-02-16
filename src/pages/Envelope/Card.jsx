import Envelope from '/src/assets/envelope.png';
import LoveBackground from '/src/assets/love.svg';

function Card() {
  return (
    <div className="bg-gradient-to-b overflow-hidden from-pink1 to-pink2 min-h-screen justify-center items-center flex relative">
      <section id="CardPage">
        <div className=" ">
          <img src={LoveBackground} alt="lovenya doang" className="absolute bottom--40 left-1/2 transform -translate-x-1/2 scale-150" />
          <div className="text-wrapper absolute top-5 left-1/2 transform -translate-x-1/2 scale-125 mt-16">
            <a href="/">
              <img src={Envelope} alt="envelope" />
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

const textWrapper = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

export default Card;
import LoveBackground2 from '/src/assets/love2.svg';
import Cupid from '/src/assets/cupid.svg';
import DoubleLove from '/src/assets/doublelove.svg';

function Message() {

    return (
        <div className="bg-gradient-to-b overflow-hidden from-pink1 to-pink2 min-h-screen justify-center items-center flex relative">
            <section id="MessagePage">
                <img src={LoveBackground2} alt="lovenya doang" className="absolute -bottom-32 left-1/2 transform -translate-x-1/2 scale-125 z-20" />
                <div className="message-card bottom-28 z-10 right-64 left-64 block shadow-xl bg-white transform rotate-178 absolute rounded-lg w-1000 h-575">
                    <img src={Cupid} alt="cupid" className="absolute z-20 rotate-180 bottom-40 right-5" />
                    <img src={DoubleLove} alt="double love" className="absolute z-20 rotate-180 bottom-12 left-12" />
                    <div className="font-Sarala font-bold non-italic text-3xl rotate-180 absolute right-24 bottom-16">
                        <p>From :</p>
                    </div>
                    <div className="font-Sarala font-bold non-italic text-3xl rotate-180 absolute right-24 bottom-32">
                        <p>To :</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Message;
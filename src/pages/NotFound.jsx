import Brokenheart from "../assets/Brokenheart.png";
import Button from "../components/Button";
import { motion } from "framer-motion"; 
import { useState, useEffect } from "react";

const fadeUpAnimation = {
    before: {
        opacity: 0,
        y: 30,
    },
    after: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 1,
            ease: "easeOut",
        },
    },
};

const NotFound = () => {
    const [backgroundDelay, setBackgroundDelay] = useState(true)
    const [shake, setShake] = useState(false);

    const toggleShake = () => {
        setShake(prevState => !prevState);
    }; 

    useEffect(() => {
        setTimeout(() => {
            setBackgroundDelay(false);
        }, 500);
    
        setTimeout(() => {
            const overlay = document.getElementById("overlay");
            overlay.style.display = "none";
        }, 1200);

        const interval = setInterval(toggleShake, 1200); 
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='px-8 md:px-[96.5px] bg-gradient-to-b gradient overflow-hidden from-bgnotfound to-tobgnotfound min-h-screen justify-center items-center flex'>
            <motion.div variants={fadeUpAnimation} animate="after" initial="before" className="md:max-w-[1247px] w-full flex font-fredokaone flex-col px-8 md:px-16 lg:px-[165px] relative py-10 bg-white rounded-[20px] text-center shadow-xl shadow-shadowcard justify-center items-center self-center">
                <motion.img
                  src={Brokenheart}
                  animate={{ rotate: shake ? [-5, 5, -5, 5, 0] : 0 }}
                  transition={{ duration: 0.5 }}
                  alt="hati patah patah hati"
                  className="self-center"
                />
                <h1 className='text-[40px] md:text-[60px] text-brown1 mb-2 font-semibold'>
                    Sorry !
                </h1>
                <h1 className='w-full text-[22px] md:text-[60px] text-brown1 mb-2 font-semibold'>
                    The card was not found :(
                </h1>
                <h1 className='w-full text-[16px] md:text-[40px] text-black md:mb-2 mb-4 font-normal font-poppins'>
                    Please re-check your code or link
                </h1>
                <Button/>
            </motion.div>
            <div id="overlay" className={`bg-white absolute w-screen h-screen ${backgroundDelay ? "z-50 opacity-100" : "opacity-0 transition duration-700"}`}></div>
        </div>
    )
}

export default NotFound
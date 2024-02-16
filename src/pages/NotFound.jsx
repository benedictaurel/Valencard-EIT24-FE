import Brokenheart from "../assets/Brokenheart.png";
import Button from "../components/Button";

const NotFound = () => {
    return (
        <>
            <div className='px-8 md:px-[96.5px] bg-gradient-to-b gradient overflow-hidden from-bgnotfound to-tobgnotfound min-h-screen justify-center items-center flex'>
                <div className="w-full flex font-fredokaone flex-col px-14 md:px-16 lg:px-[165px] relative py-10 bg-white rounded-[20px] text-center shadow-xl shadow-shadowcard justify-center items-center self-center">
                    <img src={Brokenheart} alt="hati patah patah hati" className="self-center"/>
                    <h1 className='text-[40px] md:text-[60px] text-brown1 mb-2 font-semibold'>
                        Sorry !
                    </h1>
                    <h1 className='text-[25px] md:text-[60px] text-brown1 mb-2 font-semibold'>
                        The card was not found :(
                    </h1>
                    <h1 className='text-[20px] md:text-[40px] text-black mb-2 font-normal font-poppins'>
                    Please re-check your code or link
                    </h1>
                    <Button/>
                </div>
            </div>
        </>
    )
}

export default NotFound
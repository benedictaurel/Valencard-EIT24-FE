
import $ from 'jquery';
import Heart from "./../assets/Heart.png"
import Surat from "./../assets/surat.png"
import Buletbawah from "./../assets/buletbulet.png"
import Buttoncode from "./../assets/buttoncode.png"
import { useRef } from "react"
import { Link, useNavigate } from "react-router-dom"

const Home = () => {
    const searchRef = useRef()
    const navigate = useNavigate()
    const handleSearchCode = (event) => {
        let typedCode = searchRef.current.value
        typedCode = typedCode.trim()
        if (event.key === "Enter" || event.type === "click") {
            if (typedCode === "") {
                event.preventDefault()
                alert("please input valid code")
                return
            }
            event.preventDefault()
            navigate(`/card/${typedCode}`)
        }
    }

    $("#header-plugin").load("https://vivinantony.github.io/header-plugin/", function () {
        $("a.back-to-link").attr("href", "http://blog.thelittletechie.com/2015/03/love-heart-animation-using-css3.html#tlt")
    });

    var love = setInterval(function () {
        var r_num = Math.floor(Math.random() * 40) + 1;
        var r_size = Math.floor(Math.random() * 65) + 10;
        var r_left = Math.floor(Math.random() * 100) + 1;
        var r_bg = Math.floor(Math.random() * 25) + 100;
        var r_time = Math.floor(Math.random() * 5) + 5;

        $('.bg_heart').append("<div class='heart' style='width:" + r_size + "px;height:" + r_size + "px;left:" + r_left + "%;background:rgba(255," + (r_bg - 25) + "," + r_bg + ",1);-webkit-animation:love " + r_time + "s ease;-moz-animation:love " + r_time + "s ease;-ms-animation:love " + r_time + "s ease;animation:love " + r_time + "s ease'></div>");

        $('.bg_heart').append("<div class='heart' style='width:" + (r_size - 10) + "px;height:" + (r_size - 10) + "px;left:" + (r_left + r_num) + "%;background:rgba(255," + (r_bg - 25) + "," + (r_bg + 25) + ",1);-webkit-animation:love " + (r_time + 5) + "s ease;-moz-animation:love " + (r_time + 5) + "s ease;-ms-animation:love " + (r_time + 5) + "s ease;animation:love " + (r_time + 5) + "s ease'></div>");

        $('.heart').each(function () {
            var top = $(this).css("top").replace(/[^-\d\.]/g, '');
            var width = $(this).css("width").replace(/[^-\d\.]/g, '');
            if (top <= -100 || width >= 150) {
                $(this).detach();
            }
        });
    }, 900);


    return (
        <>
            <div className='header-plugin'>
                <div className='bg_heart overflow-hidden bg-gradient-to-bl from-[#FF9B98] to-[#FFE3E8] min-h-screen justify-center items-center flex relative'>
                <img src={Buletbawah} alt="bulet bulet bawah" className="fixed bottom-0 left-0 w-full h-auto lg:h-1/3 z-10" />
                    <img src={Surat} alt="kotaknya doang" className="z-10 fixed flex-none md:top-20 lg:top-4 top-32" />
                    <h1 className='fixed flex-none top-48 md:top-60 lg:top-36 z-20 lg:text-[105px] md:text-[75px] text-[50px] text-brown1 font-titanone font-normal justify-center items-center flex flex-row'>
                        VALEN
                        <img src={Heart} alt="hati surat" className="md:w-auto w-[48px] lg:h-24 mt-3 lg:mt-10 md:mt-6 md:h-20 sm:h-12" />
                        CARD
                    </h1>
                    <div className='flex-col text-center font-bold z-20 fixed top-80 md:top-[500px] lg:top-96'>
                        <h1 className='text-xl font-kleeone mb-1'>enter your code</h1>
                        <div className="relative lg:w-auto w-screen">
                            <form onSubmit={handleSearchCode}
                                onKeyDown={handleSearchCode}>
                                <input ref={searchRef}
                                    placeholder="..."
                                    className=' p-2 text-center sm:text-lg lg:text-3xl font-normal font-kleeone w-[70%] lg:w-[650px] lg:h-[90px] rounded-full mb-2 shadow-xl shadow-shadowbtn bg-krem1 focus:outline-0'
                                />
                            </form>
                            <button className="absolute text-gray-700 right-0 md:right-[68px] lg:right-0 top-0">
                                <img src={Buttoncode} alt="button submit code" onClick={handleSearchCode} className="size-[45%] md:size-[49%] lg:size-auto" />
                            </button>
                        </div>
                        <h1 className='text-xl font-kleeone mb-1'>or</h1>
                        <Link to="/generate">
                            <button className='p-3 text-center lg:text-xl font-normal font-kleeone w-[71%] lg:w-[660px] lg:h-[90px] rounded-full mb-2 shadow-xl shadow-shadowbtn bg-krem1 hover:bg-hvrkrem1 transition-all duration-300'>
                                make your own card now
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
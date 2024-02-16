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
            navigate(`/${typedCode}`)
        }
    }


    return (
        <>
            <div className=''>
                <div className='overflow-hidden bg-gradient-to-b from-pink1 to-pink2 min-h-screen justify-center items-center flex relative'>
                    <img src={Surat} alt="kotaknya doang" className="absolute top-32 md:top-64 lg:top-24 z-10" />
                    <img src={Buletbawah} alt="bulet bulet bawah" className="opacity-70 absolute bottom-0 left-0 w-full h-auto lg:h-1/3 z-0" />
                    <div className='flex-col text-center font-bold z-20'>
                        <h1 className='lg:text-[100px] md:text-[75px] text-[46px] text-brown1 mb-20 md:mb-28 lg:mb-20 font-titanone font-normal justify-center items-center flex flex-row'>
                            VALEN
                            <img src={Heart} alt="hati surat" className="md:w-auto w-[48px] lg:h-24 mt-3 lg:mt-10 md:mt-6 md:h-20 sm:h-12" />
                            CARD
                        </h1>
                        <h1 className='text-xl font-kleeone mb-1'>enter your code</h1>
                        <div className="relative lg:w-auto w-screen">
                            <form onSubmit={handleSearchCode}
                                onKeyDown={handleSearchCode}>
                                <input ref={searchRef}
                                    placeholder="..."
                                    className=' p-2 text-center sm:text-lg lg:text-3xl font-normal font-kleeone w-[71%] lg:w-[654px] lg:h-[90px] rounded-full mb-2 shadow-xl shadow-shadowbtn bg-krem1 focus:outline-0'
                                />
                            </form>
                            <button className="absolute text-gray-700 right-0 md:right-[68px] lg:right-5 top-0">
                                <img src={Buttoncode} alt="button submit code" onClick={handleSearchCode} className="size-[45%] md:size-[49%] lg:size-auto"/>
                            </button>
                        </div>
                        <h1 className='text-xl font-kleeone mb-1'>or</h1>
                        <Link to="/generate">
                            <button className='p-3 text-center lg:text-xl font-normal font-kleeone w-[71%] lg:w-[654px] lg:h-[90px] rounded-full mb-2 shadow-xl shadow-shadowbtn bg-krem1 hover:bg-hvrkrem1 transition-all duration-300'>
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
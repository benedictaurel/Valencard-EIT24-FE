import Heart from "./../assets/Heart.png"
import Surat from "./../assets/surat.png"
import Buletbawah from "./../assets/buletbulet.png"
import { useRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import { MagnifyingGlass } from "@phosphor-icons/react";


const Home = () => {
    const searchRef = useRef()
    const navigate = useNavigate()

    const handleSearchCode = (event) => {
        let typedCode = searchRef.current.value
        typedCode = typedCode.trim()

        if (event.key === "Enter" || event.type === "click") {
            if (typedCode === "") {
                // searchRef.current.reset()
                event.preventDefault()
                alert("please input valid code")
                return
            }
            event.preventDefault()
            navigate(`/${typedCode}`)
            // alert(typedCode)
        }
    }


    return (
        <>
            <div className='overflow-hidden'>
                <div className='bg-gradient-to-b overflow-hidden from-pink1 to-pink2 min-h-screen justify-center items-center flex relative'>
                    <img src={Surat} alt="kotaknya doang" className="absolute top-48 z-0" />
                    <img src={Buletbawah} alt="kotaknya doang" className="absolute bottom-0 left-0 w-full h-1/3 z-0" />
                    <div className='flex-col text-center font-bold z-10'>
                        <h1 className='lg:text-[100px] sm:text-[50px] text-brown1 mb-20 font-titanone font-normal flex flex-row'>
                            VALEN
                            <img src={Heart} alt="hati surat" className="w-auto lg:h-24 mt-10 sm:h-12" />
                            CARD
                        </h1>
                        <h1 className='text-xl font-kleeone mb-1'>enter your code</h1>
                        <div className="relative">
                            <form onSubmit={handleSearchCode}
                                onKeyDown={handleSearchCode}>
                                <input ref={searchRef}
                                    placeholder="..."
                                    className='text-center text-3xl font-normal font-kleeone w-[654px] h-[90px] rounded-full mb-2 shadow-xl shadow-shadowbtn bg-krem1 focus:outline-0'
                                />
                            </form>
                            <button className="absolute text-gray-700 right-14 top-5">
                                <MagnifyingGlass size={48} onClick={handleSearchCode}/>
                            </button>
                        </div>
                        <h1 className='text-xl font-kleeone mb-1'>or</h1>
                        <Link to="/generate">
                            <button className='text-center text-xl font-normal font-kleeone w-[654px] h-[90px] rounded-full mb-2 shadow-xl shadow-shadowbtn bg-krem1 hover:bg-hvrkrem1 transition-all duration-300'>
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
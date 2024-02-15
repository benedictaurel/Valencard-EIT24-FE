import Rectangle from "./../assets/Rectangle.png";
import Heart from "./../assets/Heart.png"
const Home = () => {
    return (
        <>
            <div className='overflow-hidden'>
                <div className='bg-gradient-to-b overflow-hidden from-pink1 to-pink2 min-h-screen justify-center items-center flex relative'>
                    <img src={Rectangle} alt="kotaknya doang" className="absolute top-52 z-0"/>
                    <div className='flex-col text-center font-bold z-10'>
                        {/* <valenCard/> */}
                        <h1 className='text-[100px] text-brown1 mb-20 font-titanone font-normal'>
                            VALEN {Heart} CARD
                        </h1>
                        <h1 className='text-xl font-kleeone mb-1'>enter your code</h1>
                        <input type="form"
                            placeholder='...'
                            className='text-center text-2xl font-normal font-kleeone w-full h-16 rounded-full mb-2 shadow-xl shadow-shadowbtn bg-krem1'
                        />
                        <h1 className='text-xl font-kleeone mb-1'>or</h1>
                        <button className='text-center text-xl font-normal font-kleeone w-full h-16 rounded-full mb-2 shadow-xl shadow-shadowbtn bg-krem1 hover:bg-hvrkrem1 transition-all duration-200'>
                            make your own card now
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
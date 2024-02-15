import msgform from "./../../assets/msgform.png";

const success = () => {
  return (
    <>
      <div className='px-[96.5px] bg-gradient-to-t gradient overflow-hidden from-bgsuccess to-tobgsuccess min-h-screen justify-center items-center flex'>

        {/* card */}
        <div className="px-[166.5px] py-10 bg-white rounded-[20px] text-center w-full shadow-xl shadow-shadowbtn">
          <div className="flex flex-row text-center items-center justify-center gap-14">
            <h1 className='text-[100px] text-brown1 mb-2 font-titanone font-normal'>
              Card Form
            </h1>
            <img src={msgform} alt="gambar surat di form" />
          </div>
          {/* card dalem card */}
          <div className="bg-cardformsuccess rounded-[50px] w-full px-12 py-8 shadow-lg shadow-shadowbtn">
            <h1 className="text-3xl font-bold font-sarala mb-6">
              Your card has been generated !
            </h1>
            <h1 className="text-3xl font-bold font-sarala mb-6">
              Please view your card this code or link
            </h1>
            <h1 className="text-[70px] font-bold font-mada text-pinktebel mb-6 hover:cursor-pointe">
              unique code
            </h1>
            <div className="flex flex-row text-center justify-center items-center gap-4">
              <h1 className="text-3xl font-bold font-sarala mb-6">
                contohnamawebsite.com/111111
              </h1>
              <h1 className="text-3xl font-bold font-mada mb-6 text-pinktebel hover:cursor-pointer">
                copy link
              </h1>
            </div>
            {/* button copy link */}
          </div>
        </div>
      </div>
    </>
  )
}

export default success
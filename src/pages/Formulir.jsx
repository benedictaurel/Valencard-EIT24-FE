import msgform from "./../assets/msgform.png";

const Formulir = () => {
  return (
    <>
      <div className='flex justify-center items-center min-h-screen bg-gradient-to-t from-bgsuccess to-tobgsuccess lg:px-36 md:px-12 px-4 overflow-hidden'>
        <div className="w-full md:max-w-[1247px] py-10 px-[20px] md:px-[50px] lg:px-[166.5px] bg-white rounded-[20px] text-center shadow-xl shadow-shadowcard">

          <div className="text-center mb-2">
            <h1 className='text-[30px] md:text-[60px] lg:text-[100px] text-brown1 font-titanone font-normal inline-flex justify-center items-center'>
              Card Form
              <img src={msgform} alt="gambar surat di form" className="ml-4 w-[50px] lg:w-auto md:w-[90px]"/>
            </h1>
          </div>

          <div className="text-left w-full px-[15px] font-sarala text-[16px] md:text-[28px] lg:text-[32px]">To</div>
          <div className="flex flex-col items-center justify-center gap-12">
            <textarea
              style={{ boxShadow: 'inset 0px 5px 4px rgba(0, 0, 0, 0.25)' }}
              className='w-[330px] md:w-[700px] lg:w-[1002px] h-[58px] px-8 py-2 text-3xl font-normal font-kleeone rounded-[50px] shadow-xl shadow-shadowbtn bg-form focus:outline-none resize-none'
            />
            <div className="text-left w-full px-[15px] font-sarala text-[16px] md:text-[28px] lg:text-[32px] -mt-8">From</div>
            <textarea
              style={{ boxShadow: 'inset 0px 5px 4px rgba(0, 0, 0, 0.25)' }}
              className='w-[330px] md:w-[700px] lg:w-[1002px] h-[58px] px-8 py-2 text-3xl font-normal font-kleeone rounded-[50px] shadow-xl shadow-shadowbtn bg-form focus:outline-none resize-none -mt-12'
            />
            <div className="text-left w-full px-[15px] font-sarala text-[16px] md:text-[28px] lg:text-[32px] -mt-8">Message</div>
            <textarea
              maxLength={750}
              style={{ boxShadow: 'inset 0px 5px 4px rgba(0, 0, 0, 0.25)' }}
              className='w-[330px] md:w-[700px] lg:w-[1002px] h-[146px] px-8 py-2 text-3xl font-normal font-kleeone rounded-[50px] shadow-xl shadow-shadowbtn bg-form focus:outline-none resize-none -mt-12 no-scrollbar'
            />
            <button className="w-[265px] h-[63px] bg-[#F6EAE7] rounded-[34px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] font-kleeone font-semibold">generate now</button>

          </div>
        </div>
      </div>
    </>
  )
}

export default Formulir;





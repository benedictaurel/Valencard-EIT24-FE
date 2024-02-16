
import GenerateElem from './../components/FormElem';
import SuccessElem from './../components/SuccesElem';
const Formulir = () => {


  return (
    <>
      <div className='flex justify-center items-center min-h-screen bg-gradient-to-t from-bgsuccess to-tobgsuccess lg:px-48 md:px-16 px-8 py-16 md:py-24 lg:py-32 overflow-hidden'>
      
        {/* component buat generate */}
        <GenerateElem/> 

        {/* component buat success generate */}
        {/* <SuccessElem/> */}
      
      </div>
    </>
  )
}

export default Formulir;





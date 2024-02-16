import { useState } from "react";
import msgform from "./../assets/msgform.png";
import { Copy, CheckSquareOffset } from "@phosphor-icons/react";

const SuccessElem = () => {
  const [isCopied, setIsCopied] = useState(false)

  async function copyText(text) {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand('copy', true, text);
    }
  }

  const handleCopy = () => {
    let textt = document.getElementById("code")
    textt = textt.textContent
    copyText(textt)
    alert("copied code succesfully")
  }

  const handleCopyLink = () => {
    let textt = document.getElementById("linkcode")
    textt = textt.textContent
    copyText(textt)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      {/* <div className='px-4 md:px-16 lg:px-[96.5px] bg-gradient-to-t gradient overflow-hidden from-bgsuccess to-tobgsuccess min-h-screen justify-center items-center flex'> */}
      <div className="w-full md:max-w-[1247px] py-10 px-[20px] md:px-[50px] lg:px-[166.5px] bg-white rounded-[20px] text-center shadow-xl shadow-shadowcard">
          <div className="flex relative flex-row text-center items-center justify-center gap-14">
            <img src={msgform} alt="gambar surat di form" className="absolute lg:w-auto md:w-[90px] lg:size-auto md:right-3 lg:right-8 right-3 w-[50px]" />
            <h1 className='text-[30px] md:text-[60px] lg:text-[100px] text-brown1 mb-2 font-titanone font-normal'>
              Card Form
            </h1>
          </div>
          <div className="bg-cardformsuccess rounded-[50px] w-full px-4 md:px-12 py-8 shadow-lg shadow-shadowbtn">
            <h1 className="md:text-2xl lg:text-3xl font-bold font-sarala mb-6">
              Your card has been generated !
            </h1>
            <h1 className="md:text-2xl lg:text-3xl font-bold font-sarala mb-6">
              Please view your card this code or link
            </h1>
            <h1 id="code" onClick={handleCopy} className="hover:cursor-pointer md:text-[45px] lg:text-[70px] font-bold font-mada text-pinktebel mb-6 hover:cursor-pointe">
              (unique code)
            </h1>
            <div className="flex flex-col md:flex-row text-center justify-center items-center gap-4">
              <h1 id="linkcode" className="md:text-2xl lg:text-3xl font-bold font-sarala md:mb-6">
                contohnamawebsite.com/111111
              </h1>
              <h1 onClick={handleCopyLink}
                className="flex flex-row underline underline-offset-8 md:text-2xl lg:text-3xl font-bold font-mada mb-6 text-pinktebel hover:cursor-pointer">
                <span> {isCopied ? <CheckSquareOffset size={32} /> : <Copy size={32} />} </span>
                <span>{isCopied ? 'Copied!' : 'copy link'}</span>
              </h1>
            </div>
          </div>
        </div>
      {/* </div> */}
    </>
  )
}

export default SuccessElem

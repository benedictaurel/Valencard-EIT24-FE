import { useState } from "react";
import msgform from "./../assets/msgform.png";
import { Copy, CheckSquareOffset } from "@phosphor-icons/react";

const SuccessElem = ({cardKey}) => {
  const [isCopiedLink, setIsCopiedLink] = useState(false)
  const [isCopiedCode, setIsCopiedCode] = useState(false)


  async function copyText(text) {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand('copy', true, text);
    }
  }

  const handleCopyCode = () => {
    copyText(cardKey)
      .then(() => {
        setIsCopiedCode(true);
        setTimeout(() => {
          setIsCopiedCode(false);
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const handleCopyLink = () => {
    let textt = document.getElementById("linkcode")
    textt = "https://" + textt.textContent
    copyText(textt)
      .then(() => {
        setIsCopiedLink(true);
        setTimeout(() => {
          setIsCopiedLink(false);
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <div className="w-full md:max-w-[1247px] py-10 px-[20px] md:px-[50px] lg:px-[166.5px] bg-white rounded-[20px] text-center shadow-xl shadow-shadowcard">
        <div className="flex relative flex-row text-center items-center justify-center gap-14">
          <div className="text-center mb-2">
            <h1 className='text-[30px] md:text-[60px] lg:text-[100px] text-brown1 font-titanone font-normal inline-flex justify-center items-center'>
              Card Form
              <img src={msgform} alt="gambar surat di form" className="ml-4 w-[50px] lg:w-auto md:w-[90px]" />
            </h1>
          </div>
        </div>
        <div className="bg-cardformsuccess rounded-[50px] w-full px-4 md:px-12 py-8 shadow-lg shadow-shadowbtn">
          <h1 className="md:text-2xl lg:text-3xl font-bold font-sarala lg:mb-6 md:mt-6 md:mb-2">
            Your card has been generated !
          </h1>
          <h1 className="md:text-2xl lg:text-3xl font-bold font-sarala mb-6">
            View it via this code or link
          </h1>
          <div className="flex justify-center items-center">
            <h1 id="code" onClick={handleCopyCode} className="hover:cursor-pointer text-[40px] md:text-[60px] lg:text-[70px] font-bold font-mada text-pinktebel mb-6 hover:text-pink-600 hover:scale-105">
              {isCopiedCode ? "Copied!" : cardKey}
            </h1>
          </div>
          <div className="flex flex-col md:flex-row text-center justify-center items-center gap-4">
            <h1 id="linkcode" className="lg:text-2xl font-bold font-sarala md:mb-6 md:text-xl text-sm">
            valencard.vercel.app/card/{cardKey}
            </h1>
            <h1 onClick={handleCopyLink}
              className="flex flex-row underline underline-offset-8 md:text-2xl lg:text-xl font-bold font-mada mb-6 text-pinktebel hover:text-pink-600 hover:scale-105 hover:cursor-pointer">
              <span>{isCopiedLink ? <CheckSquareOffset size={32} /> : <Copy size={32} />} </span>
              <span>{isCopiedLink ? 'Copied!' : 'copy link'}</span>
            </h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default SuccessElem

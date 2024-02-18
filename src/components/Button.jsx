import { Link } from "react-router-dom"

const Button = () => {
    return (
        <>
            <Link to="/">
                <button
                    className='text-lg md:text-2xl shadow-lg shadow-shadowbtn h-16 w-[265px] bg-hvrkrem1 hover:bg-[#FDC5C5] hover:scale-105 rounded-[34px] font-kleeone transition-all duration-300' >
                    back to home
                </button>
            </Link>
        </>
    )
}

export default Button
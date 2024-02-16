import { Link } from "react-router-dom"

const Button = () => {
    return (
        <>
            <div>
                <Link to="/">
                    <button
                        className='text-2xl shadow-lg shadow-shadowbtn h-16 w-[265px] bg-hvrkrem1 hover:bg-buttoncolor rounded-[34px] font-kleeone' >
                        back to home
                    </button>
                </Link>
            </div>
        </>
    )
}

export default Button
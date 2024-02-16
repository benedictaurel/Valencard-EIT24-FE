import { useNavigate } from "react-router-dom"

const Button = () => {
    const navigate = useNavigate()

    const handleHome = (event) => {
        if (event.type === "click") {
            event.preventDefault()
            navigate("/")
        }
    }
    return (
        <>
            <div>
                <button onClick={handleHome}
                className='text-2xl shadow-lg shadow-shadowbtn h-16 w-[265px] bg-hvrkrem1 hover:bg-buttoncolor rounded-[34px] font-kleeone' >
                    back to home
                </button>
            </div>
        </>
    )
}

export default Button
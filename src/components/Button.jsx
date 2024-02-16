<<<<<<< HEAD
const Button = () => {
    return (
        <>
            <div>
                <button className='text-2xl shadow-lg shadow-shadowbtn h-16 w-[265px] bg-hvrkrem1 hover:bg-buttoncolor rounded-[34px] font-kleeone' >
=======
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
>>>>>>> 0fa74d6 (added utilities)
                    back to home
                </button>
            </div>
        </>
    )
}

export default Button
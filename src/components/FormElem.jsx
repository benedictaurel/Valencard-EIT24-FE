import React, { useState } from 'react';
import axios from 'axios';
import msgform from "./../assets/msgform.png";

const GenerateElem = ({onSuccess}) => {
    // State for form inputs
    const [formData, setFormData] = useState({
        sender: '',
        recipient: '',
        message: '',
        theme: 1,
    });

    // Function to update state on input change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://valencard-eit24.vercel.app/api/post-card', formData);
            const data = response.data;

            if (data.success) {
                alert('Card created successfully!');
                const cardKey = data.card_key;
                // Handle successful card creation (e.g., redirecting or clearing the form)
                setFormData({ sender: '', recipient: '', message: '', theme: 1 }); // Reset form
                onSuccess(data.card_key);
            } else {
                // Handle failure
                alert(data.message);
            }
        } catch (error) {
            console.error("Failed to create card:", error);
            alert('Failed to create card. Please try again.');
        }
    };

    return (
        <>
            {/* <div className="w-full md:max-w-[1247px] py-10 px-[20px] md:px-[50px] lg:px-[166.5px] bg-white rounded-[20px] text-center shadow-xl shadow-shadowcard">
                <div className="text-center mb-2">
                    <h1 className='text-[30px] md:text-[60px] lg:text-[100px] text-brown1 font-titanone font-normal inline-flex justify-center items-center'>
                        Card Form
                        <img src={msgform} alt="gambar surat di form" className="ml-4 w-[50px] lg:w-auto md:w-[90px]" />
                    </h1>
                </div>
                <div className="flex flex-col items-center justify-center gap-2 md:gap-6">
                    <div className="text-left w-full md:px-12 lg:px-[15px] px-[15px] font-sarala text-[16px] md:text-[28px] lg:text-[32px]">To</div>
                    <textarea
                        style={{ boxShadow: 'inset 0px 5px 4px rgba(0, 0, 0, 0.25)' }}
                        className='px-6 w-full h-[58px] py-2 text-3xl font-normal font-sarala rounded-[50px] shadow-xl shadow-shadowbtn bg-form focus:outline-none resize-none'
                    />
                    <div className="text-left w-full md:px-12 lg:px-[15px] px-[15px] font-sarala text-[16px] md:text-[28px] lg:text-[32px]">From</div>
                    <textarea
                        style={{ boxShadow: 'inset 0px 5px 4px rgba(0, 0, 0, 0.25)' }}
                        className='px-6 w-full h-[58px] py-2 text-3xl font-normal font-sarala rounded-[50px] shadow-xl shadow-shadowbtn bg-form focus:outline-none resize-none'
                    />
                    <div className="text-left w-full md:px-12 lg:px-[15px] px-[15px] font-sarala text-[16px] md:text-[28px] lg:text-[32px]">Message</div>
                    <textarea
                        maxLength={750}
                        style={{ boxShadow: 'inset 0px 5px 4px rgba(0, 0, 0, 0.25)' }}
                        className='px-6 w-full h-[146px] py-2 text-3xl font-normal font-sarala rounded-[50px] shadow-xl shadow-shadowbtn bg-form focus:outline-none no-scrollbar resize-none'
                    />
                    <button className="w-[265px] h-[63px] bg-hvrkrem1 hover:scale-105 text-xl hover:bg-[#FDC5C5] transition-all duration-300 rounded-[34px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] font-kleeone font-semibold">generate now</button>

                </div>
            </div> */}

            <form onSubmit={handleSubmit} className="w-full md:max-w-[1247px] py-10 px-[20px] md:px-[50px] lg:px-[166.5px] bg-white rounded-[20px] text-center shadow-xl shadow-shadowcard">
            <div className="text-center mb-2">
                    <h1 className='text-[30px] md:text-[60px] lg:text-[100px] text-brown1 font-titanone font-normal inline-flex justify-center items-center'>
                        Card Form
                        <img src={msgform} alt="gambar surat di form" className="ml-4 w-[50px] lg:w-auto md:w-[90px]" />
                    </h1>
                </div>
                <div className="text-left w-full px-[15px] font-sarala text-[32px]">To</div>
                <div className="flex flex-col items-center justify-center gap-12">
                    {/* Existing form structure */}
                    <textarea
                        name="recipient"
                        value={formData.recipient}
                        onChange={handleChange}
                        style={{ boxShadow: 'inset 0px 5px 4px rgba(0, 0, 0, 0.25)' }}
                        className='w-[1002px] h-[58px] px-8 py-2 text-3xl font-normal font-kleeone rounded-[50px] shadow-xl shadow-shadowbtn bg-form focus:outline-none resize-none'
                    />
                    <div className="text-left w-full px-[15px] font-sarala text-[32px] -mt-8">From</div>
                    <textarea
                        name="sender"
                        value={formData.sender}
                        onChange={handleChange}
                        style={{ boxShadow: 'inset 0px 5px 4px rgba(0, 0, 0, 0.25)' }}
                        className='w-[1002px] h-[58px] px-8 py-2 text-3xl font-normal font-kleeone rounded-[50px] shadow-xl shadow-shadowbtn bg-form focus:outline-none resize-none -mt-12'
                    />
                    <div className="text-left w-full px-[15px] font-sarala text-[32px] -mt-8">Message</div>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        maxLength={750}
                        style={{ boxShadow: 'inset 0px 5px 4px rgba(0, 0, 0, 0.25)' }}
                        className='w-[1002px] h-[146px] px-8 py-2 text-3xl font-normal font-kleeone rounded-[50px] shadow-xl shadow-shadowbtn bg-form focus:outline-none resize-none -mt-12 no-scrollbar'
                    />
                    {/* Repeat for sender and message inputs with corresponding name attributes */}
                    <button type="submit" className="w-[265px] h-[63px] bg-hvrkrem1 hover:scale-105 text-xl hover:bg-[#FDC5C5] transition-all duration-300 rounded-[34px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] font-kleeone font-semibold">generate now</button>
                </div>
            </form>

        </>
    )
}

export default GenerateElem
import React, { useState } from 'react';
import axios from 'axios';
import msgform from "./../assets/msgform.png";

const GenerateElem = ({ onSuccess }) => {
    // State for form inputs
    const [formData, setFormData] = useState({
        sender: '',
        recipient: '',
        message: '',
        theme: 1,
    });

    const [validationMsg, setValidationMsg] = useState({
        sender: '',
        recipient: '',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false); 


    const validateForm = () => {
        const messages = {};
        let isValid = true;
        if (!formData.sender.trim()) {
            messages.sender = 'Required';
            isValid = false;
        }
        if (!formData.recipient.trim()) {
            messages.recipient = 'Required';
            isValid = false;
        }
        if (!formData.message.trim()) {
            messages.message = 'Required';
            isValid = false;
        }
        setValidationMsg(messages);
        return isValid;
    };

    // Function to update state on input change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (validationMsg[e.target.name]) {
            setValidationMsg({ ...validationMsg, [e.target.name]: '' });
        }
        if (isSubmitting) setIsSubmitting(false);
    };

    

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm() || isSubmitting) return;
        setIsSubmitting(true);

        try {
            const response = await axios.post('https://valencard-eit24.vercel.app/api/post-card', formData);
            const data = response.data;

            if (data.success) {
                //alert('Card created successfully!');
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
        } finally {
            setIsSubmitting(false); 
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

            <form onSubmit={handleSubmit} className="w-full md:max-w-[997px] py-8 px-[16px] md:px-[40px] lg:px-[132.5px] bg-white rounded-[16px] text-center shadow-xl shadow-shadowcard">
                <div className="text-center mb-2">
                    <h1 className='text-[24px] md:text-[48px] lg:text-[80px] text-brown1 font-titanone font-normal inline-flex justify-center items-center'>
                        Card Form
                        <img src={msgform} alt="gambar surat di form" className="ml-4 w-[40px] lg:w-auto md:w-[72px]" />
                    </h1>
                </div>
                <div className="flex flex-col items-center justify-center gap-12">
                    {/* To Field */}
                    <div className="flex flex-col w-full px-[12px]">
                        <div className="flex justify-between items-center">
                            <label htmlFor="recipient" className="font-sarala text-[25px] ml-10">To</label>
                            {validationMsg.recipient && <div className="flex items-center gap-1 px-2 font-semibold text-red-500 bg-red-100 rounded-md">{validationMsg.recipient}</div>}
                        </div>
                        <textarea
                            name="recipient"
                            id="recipient"
                            value={formData.recipient}
                            onChange={handleChange}
                            style={{ boxShadow: 'inset 0px 5px 4px rgba(0, 0, 0, 0.25)' }}
                            className='w-full h-[48px] px-8 py-2 text-2xl font-normal font-kleeone rounded-[50px] shadow-xl shadow-shadowbtn bg-form focus:outline-none resize-none bg-form outline-none focus:bg-[#FFDEE3] focus:outline-form transition-all duration-500'
                        />
                    </div>

                    {/* From Field */}
                    <div className="flex flex-col w-full px-[15px]">
                        <div className="flex justify-between items-center">
                            <label htmlFor="sender" className="font-sarala text-[25px]  ml-10 -mt-5">From</label>
                            {validationMsg.sender && <div className="flex items-center gap-1 px-2 font-semibold text-red-500 bg-red-100 rounded-md mb-3 mb-3">{validationMsg.sender}</div>}
                        </div>
                        <textarea
                            name="sender"
                            id="sender"
                            value={formData.sender}
                            onChange={handleChange}
                            style={{ boxShadow: 'inset 0px 5px 4px rgba(0, 0, 0, 0.25)' }}
                            className='w-full h-[48px] px-8 py-2 text-2xl font-normal font-kleeone rounded-[50px] shadow-xl shadow-shadowbtn bg-form focus:outline-none resize-none bg-form outline-none focus:bg-[#FFDEE3] focus:outline-form transition-all duration-500'
                        />
                    </div>

                    {/* Message Field */}
                    <div className="flex flex-col w-full px-[15px]">
                        <div className="flex justify-between items-center">
                            <label htmlFor="message" className="font-sarala text-[25px] ml-10 -mt-5">Message</label>
                            {validationMsg.message && <div className="flex items-center gap-1 px-2 font-semibold text-red-500 bg-red-100 rounded-md mb-3">{validationMsg.message}</div>}
                        </div>
                        <textarea
                            name="message"
                            id="message"
                            value={formData.message}
                            onChange={handleChange}
                            maxLength={750}
                            style={{ boxShadow: 'inset 0px 5px 4px rgba(0, 0, 0, 0.25)' }}
                            className='w-full h-[116px] px-8 py-2 text-2xl font-normal font-kleeone rounded-[50px] shadow-xl shadow-shadowbtn bg-form focus:outline-none resize-none bg-form outline-none focus:bg-[#FFDEE3] focus:outline-form transition-all duration-500'
                        />
                    </div>

                    <button type="submit" className="w-[212px] h-[50px] bg-hvrkrem1 hover:scale-105 text-xl hover:bg-[#FDC5C5] transition-all duration-300 rounded-[34px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] font-kleeone font-semibold -mt-5" disabled={isSubmitting}>{isSubmitting ? 'Processing...' : 'Generate Now'}</button>
                </div>
            </form>

        </>
    )
}

export default GenerateElem
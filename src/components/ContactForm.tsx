
'use client'

import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div>
      <div className="flex items-center justify-center pt-[66px]">
        <h1 className="font-bold text-[24px] leading-[38px] tracking-[0.96px]">
          CONTACT US
        </h1>
      </div>
      <form>
        <div className="flex flex-col px-[25px] pt-[60px] pb-[32px]">
          <label
            htmlFor="name"
            className="font-semibold text-[15px] leading-[38px] tracking-[0.6px] pb-[2px] "
          >
            NAME
          </label>
          <input 
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Put your full name"
            className="w-full bg-transparent font-normal text-[15px] leading-[38px] tracking-[0.6px] border-b-[2px] border-x-white pb-[6px] outline-none placeholder:text-gray-500 focus:border-white transition-colors"
          />
        </div>

        <div className="flex flex-col px-[25px] pb-[32px]">
          <label
            htmlFor="email"
            className="font-semibold text-[15px] leading-[38px] tracking-[0.6px] pb-[2px] "
          >
            EMAIL
          </label>
          <input 
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. something@gmail.com"
            className="w-full bg-transparent font-normal text-[15px] leading-[38px] tracking-[0.6px] border-b-[2px] border-x-white pb-[6px] outline-none placeholder:text-gray-500 focus:border-white transition-colors"
          />
        </div>

        <div className="flex flex-col px-[25px] pb-[32px]">
          <label
            htmlFor="message"
            className="font-semibold text-[15px] leading-[38px] tracking-[0.6px] pb-[2px] "
          >
            MESSAGE
          </label>
          <input 
            type="text"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="What do you want to talk to us about?"
            className="w-full bg-transparent font-normal text-[15px] leading-[38px] tracking-[0.6px] border-b-[2px] border-x-white pb-[6px] outline-none placeholder:text-gray-500 focus:border-white transition-colors"
          />
        </div>
      </form>

      <div className="flex justify-center space-x-6 pt-8">
        <button type="button" className="p-2" aria-label="Send email">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </button>
        <button type="button" className="p-2" aria-label="Call us">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </button>
      </div>

    </div>
  )
}
export default ContactForm;

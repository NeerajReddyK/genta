'use client'

import { useState } from "react";
import { Mail, Phone} from "lucide-react"

const ContactFromLg = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
    console.log("Data Submitted: ", formData);
  }

  return (
    <div>
      <div className="pl-[182px] pr-[250px] pt-[149px] grid grid-cols-3 space-x-[250px]">
        <div className="col-span-1">
          <h1 className="font-bold text-[40px] leading-[47.73px] tracking-[1.6px]">
            CONTACT US
          </h1>

          <div className="font-normal text-[24px] leading-[38px] tracking-[0.96px]">
            <div className="flex pt-[100px] space-x-[31px] items-center">
              <Mail />
              <p>
                jcart@jongcircle.com
              </p>
            </div>
            <div className="flex pt-[32px] space-x-[31px] items-center">
              <Phone />
              <p>
                +44 7753 297002
              </p>
            </div>
            <div className="flex pt-[32px] space-x-[31px] items-center">
              <Phone />
              <p>
                +82 10 3230 0899
              </p>
            </div>
            <p>
            </p>
            <p>
            </p>
          </div>

        </div>
        <div className="col-span-2 ">
          <div className="grid grid-cols-2 space-x-[66px]">
            <div className="col-span-1">
              <div className="flex flex-col">
                <label 
                  htmlFor="name"
                  className="text-[20px] font-semibold leading-[38px] tracking-[0.8px]"
                >
                  NAME
                </label>
                <input 
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Put your full name"
                  className="border-b-2 bg-transparent transition-colors pb-[15px] pt-[12px] outline-none"
                />
              </div>
    
            </div>
            <div className="col-span-1 w-full">
              <div className="flex flex-col">
                <label 
                  htmlFor="email"
                  className="text-[20px] font-semibold leading-[38px] tracking-[0.8px]"
                >
                  EMAIL
                </label>
                <input 
                  type="text"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. something@gmail.com"
                  className="border-b-2 bg-transparent  transition-colors pb-[15px] pt-[12px] outline-none"
                />
              </div>

            </div>
          </div>
          <div className="flex flex-col pt-[54px]">
            <label 
              htmlFor="message"
              className="text-[20px] font-semibold leading-[38px] tracking-[0.8px]"
            >
              MESSAGE
            </label>
            <input 
              type="text"
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="What do you want to talk to us about?"
              className="border-b-2 bg-transparent transition-colors pb-[15px] pt-[12px] outline-none"
            />
          </div>

          <button
            type="button" 
            className="border-2 rounded mt-[65px] px-4 py-1 font-semibold text-[20px] leading-[38px] tracking-[0.8px]"
          >
              SEND
          </button>
       </div>
      </div>
    </div>

  )
}
export default ContactFromLg; 
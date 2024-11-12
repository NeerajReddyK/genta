'use client'

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {ChevronDown} from "lucide-react"

const Hamburger = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if(showMenu) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    
    return () => {
      document.body.classList.remove('overflow-hidden')
    }
  }, [showMenu])
  
  const handleMenu = () => {
    return showMenu ? setShowMenu(false) : setShowMenu(true);
  }

  const menuItems = [
    {label: 'ABOUT', href: '/about'},
    {label: 'ART', href: '/art'},
    {label: 'EXHIBITIONS', href: '/exhibitions'},
    {label: 'CONTACT', href: '/contact'},
  ]

  return (
    <>
      <div className="h-[25px] w-[25px]">
        <Image 
          src={showMenu ? '/X-icon.png' : '/Hamburger.svg'}
          alt="Button for toggling menu"
          width={showMenu ? 20 : 25}
          height={showMenu ? 20: 18}
          onClick={handleMenu}
        />
      </div>
      {showMenu && (
        <>
          <div className="fixed inset-0 bg-black z-[-1]"/>
          <div className="fixed left-0 right-0 top-[117px] bottom-0 bg-black z-40">
            <div className="flex flex-col pt-[43px] px-[28px]">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-white text-[24px] leading-[52px] tracking-[0.96px] font-semibold w-fit"
                  onClick={handleMenu}
                > 
                  {item.label}
                </Link>
              ))}

              <div className="relative">
                <button 
                  onClick={() => setIsOpen(!isOpen)}
                  className="flex items-center font-semibold text-[24px] leading-[28.64px] tracking-[0.96px] pt-[10px]"
                >
                  <span className="pr-2">WORK</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                {isOpen && (
                  <div className="flex flex-col opacity-70 pt-[34px] text-[20px] font-medium leading-[23.87px] tracking-[0.8px]">
                    <Link
                      href='/consulting'
                    >
                      CONSULTING
                    </Link>
                    <Link
                      href='/docent'
                      className="pt-[27px]"
                    >
                      DOCENT
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
          </>

      )}
    </>
  )
}
export default Hamburger;

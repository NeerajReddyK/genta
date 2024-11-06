'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Hamburger = () => {
  const [showMenu, setShowMenu] = useState(false);
  
  const handleMenu = () => {
    return showMenu ? setShowMenu(false) : setShowMenu(true);
  }

  const menuItems = [
    {label: 'About', href: '/about'},
    {label: 'Art', href: '/art'},
    {label: 'Exhibitions', href: '/exhibitions'},
    {label: 'Contact', href: '/contact'},
    {label: 'Work', href: '/work'},
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
                  className="text-white text-[20px] leading-[52px] tracking-[0.8px] font-medium"
                  onClick={handleMenu}
                > 
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          </>

      )}
    </>
  )
}
export default Hamburger;

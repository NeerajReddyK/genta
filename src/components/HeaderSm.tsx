
// Trying to add the x-icon. Not working as expected. Working as expected on some routes but failing in others.

import Link from "next/link";
import Hamburger from "./Hamburger";

const HeaderSm = () => {

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="pt-[75px] pl-[25px] pb-[19px]">
          <Hamburger />
        </div>
        <div className="pt-[70px] pb-[17px]">
          <Link
            href="/"
            className="font-bold text-[20px] leading-[23.87px] tracking-[0.8px]"
          >
            GenTA
          </Link>
        </div>
        <div className="mt-[63px] mb-[11px] mr-[25px]">
          <p className="font-normal text-[14px] leading-[38px] text-center">KR</p>
        </div>
      </div>
    </>
  )
}
export default HeaderSm;
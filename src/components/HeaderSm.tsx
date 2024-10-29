import Image from "next/image";

const HeaderSm = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="pt-[75px] pl-[25px] pb-[19px]">
          <Image 
            src='/Hamburger.svg'
            alt="Hamburger"
            width={25}
            height={18}
          />
        </div>
        <div className="pt-[70px] pb-[17px]">
          <p className="font-bold text-[20px] leading-[23.87px] tracking-[0.8px]">
            GenTA
          </p>
        </div>
        <div className="mt-[63px] mb-[11px] mr-[25px]">
          <p className="font-normal text-[14px] leading-[38px] text-center">KR</p>
        </div>
      </div>
    </>
  )
}
export default HeaderSm;
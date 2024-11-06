import Link from "next/link";

const HeaderLg = () => {
  return (
    <header className="flex justify-between items-center">
      <div className=" md:ml-[120px]  lg:ml-[150px] mt-[100px] xl:ml-[181px]">
        <Link
            href="/"
            className="font-bold text-[32px] leading-[38.19px] tracking-[1.28px] font-pretendardmd"
          >
          GenTA
        </Link>
      </div>
      <div className="pt-[106px] space-x-4 lg:space-x-14 xl:sapce-x-32 font-normal text-[18px] leading-[21.48px]">
        <Link 
          href='/about'
        >
          About
        </Link>

        <Link 
          href='/art'
        >
          Art
        </Link>
        <Link 
          href='/exhibitions'
        >
          Exhibitions
        </Link>
        <Link 
          href='/work'
        >
          Work
        </Link>
        <Link 
          href='/contact'
          className="md:pr-[120px] lg:pr-[150px] xl:pr-[182px]"
        >
          Contact 
        </Link>
      </div>
    </header>
  )
}
export default HeaderLg;
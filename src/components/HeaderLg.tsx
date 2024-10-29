import Link from "next/link";

const HeaderLg = () => {
  return (
    <header className="flex justify-between items-center">
      <div className="mt-[100px] ml-[181px]">
        <p className="font-bold text-[32px] leading-[38.19px] tracking-[1.28px]">
          GenTA
        </p>
      </div>
      <div className="pt-[106px] space-x-32 font-normal text-[18px] leading-[21.48px]">
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
          className="pr-[182px]"
        >
          Contact 
        </Link>
      </div>
    </header>
  )
}
export default HeaderLg;
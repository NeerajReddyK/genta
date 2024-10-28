import Image from "next/image";
import Link from "next/link";
import Hamburger from "./HamburgerBar";

const Header = () => {
  return (
    <header className="flex justify-between ml-8 mr-8 md:mt-24 ">
      {/* Mobile specific */}
      <div className="block md:hidden mt-9">
        <Hamburger />
      </div>

      <div>
        <Image 
          src='/logo.svg'
          alt="Logo of GenTA"
          width='116'
          height='23'
          className="md:mt-24 md:ml-48 mt-8"
        />
      </div>

      {/* Mobile specific */}
      <div className="block md:hidden mt-9">
        KR
      </div>

      <div className="hidden md:block mt-24 space-x-6 lg:space-x-16 xl:space-x-28 pr-32 lg:pr-48">
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
        >
          Contact 
        </Link>
      </div>
    </header>
  )
}
export default Header;
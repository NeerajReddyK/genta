import Image from "next/image";
import HeaderLg from "./HeaderLg";
import Link from "next/link";
import artworks from "@/data/artworksData";

const ExhibitionsLg = () => {
  return (
    <>
      {/* Screen-1 */}
      <div className="min-h-screen text-white relative">
        <div className="absolute inset-0 w-full h-full">
          <Image 
            src="/Exhibitions-hero.jpg"
            alt="Art by one of our Artists"
            fill
            className="opacity-75 -z-10"
          />
        </div>
       <header className="relative z-10 flex flex-col ">
          <HeaderLg />
        </header>
        <div className="h-[65vh]">

        </div>
        <div className="h-[10vh] flex justify-between pb-[106px] lg:px-[130px] xl:px-[170px] relative z-10">
          <div>
            <h1 className="pb-[24px] font-bold text-[40px] leading-[47.73px] tracking-[1.6px]">
              INTERRELATIONSHIPS
            </h1>
            <p className="text-[18px] font-normal leading-[21.48px] tracking-[0.72px]">
              18.12.2024 - 05.01.2025
            </p>
 
          </div>
         <Link 
            href="/under-development"
            className="inline-flex items-center border border-white rounded-full px-10 py-6 hover:bg-white hover:text-black transition-colors mt-1"
          >
            CATALOGUE
          </Link>
        </div>
      </div>



      {/* Screen-2 */}
      <div className="min-h-screen bg-black text-white px-8 py-12">
        {/* Description Section */}
        <div className="grid grid-cols-2 gap-[259px]">
          <div className="ml-[182px] font-normal text-[16px] leading-[38px] tracking-[0.96px] text-justify">
            <p className="mb-[61px]">
              Interrelationships is lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum. lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum. lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum. lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.
            </p>
            <p className=" ">
              Interreltionships is lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum. lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum. lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum. lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.
            </p>
          </div>
          
          {/* Info Grid */}
          <div className="flex flex-col leading-[38px] tracking-[0.96px] mr-[180px]">
            <div className="flex  justify-between mr-[180px]">
              <div className="pr-[60px]">
                <h3 className="text-[24px]  font-semibold mb-[38px]">Location</h3>
                <p className="text-[18px] font-normal leading-6">
                  75-1 <br />
                  Samcheong-ro,<br />
                  Jongno-gu,<br />
                  Seoul
                </p>
              </div>
            
              <div>
                <h3 className="text-[24px] font-semibold mb-[38px]">Tickets</h3>
                <p className="text-[18px] font-normal">Free, walk-in</p>
              </div>

            </div>
            <div className="flex  justify-between pr-[117px] mt-[100px]">
              <div className="pr-[60px]">
                <h3 className="text-[24px] font-semibold mb-[38px]">Dates</h3>
                <p className="text-[18px] font-normal">
                  18.12.2024 -<br />
                  23.12.2024
                </p>
              </div>
              
              <div>
                <h3 className="text-[24px] font-semibold mb-[38px]">Opening Time</h3>
                <p className="text-[18px] font-normal">10:00 - 19:00</p>
              </div>
 
            </div>
         </div>
        </div>

        {/* Featured Artworks Section */}
        <div className="mt-[58px] ml-[182px] mr-[180px]">
          <h2 className="text-[32px] mb-[59px] font-semibold leading-[38px] tracking-[1.28px]">Featured Artworks</h2>
          <div className="grid grid-cols-2 gap-[101px]">
            {artworks.slice(0, 4).map((artwork, index) => (
              <div key={index} className="space-y-4">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={artwork.src}
                    alt={artwork.alt}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-sm">
                  Artwork Name, Artist, 2024
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Catalogue Button */}
        <div className="flex justify-end mt-12 mr-[180px]">
          <Link 
            href="/under-development"
            className="inline-flex items-center gap-2 border border-white rounded-full px-6 py-2 hover:bg-white hover:text-black transition-colors"
          >
            CATALOGUE
            <svg 
              className="w-4 h-4" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>

        {/* Footer */}
        <footer className="mt-[90px] mb-[102px]">
          <div className="flex justify-center items-center flex-col text-[12px] leading-[14.32px]  tracking-[0.48px] font-medium">
            <p>328, Gangnam-daero, Gangnam-gu, Seoul, Republic of Korea, 06252 | TEL: 01034347884</p>
            <p>
              © GenTA, All rights reserved.
            </p>
 
          </div>
       </footer>
      </div>
    </>
  )
}
export default ExhibitionsLg;

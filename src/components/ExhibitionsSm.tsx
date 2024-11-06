import Image from "next/image";
import HeaderSm from "./HeaderSm";
import { exhibition } from "@/data/ExhibitionsData";
import { Calendar, Clock, MapPin } from "lucide-react";
import artworks from "@/data/artworksData";
import Link from "next/link";

const ExhibitionsSm = () => {
  return (
    <div>
      <div>
        <HeaderSm />
      </div>
      <main>
        <div className="relative">
          <div className="relative w-full h-[87vh] overflow-hidden opacity-75">
            <Image 
              src={exhibition.imageUrl}
              alt={exhibition.imageAlt}
              fill
              priority
              className="object-center object-cover"
              sizes="100vw"
            />
          </div>
          <div className="absolute bottom-0 left-0 w-full pl-[28px] z-10 mb-[57px]">
            <h1 className="text-[24px] font-bold leading-[28.64px] spacing-[0.96px] mb-[24px]">
              {exhibition.title}
            </h1>
            <p className="pb-[57px] font-medium text-[14px] leading-[16.71px] tracking-[0.56px]">
              {exhibition.titleFromDate} - {exhibition.titleToDate}
            </p>
          </div>


        </div>

        {/* screen-2 */}
        <div className="space-y-[24px] mt-[59px] px-[28px] mb-[60px]">
          <div className="flex items-start gap-[8px] ">
            <Calendar className="w-[16px] h-[16px] mt-[2px] stroke-[1.5]"/>
            <p>{exhibition.exhibitionFromDate} - {exhibition.exhibitionToDate}</p>
          </div>
          
          <div className="flex items-start gap-[8px]">
            <MapPin className="w-[16px] h-[16px] mt-[2px] stroke-[1.5]"/>
            <p>{exhibition.address}</p>
          </div>

          <div className="flex items-start gap-[8px]">
            <Clock className="w-[16px] h-[16px] mt-[2px] stroke-[1.5]"/>
            <p>{exhibition.startTime} - {exhibition.endTime}</p>
          </div>
        </div>

        {/* screen-2 description */}
        <div className="px-[24px] text-justify space-y-[42px] text-[16px] font-normal leading-[30px] tracking-[0.64px] mb-[87px]">
          <p>
            Interrelationships is lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum. lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum. lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum. lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.
          </p>
          <p>
            Interrelationships is lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum. lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum. lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum. lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.
          </p>
        </div>

        {/* screen-2 featured artworks */}
        <div className="px-[26px]">
          <h2 className="text-[16px] mb-[26px] font-semibold leading-[38px] tracking-[0.96px]">Featured Artworks</h2>
          <div className="grid grid-cols-2 gap-y-[42px] gap-x-[24px]">
            {artworks.slice(0, 4).map((artwork) => (
              <div key={artwork.id} >
                <div className="relative w-full h-[117px]">
                  <Image
                    src={artwork.src}
                    alt={artwork.alt}
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                </div>
                <p className="text-[11px] mt-[10px]">
                  Artwork Name, Artist, 2024
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* screen-2 Catalogue */}
        <div className="my-[100px] flex justify-center">
          <Link 
            href="/under-development"
            className="inline-flex items-center gap-2 border border-white rounded-full px-6 py-[6px] hover:bg-white hover:text-black transition-colors"
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
        <footer className=" mb-[46px]">
          <div className="flex justify-center items-center flex-col text-[12px] leading-[14.32px]  tracking-[0.48px] font-medium">
            <p>
              © GenTA, All rights reserved.
            </p>
 
          </div>
       </footer>
     </main>
    </div>
  )
}
export default ExhibitionsSm;
import Image from 'next/image';
import artworks from '@/data/artworksData';
import HeaderLg from './HeaderLg';

const ArtLg = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <HeaderLg />
      <main className="container mx-auto ">
        <h1 className="text-[40px] font-bold text-center mb-[86px] leading-[47.73px] tracking-[1.6px] mt-[173px]">
          ARTISTS
        </h1>
{/*         
        <div className="grid grid-cols-3 gap-8">
          {artworks.map((artwork) => (
            <div 
              key={artwork.id}
              className="relative group aspect-square overflow-hidden"
            >
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 z-10" />
              <Image
                src={artwork.src}
                alt={artwork.alt}
                width="445"
                height="297"
                sizes="(min-width: 1024px) 33vw, 50vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                priority={artwork.id <= 3} // Loads first 3 images immediately
                quality={85}
              />
            </div>
          ))}
        </div> */}


        <div className="grid grid-cols-3 gap-[15px] p-20">
          {artworks.map((artwork) => (
            <div key={artwork.id}>
              <Image 
                src={artwork.src}
                alt={artwork.alt}
                width={445}
                height={297}
              />
            </div>

          ))}
        </div>
 
        <footer className="text-center text-sm my-[74px]">
          328, Gangnam-daero, Gangnam-gu, Seoul, Republic of Korea, 06252 | TEL: 01034347884
          <p>© GenTA, All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
};

export default ArtLg;
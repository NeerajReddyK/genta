import Image from 'next/image';
import artworks from '@/data/artworksData';
import HeaderSm from './HeaderSm';

const ArtSm = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <HeaderSm />
      <main className="container mx-auto ">
        <h1 className="text-[24px] font-bold text-center leading-[38px] tracking-[0.96px] mt-[73px] mb-[60px]">
          ARTISTS
        </h1>

        <div className="grid grid-cols-2 gap-[10px] mx-[25px] ">
          {artworks.slice(0, 8).map((artwork) => (
            <div key={artwork.id}>
              <Image 
                src={artwork.src}
                alt={artwork.alt}
                width={200}
                height={200}
              />
            </div>
          ))}
        </div>
 
        <footer className="text-center text-sm my-[74px]">
          © GenTA, All rights reserved.
        </footer>
      </main>
    </div>
  );
};

export default ArtSm;
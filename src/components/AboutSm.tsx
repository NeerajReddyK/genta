
import Image from 'next/image';
import HeaderSm from '@/components/HeaderSm';

const AboutSm = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <HeaderSm />
      
      <main className="">
        {/* Main heading section */}
        <div className="pt-[72px] flex items-center justify-center w-full mb-[22px]">
          <h1 className="mb-4 w-[290px] h-[150px] text-center font-normal text-[20px] leading-[38px] tracking-[0.8px]">
            GenTA, a pioneering initiative to spotlight emerging artists from around the world.
          </h1>
        </div>

        {/* Image and text section */}
          {/* Gallery presentation image */}
          <div className="relative h-64 w-full mb-[61px]">
            <Image
              src="/About-hero.png" // Replace with your actual image path
              alt="Gallery presentation"
              fill
              className="object-cover"
            />
          </div>

          {/* Mission statement */}
          <div className="flex items-center justify-center w-full">
            <h1 className="mb-[120px] w-[290px] h-[150px] text-center font-normal text-[20px] leading-[38px] tracking-[0.8px]">
              Our mission is to foster international art community by celebrating new voices.
            </h1>
          </div>

          <div className="relative h-[348px] w-full">
            <Image 
              src="/About-group.png"
              alt="Different art pictures"
              fill
              className="object-cover"
            />
          </div>

          {/* Copyright notice */}
          <div className="mt-[117px] h-[103px] flex items-center justify-center">
            <p className="font-medium text-[12px] leading-[20.28px] tracking-[0.48px]">
              © GenTA. All rights reserved.
            </p>
          </div>
      </main>
    </div>
  );
};

export default AboutSm;

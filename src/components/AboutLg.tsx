
import Image from 'next/image';
import HeaderLg from './HeaderLg';

const AboutLs = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <HeaderLg />
      
      <main className="">
        {/* Main heading section */}
        <div className="pt-[157px] pb-[166px] flex items-center justify-center  ">
          <h1 className=" w-[640px] h-[76px] text-center font-normal text-[31px] leading-[38px] tracking-[1.52px]">
            GenTA, a pioneering initiative to spotlight emerging artists from around the world.
          </h1>
        </div>

          {/* Gallery presentation image */}
        <div className="relative h-[1104px] w-full ">
          <Image
            src="/About-hero.jpg" // Replace with your actual image path
            alt="Gallery presentation"
            fill
            className="object-cover"
          />
        </div>

          {/* Mission statement */}
        <div className="py-[145px] pb-[166px] flex items-center justify-center ">
          <h1 className=" w-[657px] h-[76px] text-center font-normal text-[32px] leading-[38px] tracking-[1.52px] transition delay-700">
              Our mission is to foster international art community by celebrating new voices.
          </h1>
        </div>

        <div className="relative flex items-center justify-center pb-[167px]">
          <Image 
            src="/About-group.png"
            alt="Different art pictures"
            width={638}
            height={630}
            className="object-cover"
          />
        </div>

      </main>
    </div>
  );
};

export default AboutLs;

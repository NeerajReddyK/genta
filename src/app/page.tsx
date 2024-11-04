import HeaderLg from "@/components/HeaderLg";
import HeaderSm from "@/components/HeaderSm";
import HeroLg from "@/components/HeroLg";
import HeroSm from "@/components/HeroSm";
import HomeLg2 from "@/components/HomeLg2";
import HomeSm2 from "@/components/HomeSm2";

export default function Home() {
return (
    <div>
      <div className="relative h-screen w-screen overflow-hidden text-white bg-black">
        <div className="absolute z-10 w-full ">
          <div className="hidden md:block">
            <HeaderLg />
          </div>
          <div className="md:hidden">
            <HeaderSm />
          </div>
        </div>
        <video
          src='./Hero-video.mp4'
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 w-full h-full object-cover opacity-65 md:opacity-70"
        ></video>
      <span className="hidden md:block">
        <HeroLg />
      </span>
      <span className="md:hidden">
        <HeroSm />
      </span>
      </div>
      <div>
        <span className="hidden md:block">
          <HomeLg2 />
        </span>
        <span className="md:hidden">
          <HomeSm2 />
        </span>
      </div>
    </div>
  );
}

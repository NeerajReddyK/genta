import HeaderLg from "@/components/HeaderLg";
import HeaderSm from "@/components/HeaderSm";

export default function Home() {
  return (
    <div className="relative h-screen w-screen overflow-hidden text-white bg-black">
      <div className="absolute z-10 w-full">
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
      <div className="absolute flex flex-col items-center justify-center min-h-screen min-w-full font-pretendard">
        <p className="md:text-[160px] md:leading-[190.94px] md:font-bold md:tracking-[7.6px]
          text-[64px] font-bold leading-[76.38px] tracking-[2.56px]
        ">
          GenTA.
        </p>
        <div>
          <p
            className="md:font-light md:text-[40px] md:leading-[47.73px]" 
          >Reimagining Art Through Tech</p>
 
        </div>
     </div>
    </div>
  );
}

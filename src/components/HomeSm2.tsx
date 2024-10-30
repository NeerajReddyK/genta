import Image from "next/image";

const HomeSm2 = () => {
  return (
    <div className="relative h-screen w-screen text-white overflow-hidden pt-12">
      <Image 
        src='/Home-2.png'
        alt="People enjoying arts at GenTA"
        width={500}
        height={120}
        className="absolute"
      />
      <div className="absolute flex flex-col justify-center items-center min-h-screen text-white">
        <p className="text-[24px] leading-[44px] tracking-[2.16px] font-semibold text-center">
          GenTA, an innovative platform highlighting rising artists from around the world.
        </p>
        <button className="pt-[60px]">
          <span className="text-[16px] border px-[30px] py-[14px] rounded-full leading-[44px] tracking-[0.64px]">
            About Us
          </span>
 
        </button>
     </div>
    </div>
  )
}
export default HomeSm2;
import Image from "next/image"

const HomeLg2 = () => {
  return (
    <div className="relative h-screen w-screen text-white overflow-hidden pt-12">
      <Image 
        src='/Home-2lg.png'
        alt="People enjoying arts at GenTA"
        width={1728}
        height={1136}
        className="absolute object-fill h-full w-full"
      />
      <div className="absolute flex flex-col justify-center items-center min-h-screen text-white h-screen w-screen">
        <div className="flex flex-col items-center justify-center">
        <p className="text-[40px] leading-[56px] tracking-[1.6px] max-w-[777px] font-semibold text-center">
          GenTA, an innovative platform highlighting rising artists from around the world.
        </p>
        <button className="pt-[60px]">
          <span className="text-[16px] border px-[30px] py-[14px] rounded-full leading-[44px] tracking-[0.64px]">
            About Us
          </span>
 
        </button>
 
        </div>
    </div>
    </div>
 
  )
}
export default HomeLg2
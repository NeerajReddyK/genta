import FooterSm from "@/components/FooterSm";
import HeaderSm from "@/components/HeaderSm";
import Image from "next/image";

const Consulting = () => {
  return (
    <div>
      <div className="relative w-full h-screen flex flex-col">
        <div className="relative z-10 max-h-screen">
          <HeaderSm />
        </div>
        <div className="relative flex-1 items-center justify-center min-h-[86vh]">
          <Image 
            src="/docent/docent-hero-1.png"
            alt="Space background"
            fill
            className="object-center"
            priority
          />

      </div>
          <div className="absolute flex min-h-screen items-center justify-center ">
            <p className="px-[44px] text-[24px] font-semibold leading-[38px] tracking-[0.96px] text-center">
              GenTA blends technology and creativity to transform art experiences.
            </p>
          </div>
  
      </div>

      {/* Screen-2 */}
      <div className="text-black" style={{background: '#F7F7F7'}}>
        <div className="py-[66px] font-normal text-[16px] leading-[30px] tracking-[0.64px] px-[46px] text-center">
          At GenTA, we offer consulting services tailored to art galleries and museums looking to integrate cutting-edge technology into their exhibits.
        </div>
        <div>
          <Image 
            src="/docent/docent-1.jpg"
            alt="People discussing art"
            width={524}
            height={307}
          />
        </div>
        <div className="flex flex-col items-center justify-center px-[46px] space-y-[68px]">
          <h1 className="pt-[68px] text-[20px] leading-[30px] tracking-[0.8px] text-center font-semibold">
            What We Do
          </h1>
          <div className="flex flex-col items-center justify-center">
            <Image 
              src="/docent/docent-2.png"
              alt="image"
              width={126}
              height={126}
            />
            <p className="pt-[25px] text-[14px] leading-[30px] tracking-[0.56px] text-center font-semibold">
              Visual Direction
            </p>
            <p className="pt-[18px] text-center px-[40px]">
              Optimized exhibition layouts for enhanced viewer engagement
            </p>
  
          </div>
          <div className="flex flex-col items-center justify-center">
            <Image 
              src="/docent/docent-4.png"
              alt="image"
              width={126}
              height={126}
              className="border-[1px] border-black py-[38px] pl-[24px] pr-[38px]"
            />
            <p className="pt-[25px] text-[14px] leading-[30px] tracking-[0.56px] text-center font-semibold">
              AI Narration
            </p>
            <p className="pt-[18px] text-center px-[40px]">
              AI narration to elevate visitor experience and artwork interpretation
            </p>
          </div>
          <div className="flex flex-col items-center justify-center pb-[50px]">
            <Image 
              src="/docent/docent-5.png"
              alt="image"
              width={126}
              height={126}
            />
            <p className="pt-[25px] text-[14px] leading-[30px] tracking-[0.56px] text-center font-semibold">
              Strategy
            </p>
            <p className="pt-[18px] text-center px-[40px]">
              Customized strategies tailored to our client's needs
            </p>
          </div>
 
        </div>
      </div>
      {/* screen-3 */}
      <div className="bg-white text-black flex flex-col items-center justify-center pt-[68px]">
        <h1 className="font-semibold text-[22px] leading-[30px] spacing-[0.8px] text-center">
          Our Clients 
        </h1>
        <div className="pt-[80px] pb-[150px]">
          <Image 
            src="/docent/docent-client-1.jpg"
            alt="Clients image"
            width={290}
            height={159}
            className="object-cover"
          />
        </div>
        <FooterSm />

      </div>
    </div>

  )
}
export default Consulting;

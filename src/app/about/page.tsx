import AboutLs from "@/components/AboutLg";
import AboutSm from "@/components/AboutSm";

const AboutPageMobile = () => {
  return (
    <>
      <div className="hidden md:block">
        <AboutLs />
      </div>
      <div className="block md:hidden">
        <AboutSm />
      </div>
    </>
 );
};

export default AboutPageMobile;
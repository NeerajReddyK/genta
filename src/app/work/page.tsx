import HeaderLg from "@/components/HeaderLg";
import HeaderSm from "@/components/HeaderSm";

const Work = () => {
  return (
    <>
      <div className="md:hidden">
        <HeaderSm />
      </div>
      <div className="hidden md:block">
        <HeaderLg />
      </div>
    </>
  )
}
export default Work;
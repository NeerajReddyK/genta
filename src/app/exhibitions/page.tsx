import ExhibitionsLg from "@/components/ExhibitionsLg";
import ExhibitionsSm from "@/components/ExhibitionsSm";

const Exhibitions = () => {
  return(
    <>
      <div className="md:hidden">
        <ExhibitionsSm />
      </div>
      <div className="hidden md:block">
        <ExhibitionsLg />
      </div>
    </>
  )
}
export default Exhibitions;
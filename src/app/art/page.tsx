import ArtLg from "@/components/ArtLg";
import ArtSm from "@/components/ArtSm";

const Art = () => {
  return (
    <>
      <div className="hidden md:block">
        <ArtLg />
      </div>
      <div className="md:hidden">
        <ArtSm />
      </div>
    </>
  )
}
export default Art;
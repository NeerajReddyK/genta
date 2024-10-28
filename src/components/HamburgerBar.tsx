import Image from "next/image"

const Hamburger = () => {
  return (
    <div>
      <div className="block md:hidden space-y-1">
        <div>
          <Image
            src='/line.png'
            alt="Hamburger bar"
            width={25}
            height={3}
          />
        </div>
        <div>
          <Image 
            src='/line.png'
            alt="Hamburger bar"
            width={25}
            height={3}
          />
        </div>
          <Image 
            src='/line.png'
            alt="Hamburger bar"
            width={25}
            height={3}
          />
      </div>
    </div>
  )
}
export default Hamburger;
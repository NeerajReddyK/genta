import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="relative h-screen w-screen overflow-hidden text-white bg-black">
      <div className="absolute z-10 w-full">
       <Header />
      </div>
      <video
        src='./Hero-video.mp4'
        autoPlay
        loop
        className="absolute top-0 left-0 w-full h-full object-cover opacity-65 md:opacity-70"
      ></video>

      
    </div>
  );
}

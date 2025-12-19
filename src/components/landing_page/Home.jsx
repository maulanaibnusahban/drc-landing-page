import BackgroundHero from "../ui/BackgroundHero";
import { PointHero } from "../ui/PointHero";
import { FaChevronRight } from "react-icons/fa";
import { point_home } from "../../lib";

export default function Home() {
  return (
    <main
      className="w-full flex flex-wrap justify-center relative min-h-screen bg-black items-center overflow-hidden pt-20 lg:pt-32 2xl:pt-5"
      id="home"
    >
      <div className="absolute inset-0 w-full h-full">
        <div className="bg-[#f9f9f9] min-w-screen min-h-screen w-full h-full block xl:hidden"></div>
        <BackgroundHero />
      </div>
      <div className="z-10 flex relative flex-col items-center lg:max-w-[730px] 2xl:max-w-[740px] w-full min-w-8 font-plus-jakarta-sans text-center gap-6 lg:gap-7 mb-20 2xl:mb-0">
        <p className="font-bold lg:text-2xl bg-[linear-gradient(90deg,#00C4FF_0%,#5A94FF_100%)] bg-clip-text text-transparent">
          Dinus Robotic Club
        </p>
        <h1 className="font-extrabold px-4 lg:px-0 text-4xl lg:text-[70px] 2xl:text-[75px] tracking-[-1.6px] font-plus-jakarta-sans lg:leading-22 w-full">
          Wadah Inovasi dan Pengembangan{" "}
          <span className="bg-[linear-gradient(90deg,#00C4FF_0%,#5A94FF_100%)] bg-clip-text text-transparent">
            Teknologi Robotika.
          </span>
        </h1>
        <p className="max-w-[700px] font-normal px-4 lg:px-0 text-sm lg:text-2xl text-center w-full ">
          Tempat untuk memberikan wadah beksperimen tanpa batas di bidang robotika, menghubungkan mahasiswa dengan teknologi masa
          depan.
        </p>
        <a
          href="#about"
          className="py-3 px-8 lg:px-12 lg:py-4 items-center flex rounded-full bg-[linear-gradient(90deg,#00C4FF_0%,#5A94FF_100%)] font-bold text-sm lg:text-xl text-white gap-2.5 hover:bg-[linear-gradient(15deg,#5A94FF_5%,#00C4FF_100%)] transition-all duration-500 active:scale-95 cursor-pointer"
        >
          Tentang DRC <FaChevronRight className="h-3 w-3 lg:h-4 lg:w-4" />
        </a>
      </div>
      {point_home.map((point, index) => (
        <PointHero
          key={index}
          background={point.background}
          text={point.text}
          border={point.border}
          bg_text={point.bg_text}
          position={point.position}
        />
      ))}
    </main>
  );
}

import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const images = ["/image2.webp", "/image1.webp", "/image3.webp", "/image4.webp", "/image5.webp"];

function About() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <section
      className="w-full max-w-7xl 2xl:max-w-350 mx-auto py-20 px-4 sm:px-10 md:px-16 flex flex-col gap-12 scroll-mt-8"
      id="about"
    >
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold font-poppins text-gray-900 leading-tight">
          Mengembangkan Masa Depan <span className="text-[#00C4FF]">Melalui Robotika</span>
        </h1>
        <p className="text-gray-600 lg:text-lg font-plus-jakarta-sans">
          Dinus Robotic Club adalah wadah bagi mahasiswa untuk mengembangkan minat dan bakat di bidang robotika melalui riset,
          pelatihan, dan kompetisi.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="relative group w-full aspect-video rounded-2xl overflow-hidden shadow-2xl max-w-3xl">
          <img
            src={images[currentSlide]}
            alt={`Slide ${currentSlide + 1}`}
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
          />

          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"></div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 p-3 rounded-full shadow-lg backdrop-blur-sm transition-all hover:scale-110 active:scale-95 cursor-pointer"
            aria-label="Previous Slide"
          >
            <FaChevronLeft className="w-3 h-3 md:w-5 md:h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 p-3 rounded-full shadow-lg backdrop-blur-sm transition-all hover:scale-110 active:scale-95 cursor-pointer"
            aria-label="Next Slide"
          >
            <FaChevronRight className="w-3 h-3 md:w-5 md:h-5" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`md:w-3 md:h-3 w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index ? "bg-blue-600 md-6 md:w-8" : "bg-white/70 hover:bg-white"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="space-y-2 font-plus-jakarta-sans text-gray-700 max-w-2xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 font-poppins">Tentang Kami</h2>
          <p className="leading-relaxed lg:text-lg">
            Kami percaya bahwa teknologi robotika bukan hanya tentang mesin, tetapi tentang bagaimana kita memecahkan masalah
            nyata. Di DRC, kami menggabungkan
            <span className="font-semibold text-[#00C4FF]"> kreativitas, engineering, dan teamwork</span> untuk menciptakan robot
            yang berprestasi di tingkat nasional maupun internasional.
          </p>
          <p className="hidden sm:block leading-relaxed lg:text-lg md:line-clamp-2 xl:line-clamp-none">
            Bergabunglah dengan komunitas kami untuk belajar mulai dari dasar elektronika, pemrograman mikrokontroler, hingga
            desain mekanik yang kompleks.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;

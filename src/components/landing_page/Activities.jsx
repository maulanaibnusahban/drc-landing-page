import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { activities_list } from "../../lib";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Activities() {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <section className="w-full relative py-20 overflow-hidden bg-gray-50 scroll-mt-10" id="activities">
      {/* Header */}
      <div className="text-center mb-12 px-4 space-y-4">
        <h2 className="text-3xl md:text-5xl font-bold font-poppins text-gray-900">
          Kegiatan <span className="text-[#00C4FF]">Terbaru</span>
        </h2>
        <p className="text-gray-600 lg:text-lg font-plus-jakarta-sans max-w-3xl mx-auto">
          Intip keseruan dan agenda kegiatan kami dalam mengembangkan teknologi dan skill anggota.
        </p>
      </div>

      <div className="w-full px-4 lg:px-0">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={20}
          slidesPerView={"auto"}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }}
          pagination={{
            clickable: true,
            dynamicBullets: false,
            el: ".swiper-pagination-custom",
          }}
          breakpoints={{
            640: {
              slidesPerView: "auto",
              spaceBetween: 20,
            },
            768: {
              slidesPerView: "auto",
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: "auto",
              spaceBetween: 40,
            },
            1280: {
              slidesPerView: "auto",
              spaceBetween: 80,
            },
            1536: {
              slidesPerView: "auto",
              spaceBetween: 100,
            },
          }}
          className="activities-swiper w-full max-w-[1920px] mx-auto pb-20 relative"
        >
          {activities_list.map((item, index) => (
            <SwiperSlide key={index} className="h-auto py-10 w-auto! flex! justify-center">
              {({ isActive }) => (
                <div
                  className={`relative w-full max-w-[90vw] md:max-w-2xl lg:max-w-[900px] xl:max-w-5xl rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] border border-gray-100 flex flex-col lg:flex-row group items-stretch h-full ${
                    isActive
                      ? "scale-100 opacity-100 blur-0 z-20 shadow-blue-200/50"
                      : "scale-90 opacity-40 blur-[1px] grayscale-50 z-10"
                  }`}
                >
                  {/* Image Side */}
                  <div className="w-full lg:w-5/12 h-64 md:h-80 lg:h-auto lg:min-h-full relative overflow-hidden shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-bold text-[#00C4FF] font-plus-jakarta-sans shadow-lg z-10">
                      {item.date}
                    </div>
                  </div>

                  <div className="w-full lg:w-7/12 p-6 lg:p-10 flex flex-col justify-center font-plus-jakarta-sans relative overflow-hidden bg-white lg:w-3xl">
                    <h3 className="text-xl lg:text-3xl font-bold font-poppins text-gray-900 mb-4 group-hover:text-[#00C4FF] transition-colors relative z-10">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed lg:text-lg relative z-10">{item.description}</p>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}

          <div
            ref={navigationPrevRef}
            className="swiper-button-prev-custom absolute left-4 lg:left-12 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/80 hover:bg-white backdrop-blur-md rounded-full hidden lg:flex items-center justify-center shadow-lg cursor-pointer text-gray-800 hover:text-[#00C4FF] hover:scale-110 transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </div>
          <div
            ref={navigationNextRef}
            className="swiper-button-next-custom absolute right-4 lg:right-12 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/80 hover:bg-white backdrop-blur-md rounded-full hidden lg:flex items-center justify-center shadow-lg cursor-pointer text-gray-800 hover:text-[#00C4FF] hover:scale-110 transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </div>

          <div className="swiper-pagination-custom flex justify-center gap-2 mt-8"></div>
        </Swiper>
      </div>
    </section>
  );
}

export default Activities;

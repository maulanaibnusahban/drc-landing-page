import React from "react";

const Preloader = ({ isLoading }) => {
  return (
    <div
      className={`fixed inset-0 z-9999 bg-white flex flex-col items-center justify-center transition-all duration-1000 ease-[cubic-bezier(0.77,0,0.175,1)] ${
        isLoading ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="relative flex flex-col items-center gap-4">
        {/* Logo */}
        <img src="/logo_drc.svg" alt="Loading..." className="w-24 md:w-32" />
        <p className="font-plus-jakarta-sans text-lg md:text-xl animate-reveal text-center">Dinus Robotic Club</p>
      </div>
    </div>
  );
};

export default Preloader;

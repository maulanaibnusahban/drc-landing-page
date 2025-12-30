"use client";
import React, { useState, useEffect } from "react";
import { nav_menu } from "../../lib";
import { FiChevronsLeft } from "react-icons/fi";
import { IoChatbubbleOutline } from "react-icons/io5";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = nav_menu.map((item) => item.href.substring(1));
      let currentCheck = "";

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentCheck = "#" + sectionId;
            break;
          }
        }
      }
      setActiveLink(currentCheck);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className="bg-white lg:rounded-full flex justify-between shadow-md fixed lg:top-5 z-50 px-4 lg:px-8 py-2 h-20 lg:h-auto lg:min-h-16 lg:py-4 w-full lg:max-w-4xl items-center">
        <a href="/" className="">
          <img src="/logo_drc.svg" className="lg:w-14 2xl:w-16" alt="Logo DRC" width={55} height={55} />
        </a>

        <div className="justify-between items-center gap-8 font-plus-jakarta-sans hidden lg:flex">
          {nav_menu.map((menu, index) => (
            <a
              key={index}
              href={menu.href}
              className={`text-lg relative duration-300 cursor-pointer transition-colors group ${
                activeLink === menu.href ? "text-[#00C4FF]" : "text-black hover:text-[#00C4FF]"
              }`}
            >
              {menu.name}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-[#00C4FF] transition-all duration-300 ease-in-out ${
                  activeLink === menu.href ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4 font-plus-jakarta-sans w-auto">
          <a
            href="https://wa.me/6288226457475"
            className="rounded-full py-2.5 px-7 bg-[#E2B2FF] cursor-pointer border-2 border-[#E2B2FF] hover:bg-white hover:border-[#E2B2FF] transition-all duration-100 flex items-center justify-center gap-2"
          >
            <IoChatbubbleOutline className="h-5 w-5" />
            Kontak
          </a>
        </div>

        <div className="block lg:hidden cursor-pointer" onClick={handleToggle}>
          <FiChevronsLeft className={`h-6 w-6 transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`} />
        </div>
      </nav>

      {isOpen && (
        <div
          className="fixed top-20 inset-0 bg-transparent bg-opacity-50 z-50 lg:hidden font-plus-jakarta-sans "
          onClick={handleClose}
        />
      )}
      <div
        className={`lg:hidden fixed top-20 right-0 w-[70%] h-screen border-t-2 border-t-gray-100 bg-white flex flex-col items-center pt-5 transform transition-transform duration-300 shadow-lg z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <img src="/logo_drc.svg" className="w-[30%]" alt="Logo DRC" width={55} height={55} />
        <div className="flex flex-col items-start px-6 gap-3 w-full">
          {nav_menu.map((menu, index) => (
            <a
              key={index}
              href={menu.href}
              className={`text-lg py-2 block w-full hover:text-[#00C4FF] transition-all duration-150 relative group ${
                activeLink === menu.href ? "text-[#00C4FF] font-medium" : "text-black"
              }`}
              onClick={handleClose}
            >
              {menu.name}
              <span
                className={`absolute left-0 bottom-0 h-[3px] bg-[#00C4FF] transition-all duration-300 ease-in-out ${
                  activeLink === menu.href ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </a>
          ))}

          <div className="mt-6 flex flex-col gap-3 w-full px-2">
            <a
              href="https://wa.me/6288226457475"
              className="w-full rounded-full py-2.5 bg-[#E2B2FF] border-2 border-[#E2A2FF] hover:bg-white hover:border-[#E2B2FF] transition-all duration-100 flex items-center justify-center gap-2"
            >
              <IoChatbubbleOutline className="h-5 w-5" />
              Kontak
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;

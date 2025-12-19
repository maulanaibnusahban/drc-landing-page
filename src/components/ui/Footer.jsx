import React from "react";
import { FaInstagram, FaYoutube, FaGithub, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { footer_data } from "../../lib";

function Footer() {
  const { address, contact, socials } = footer_data;

  // Helper to render social icons
  const renderSocialIcon = (name) => {
    switch (name.toLowerCase()) {
      case "instagram":
        return <FaInstagram className="w-6 h-6" />;
      case "youtube":
        return <FaYoutube className="w-6 h-6" />;
      case "github":
        return <FaGithub className="w-6 h-6" />;
      default:
        return null;
    }
  };

  return (
    <footer className="w-full bg-white text-gray-900 font-plus-jakarta-sans pt-16 pb-8 relative border-t border-gray-100">
      <div className="w-full max-w-480 mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-10">
          <div className="space-y-6">
            <div className="w-32">
              <img
                src="/logo_drc.svg"
                alt="DNCC Logo"
                className="h-12 object-contain"
                onError={(e) => (e.target.style.display = "none")}
              />
            </div>
            <div className="space-y-2 text-gray-600 text-sm leading-relaxed">
              {address.map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold font-poppins mb-4 text-gray-900">Our Social Media</h3>
            <div className="flex gap-4">
              {socials.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                  aria-label={social.name}
                >
                  {renderSocialIcon(social.name)}
                </a>
              ))}
            </div>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-bold font-poppins mb-6 text-gray-900">Get In Touch</h3>
              <div className="space-y-4 text-gray-600">
                <div className="flex items-start gap-3">
                  <FaWhatsapp className="w-5 h-5 mt-1 text-gray-600]" />
                  <div>
                    <p className="font-semibold text-gray-900">{contact.phone}</p>
                    <p className="text-sm">{contact.contact_person}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaEnvelope className="w-5 h-5 mt-1 text-gray-600]" />
                  <div>
                    <p className="font-semibold text-gray-900">{contact.email}</p>
                    <p className="text-sm">Kirim pesan kapanpun!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-40 md:h-50 rounded-lg overflow-hidden shadow-lg border border-gray-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1954.863578756147!2d110.40780086426356!3d-6.981424231765562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708b4ea9efeffd%3A0x4b9fea91170c31f1!2sFakultas%20Teknik%20Udinus!5e0!3m2!1sid!2sid!4v1766140748489!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps DNCC"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="w-full h-px bg-gray-200 mb-8"></div>

      <div className="text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} DRC. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

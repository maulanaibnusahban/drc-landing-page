import React from "react";
import { division_list } from "../../lib";
import { FaCogs, FaBrain, FaMicrochip } from "react-icons/fa";

const iconMap = {
  engineering: <FaCogs className="w-8 h-8 text-white" />,
  intelligence: <FaBrain className="w-8 h-8 text-white" />,
  system: <FaMicrochip className="w-8 h-8 text-white" />,
};

function Division() {
  return (
    <section className="w-full max-w-7xl 2xl:max-w-350 mx-auto pt-10 pb-20 px-4 sm:px-10 md:px-16 scroll-mt-20" id="division">
      {/* Header */}
      <div className="text-center mb-14 space-y-4">
        <h2 className="text-3xl md:text-5xl font-bold font-poppins text-gray-900">
          Divisi <span className="text-[#00C4FF]">Kami</span>
        </h2>
        <p className="text-gray-600 lg:text-lg font-plus-jakarta-sans max-w-2xl mx-auto">
          Kami membagi fokus riset ke dalam tiga divisi utama untuk mencakup seluruh aspek teknologi robotika modern.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {division_list.map((item, index) => (
          <div
            key={index}
            className="group relative bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300  hover:-translate-y-2 overflow-hidden border-2"
            style={{ borderColor: item.border }}
          >
            {/* Background Gradient Circle Effect */}
            <div
              className={`absolute -right-10 -top-10 w-40 h-40 bg-linear-to-br ${item.color} rounded-full opacity-10 group-hover:scale-130 transition-transform duration-500`}
            ></div>

            {/* Icon Box */}
            <div
              className={`w-16 h-16 rounded-lg bg-linear-to-br ${item.color} flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300 relative z-10`}
            >
              {iconMap[item.icon]}
            </div>

            {/* Text Content */}
            <div className="relative z-10 font-plus-jakarta-sans">
              <h3 className="text-xl font-bold text-gray-900 font-poppins mb-3 group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>

            <div
              className={`absolute bottom-0 left-0 w-0 h-1.5 bg-linear-to-r ${item.color} group-hover:w-full transition-all duration-500`}
            ></div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Division;

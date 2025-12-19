import React from "react";

function PointHero({ background, text, border, bg_text, position }) {
  return (
    <div
      className={`font-plus-jakarta-sans font-bold text-base py-1.5 px-7 border rounded-full absolute ${position} hidden 2xl:block`}
      style={{
        backgroundColor: background,
        borderColor: border,
        color: bg_text,
      }}
    >
      {text}
    </div>
  );
}

export { PointHero };

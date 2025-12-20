import { motion } from "motion/react";

function PointHero({ background, text, border, bg_text, position, isLoading, index }) {
  const isLeft = position.includes("left");
  const initialX = isLeft ? -100 : 100;

  return (
    <motion.div
      initial={{ x: initialX, opacity: 0 }}
      animate={!isLoading ? { x: 0, opacity: 1 } : { x: initialX, opacity: 0 }}
      transition={{
        duration: 0.8,
        delay: 1.7 + index * 0.1,
        type: "spring",
        stiffness: 50,
      }}
      className={`font-plus-jakarta-sans font-bold text-base py-1.5 px-7 border rounded-full absolute ${position} hidden 2xl:block`}
      style={{
        backgroundColor: background,
        borderColor: border,
        color: bg_text,
      }}
    >
      {text}
    </motion.div>
  );
}

export { PointHero };

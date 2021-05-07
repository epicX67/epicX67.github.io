import React from "react";
import { motion } from "framer-motion";

export default function Splash({ width }) {
  const widthS = width - width * 2;
  return (
    <motion.div
      className="splash"
      animate={{
        opacity: 0,
      }}
      transition={{
        duration: 1,
        delay: 1,
      }}
    >
      <motion.div
        key="1"
        initial={{ x: widthS }}
        animate={{ x: [widthS, 0, width] }}
        transition={{
          type: "tween",
          duration: 1.5,
          delay: 0.5,
        }}
      ></motion.div>
      <motion.div
        key="2"
        initial={{ x: widthS }}
        animate={{ x: [widthS, 0, width] }}
        transition={{
          type: "tween",
          duration: 1.5,
        }}
      ></motion.div>
    </motion.div>
  );
}

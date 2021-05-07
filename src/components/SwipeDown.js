import React from "react";
import "../styles/SwipeDown.scss";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

export default function SwipeDown({ deviceType }) {
  return (
    <Link
      className={`swipeDown ${
        deviceType === "mobile" ? "swipe-down-mobile" : ""
      }`}
      delay={0}
      to="section2"
      offset={deviceType !== "mobile" ? -200 : 0}
      smooth={true}
      duration={200}
    >
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{ opacity: 1 }}
        exit={{
          opacity: 0,
        }}
      >
        <button>
          <motion.div
            initial={{
              y: 0,
              opacity: 1,
            }}
            animate={{
              y: [25, 25, 0],
              opacity: [1, 1, 0],
            }}
            transition={{
              duration: 1,
              yoyo: Infinity,
            }}
          ></motion.div>
        </button>
      </motion.div>
    </Link>
  );
}

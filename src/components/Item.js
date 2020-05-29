import React, { useState } from "react";
import { config } from "../util";
import { motion } from "framer-motion";

export default function Item({ item, checkAndUpdatePoints, fallingTime }) {
  const { width, height } = config.itemSize;
  const startX = Math.floor(Math.random() * Math.floor(window.innerWidth));
  const [currentX, setCurrentX] = useState(startX);

  function onUpdate(latest) {
    if (latest.y >= window.innerHeight) {
      checkAndUpdatePoints(currentX, item.bucket);
    }
  }

  return (
    <motion.div
      onDragEnd={(event, info) => {
        setCurrentX(info.point.x);
      }}
      style={{
        width: width + "px",
        height: height + "px",
        originX: 0.5,
        originY: 0.5
      }}
      onUpdate={onUpdate}
      drag="x"
      dragMomentum={false}
      dragConstraints={{ left: 0, right: window.innerWidth - 25 }}
      initial={{ x: startX, y: 0 }}
      animate={{ y: "100vh" }}
      className={"item " + item.slug}
      transition={{ duration: fallingTime, ease: "linear" }}
    ></motion.div>
  );
}

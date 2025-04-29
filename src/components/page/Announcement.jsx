import React from "react";
import { motion } from "motion/react";

const Announcement = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 10,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.3,
        delay: 0.6,
      }}
    >
      <div className="my-4 bg-gradient-to-r from-[#ff80b5] to-[#9089fc] p-[1px] rounded-full max-w-sm mx-auto shadow-md">
        <div className="bg-white px-3 py-2 text-zinc-500 flex justify-center items-center rounded-full">
          <p className="text-sm font-medium">
            🎉 Announcing the launch of <strong>Smart Gmail Organizer</strong>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Announcement;

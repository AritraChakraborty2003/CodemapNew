"use client";
import { motion } from "framer-motion";

const Page = () => {
  return (
    <>
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        Slide from top!
      </motion.div>
      <div className="h-[80vh] border-1">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          Slide from top!
        </motion.div>
      </div>
    </>
  );
};

export default Page;

"use client";
import { useState } from "react";
import { motion } from "framer-motion";

interface FaqProps {
  items: FaqItem[];
}

interface FaqItem {
  title: string;
  content: string;
}

const Faq = ({ items }: FaqProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleBox = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          onClick={() => toggleBox(index)}
          className="w-[95%] border border-gray-300  bg-gray-100 rounded-md "
        >
          {/* Clickable Title */}
          <div className="w-[100%] flex justify-center items-center">
            <div className="w-[95%] p-3 cursor-pointer text-md  bg-gray-100">
              {item.title}
            </div>

            <div className="iconHolder  w-[10%]">
              {activeIndex === index ? (
                <a>
                  <i className="ri-arrow-down-line"></i>
                </a>
              ) : (
                <a>
                  <i className="ri-arrow-right-line"></i>
                </a>
              )}
            </div>
          </div>

          {/* Optimized Animation */}

          {activeIndex === index && (
            <motion.div
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{ scaleY: 1, opacity: 1 }}
              exit={{ scaleY: 0, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="p-3 origin-top bg-white"
            >
              <p>{item.content}</p>
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq;

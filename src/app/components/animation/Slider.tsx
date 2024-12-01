import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface Slider {
  icon: string;
  title: string;
}

interface SliderProps {
  slider: Slider[];
}

const Slider: React.FC<SliderProps> = ({ slider }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slider.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slider.length]);

  const slideVariants = {
    initial: { opacity: 0, x: 100 },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.5,
        ease: "easeInOut"
      }
    },
    exit: { 
      opacity: 0, 
      x: -100,
      transition: { 
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="overflow-hidden pt-8 relative w-[330px] hidden lg:block">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          variants={slideVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="flex items-center space-x-4 bg-white bg-opacity-20 rounded-lg p-4 shadow-lg text-white"
        >
          <div className="w-12 h-12 flex justify-center items-center bg-white bg-opacity-40 rounded-md">
            <Image
              src={slider[currentIndex]?.icon}
              alt={`${slider[currentIndex]?.title} Icon`}
              width={24}
              height={24}
              className="w-6 h-6"
            />
          </div>
          <p className="font-medium text-lg">{slider[currentIndex]?.title}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Slider;
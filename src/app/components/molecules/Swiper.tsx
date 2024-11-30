import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import Card from "./Card";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

interface Worker {
  name: string;
  role: string;
  img: string;
  experience: string;
  countryFlag: string;
  tasks: string[];
}

interface TooltipProps {
  workers: Worker[];
}

const Tooltip: React.FC<TooltipProps> = ({ workers }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [spaceBetween, setSpaceBetween] = useState(-60);

  useEffect(() => {
    const updateSpaceBetween = () => {
      const width = window.innerWidth;
      setSpaceBetween(width < 768 ? -100 : -60);
    };

    updateSpaceBetween(); 
    window.addEventListener("resize", updateSpaceBetween);

    return () => {
      window.removeEventListener("resize", updateSpaceBetween);
    };
  }, []);

  const fadeInVariant = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const tooltipVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  };

  return (
    <div className="w-full relative flex flex-col items-center">
      <motion.div
        className="relative transform bottom-[-20px] bg-white text-[#00C696] font-semibold px-6 py-3 rounded-xl shadow-md flex items-center justify-center z-20"
        key={activeIndex}
        variants={tooltipVariant}
        initial="hidden"
        animate="visible"
      >
        <Image
          src="/assets/coin.svg"
          alt="Icon"
          width={24}
          height={24}
          className="w-6 h-6 mr-2"
        />
        월 100만원
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full border-t-[8px] border-t-white border-x-[8px] border-x-transparent border-b-0" />
      </motion.div>
      <motion.div variants={fadeInVariant}>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 3,
            slideShadows: true,
          }}
          spaceBetween={spaceBetween}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          loop={true}
          pagination={true}
          modules={[EffectCoverflow, Navigation]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          className="px-[80px]"
          style={{
            width: "100%",
            paddingTop: "50px",
            paddingBottom: "50px",
            paddingLeft: "100px",
            paddingRight: "100px",
          }}
        >
          {workers.map((card, index) => (
            <SwiperSlide
              key={index}
              style={{
                width: "auto",
                height: "auto",
              }}
            >
              <Card {...card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      <motion.div
        className="swiper-button-next relative top-1/2 z-10 cursor-pointer"
        variants={fadeInVariant}
        initial="hidden"
        animate="visible"
        title="Next"
      />
      <motion.div
        className="swiper-button-prev relative top-1/2 left-[-20px] z-10 cursor-pointer"
        variants={fadeInVariant}
        initial="hidden"
        animate="visible"
        title="Previous"
      />
    </div>
  );
};

export default Tooltip;

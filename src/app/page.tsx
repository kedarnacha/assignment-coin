"use client";
import { Poppins } from "@next/font/google";
import { useEffect, useState } from "react";
import Card from "./components/molecules/Card";
import FadeInTitle from "./components/animation/FadeIn";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import FadeInUpTitle from "./components/animation/FadeInUp";
import FadeInThree from "./components/animation/FadeInThree";
import { motion } from "framer-motion";
import Slider from "./components/animation/Slider";
import Footer from "./components/atoms/Footer";
import Navbar from "./components/atoms/Navbar";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Tooltip from "./components/molecules/Swiper";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const items = [
  { id: 1, label: "한국어 능력" },
  { id: 2, label: "업무 수행 능력" },
  { id: 3, label: "검업 여부" },
  { id: 4, label: "평판 조회" },
];

const fetchWorkers = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/workers`);
  if (!res.ok) {
    throw new Error(`Failed to fetch workers: ${res.statusText}`);
  }
  return res.json();
};

const fetchFeatures = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/features`);
  if (!res.ok) {
    throw new Error(`Failed to fetch workers: ${res.statusText}`);
  }
  return res.json();
};

const fetchSlider = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/slides`);
  if (!res.ok) {
    throw new Error(`Failed to fetch workers: ${res.statusText}`);
  }
  return res.json();
};

const Page = async () => {
  const workersRes = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/workers`);
  const workers = await workersRes.json();

  const featuresRes = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/features`);
  const features = await featuresRes.json();

  const sliderRes = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/slides`);
  const slider = await sliderRes.json();

  return (
    <div className={`${poppins.variable} font-sans`}>
      <Navbar />
      <div className="font-sans min-h-screen px-4 justify-center items-center grid grid-cols-1 md:grid-cols-4">
        <div className="w-full px-8 col-span-1 md:col-span-2 space-y-3 flex flex-col justify-center mr-8">
          <FadeInTitle />
          <FadeInUpTitle
            text1="최고의 실력을 가진"
            text2="외국인 인재를 찾고 계신가요?"
            className="text-3xl md:text-5xl font-semibold"
          />
          <FadeInUpTitle
            text1="법률 및 인사관리 부담없이"
            text2="1주일 이내에 원격으로 채용해보세요."
            className="text-sm md:text-xl"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="hidden md:block space-y-2 py-2"
          >
            <a href="#" className="text-white text-lg underline">
              개발자가 필요하신가요?
            </a>
          </motion.div>
          <FadeInThree features={features} />
          <Slider slider={slider} />
        </div>

        <div className="w-full md:col-span-2">
          <Tooltip workers={workers} />
        </div>
        <div className="block md:hidden p-4 rounded-lg text-white">
          <div className="grid grid-cols-2 gap-4">
            {items.map((item) => (
              <label
                key={item.id}
                className="flex items-center space-x-2 cursor-pointer"
              >
                <Image
                    src="/assets/check.svg"
                    alt="Icon"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                <span>{item.label}</span>
              </label>
            ))}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="block md:hidden space-y-2 pb-8 px-8 relative"
        >
          <a
            href="#"
            className="text-yellow-300 md:text-white text-sm md:text-lg underline"
          >
            개발자가 필요하신가요?
          </a>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;

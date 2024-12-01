import { motion } from "framer-motion";

const FadeInTitle: React.FC = () => (
  <div className="pt-5 lg:pt-0 pb-3">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.5 }}
    >
      <div className="relative text-xs md:text-base bg-[#8BC4FF] lg:bg-white text-white lg:text-[#40E2E8] font-semibold px-4 py-2 rounded-xl shadow-md inline-block max-w-fit">
        풀타임, 파트타임
        <div className="absolute bottom-0 left-5 transform translate-y-full border-t-[8px] border-t-[#8BC4FF] lg:border-t-white border-x-[8px] border-x-transparent border-b-0" />
      </div>
    </motion.div>
  </div>
);

export default FadeInTitle;

import { motion } from "framer-motion";

interface FadeInUpTitleProps {
  text1: string;
  text2: string;
  className?: string; 
}

const FadeInUpTitle: React.FC<FadeInUpTitleProps> = ({
  text1,
  text2,
  className = "text-xs font-semibold", 
}) => (
  <div>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={className} 
    >
      {text1}
    </motion.p>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={className}
    >
      {text2}
    </motion.p>
  </div>
);

export default FadeInUpTitle;

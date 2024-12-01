import { motion } from "framer-motion";

interface Feature {
  title: string;
  description: string;
}

interface FadeInThreeProps {
  features: Feature[];
}

const FadeInThree: React.FC<FadeInThreeProps> = ({ features }) => {
  return (
    <div className="hidden lg:grid lg:grid-cols-3">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 , ease: "easeOut"}}
          className="mt-4 text-white space-y-2"
        >
            <div className="w-2/3 h-px bg-white mb-2"/>
          <p className="font-bold">{feature.title}</p>
          <p>{feature.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default FadeInThree;

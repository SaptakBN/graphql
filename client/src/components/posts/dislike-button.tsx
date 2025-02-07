import { ThumbsDown } from "lucide-react";
import { motion, useAnimation } from "motion/react";

export const DislikeBtn = ({ count }: { count: number }) => {
  const controls = useAnimation();

  const handleLike = async () => {
    await controls.start({ scale: [1, 1.4, 1], transition: { duration: 0.3, ease: "easeOut" } });
  };
  return (
    <button className="flex items-center text-gray-600 hover:text-red-700  bg-red-100 rounded-e-full py-2 px-4 cursor-pointer" onClick={handleLike}>
      <span>{count}</span>
      <motion.div animate={controls}>
        <ThumbsDown className="ml-2" size="1.2em" />
      </motion.div>
    </button>
  );
};

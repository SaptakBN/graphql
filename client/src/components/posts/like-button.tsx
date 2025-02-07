import { ThumbsUp } from "lucide-react";
import { motion, useAnimation } from "motion/react";

export const LikeBtn = ({ count }: { count: number }) => {
  const controls = useAnimation();

  const handleLike = async () => {
    await controls.start({ scale: [1, 1.4, 1], transition: { duration: 0.3, ease: "easeOut" } });
  };
  return (
    <button
      className="flex items-center text-gray-600 hover:text-green-700  bg-green-100 rounded-s-full py-2 px-4 cursor-pointer"
      onClick={handleLike}
    >
      <motion.div animate={controls}>
        <ThumbsUp className="mr-2" size="1.2em" />
      </motion.div>
      <span>{count}</span>
    </button>
  );
};

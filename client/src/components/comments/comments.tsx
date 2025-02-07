import { motion } from "motion/react";

export const Comments = ({ open }: { open: boolean }) => {
  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: open ? "auto" : 0, opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="mt-4 overflow-hidden"
    >
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-gray-100 p-2 rounded"
      >
        <div className="flex items-center text-gray-600 text-sm mb-2">
          <img alt="Avatar of Commenter1" className="rounded-full mr-2" src="https://placehold.co/40x40" />
          <span>
            Comment by: <strong>Commenter1</strong>
          </span>
          <span className="ml-4">2023-10-01 12:30 PM</span>
        </div>
        <p className="text-gray-700 mb-2">Comment 1: This is a comment.</p>
        <div className="flex items-center text-gray-600 text-sm mb-2">
          <img alt="Avatar of Commenter2" className="rounded-full mr-2" src="https://placehold.co/40x40" />
          <span>
            Comment by: <strong>Commenter2</strong>
          </span>
          <span className="ml-4">2023-10-01 01:00 PM</span>
        </div>
        <p className="text-gray-700">Comment 2: This is another comment.</p>
      </motion.div>
    </motion.div>
  );
};

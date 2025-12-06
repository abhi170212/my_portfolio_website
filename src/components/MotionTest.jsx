import React from 'react';
import { motion } from 'framer-motion';

const MotionTest = () => {
  return (
    <div className="p-6">
      <motion.div
        className="w-24 h-24 bg-blue-500 rounded-lg"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      />
      <p className="mt-4">Framer Motion is working!</p>
    </div>
  );
};

export default MotionTest;
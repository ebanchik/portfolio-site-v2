import { motion } from 'framer-motion';

export const MyName = () => {

  const reveal = {
    hidden: { scaleX: 0, transformOrigin: 'left' },
    visible: { 
      scaleX: 1, 
      transition: { duration: 2, ease: 'easeInOut' }
    },
  };

  return (
    <div style={{ width: '435.5px', height: '337.16px', overflow: 'hidden' }}>
      <motion.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 435.5 337.16"
        initial="hidden"
        animate="visible"
        style={{ originX: 0 }} // Ensure scaling happens left to right
      >
        <defs>
          <motion.clipPath id="clip" variants={reveal}>
            <rect width="435.5" height="337.16" />
          </motion.clipPath>
        </defs>
        <g clipPath="url(#clip)">
          <path fill="black" d="m234.33,0h192.5v50.6h-133.61v61.27h125.7v50.6h-125.7v69.17h141.91l-5.93,50.6h-194.88V0Z" />
        </g>
      </motion.svg>
    </div>
  );
};

export default MyName;

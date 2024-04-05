import { motion } from 'framer-motion';

export const MyName = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 179.23 251.92" style={{ width: '200px', height: 'auto' }}>
        <motion.path
          fill="none"
          stroke="black"
          strokeWidth="10"
          d="m0,0h171.82v45.16H52.57v54.69h112.2v45.16H52.57v61.74h126.66l-5.29,45.16H0V0Z"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2 }}
        />
      </svg>
    </div>
  );
};

export default MyName;

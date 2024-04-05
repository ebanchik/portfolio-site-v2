import { motion } from 'framer-motion';

export const MyName = () => {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 2 }
    }
  };

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 197.48 335.98" style={{ width: '200px', height: 'auto' }}>
        <motion.polyline
          className="cls-1"
          points="194.55 31.5 39 31.5 39 132.85 39 241.86 197.48 241.86"
          style={{ fill: 'none', stroke: '#000', strokeWidth: '63' }}
          variants={draw}
          initial="hidden"
          animate="visible"
        />
        <motion.line
          className="cls-1"
          x1="186"
          y1="129.8"
          x2="39"
          y2="129.8"
          style={{ fill: 'none', stroke: '#000', strokeWidth: '63' }}
          variants={draw}
          initial="hidden"
          animate="visible"
        />
      </svg>
    </div>
  );
};

export default MyName;

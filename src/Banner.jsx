import { motion } from 'framer-motion';

export const Banner = () => {

  const fadeInVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 0.5, duration: 1.5 } // Customize duration as needed
    }
  };  

  // Animation variants for "EXCITING"
  const excitingColorVariant = {
    initial: { color: "#ffffff" },
    animate: {
      color: "#FF5733", // Customize this color
      transition: { delay: 1, duration: 1 },
    },
  };

  // Animation variants for "ENGAGING"
  const engagingColorVariant = {
    initial: { color: "#ffffff" },
    animate: {
      color: "#00FF00", // Customize this color
      transition: { delay: 1.5, duration: 1 }, // Adjust timing as desired
    },
  };

  // Animation variants for "PERFORMATIVE"
  const performativeColorVariant = {
    initial: { color: "#ffffff" },
    animate: {
      color: "#0000FF", // Customize this color
      transition: { delay: 2, duration: 1 }, // Adjust timing as desired
    },
  };

  return (
    <motion.div className="Banner" variants={fadeInVariant}
    initial="hidden"
    animate="visible">
      <h1 className="tagline">FRONT END DEVELOPER WITH A FOCUS <br/>
      ON CREATING <motion.span className="highlight1" variants={excitingColorVariant} initial="initial" animate="animate">EXCITING</motion.span>, <motion.span className="highlight2" variants={engagingColorVariant} initial="initial" animate="animate">ENGAGING</motion.span>, <br/>
      AND <motion.span className="highlight3" variants={performativeColorVariant} initial="initial" animate="animate">PERFORMATIVE</motion.span> WEBSITES</h1>
      <div className="initial-container">
        <h1 className="initial">Eli B.</h1>
      </div>
      {/* SVG and other content remains unchanged */}
    </motion.div>
  );
};

export default Banner;

import "./hero.scss";
import { animate, motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      stagerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "miror",
      duration: 20,
    },
  },
};

export default function Hero() {
  return (
    <div className="hero">
      <motion.div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>RIEFQI ALVIANSYAH</motion.h2>
          <motion.h1 variants={textVariants}>
            Full Stack Web Depelover
          </motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <motion.button
              variants={textVariants}
              whileHover={{
                backgroundColor: "orange",
                scale: 1.1,
                color: "black",
                fontWeight: "bold",
              }}
            >
              See the Latest Work
            </motion.button>
            <motion.button
              variants={textVariants}
              whileHover={{
                backgroundColor: "orange",
                scale: 1.1,
                color: "black",
                fontWeight: "bold",
              }}
            >
              Contact Me
            </motion.button>
          </motion.div>
          <motion.img
            src="/scroll.png"
            alt=""
            variants={textVariants}
            animate="scrollButton"
          />
        </motion.div>
      </motion.div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        I am a Full Stack Web Developer
      </motion.div>
      <div className="imageContainer">
        <img src="/qii-lain.png" alt="hero" />
      </div>
    </div>
  );
}

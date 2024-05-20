import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      stagerChildren: 0.1,
    },
  },
};

export default function Services() {
  const ref = useRef();

  const isInView =
    (ref,
    {
      margin: "-100px",
    });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      //   animate="animate"
      //   whileInView="animate"
      ref={ref}
      animate={isInView && "animate"}
    >
      <motion.div className="textContainer">
        <p>
          I focus on helping yout brand grow
          <br /> and move forwad
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer">
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "Orange" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "Orange" }}>For Your</motion.b>{" "}
            Business.
          </h1>
          <motion.button
            whileHover={{ scale: 1.1, color: "white", fontWeight: "bold" }}
          >
            WHAT I DO
          </motion.button>
        </div>
      </motion.div>
      <motion.div className="listContainer">
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            fugit similique nam nemo voluptas labore suscipit eum ex. Fugit,
            neque voluptas quo adipisci possimus voluptatibus.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            fugit similique nam nemo voluptas labore suscipit eum ex. Fugit,
            neque voluptas quo adipisci possimus voluptatibus.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            fugit similique nam nemo voluptas labore suscipit eum ex. Fugit,
            neque voluptas quo adipisci possimus voluptatibus.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            fugit similique nam nemo voluptas labore suscipit eum ex. Fugit,
            neque voluptas quo adipisci possimus voluptatibus.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

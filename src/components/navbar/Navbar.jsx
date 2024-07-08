import React from 'react'
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar ">
      {/*Sidebar*/}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Davi Dev
        </motion.span>
        <div className="social">
          <a href="https://m.facebook.com/marketplace/inbox?locale=es_LA" target="_blank" rel="noopener noreferrer">
            <img src="/facebook.png" alt=""/></a>
          <a href="https://www.instagram.com/reel/C4toB_SAUEs/?igsh=Y3NxN3hiNTAzZjM4" target="_blank" rel="noopener noreferrer">
            <img src="/instagram.png" alt=""/></a>
          <a href="https://www.linkedin.com/in/david-yepes-toscano-a3965782" target="_blank" rel="noopener noreferrer">
            <img src="/linkedln.png" alt=""/></a>
          <a href="https://dribbble.com/david0407?onboarding=true&designer=true">
            <img src="/dribbble.png" alt=""/></a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

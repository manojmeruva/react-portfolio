
import React from "react";
import "./app.scss";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Test from "./components/navbar/Test";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import About from "./components/about/About";


const App = () => {
  return (
    <div>
      <Cursor />
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
       <section id="Portfolio">
        <Parallax type="portfolio" />
      </section> 
      <Portfolio /> 
       <section id="Contact">
        <Contact />
      </section> 
      <section id="About">
      <About/>
      </section>
      {/*       <Test />
      <Test /> */}
    </div>
  );
};

export default App;

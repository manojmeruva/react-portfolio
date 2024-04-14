import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Test from "./Test";

const App = () => {
  return <div>
    <section id="Homepage">
      
      <Navbar/>
    </section>
    <section id="Services">Parallax</section>
    <section>Services</section>
    <section id="Projects">Parallax</section>
    <section>Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section id="About%20me">Parallax</section>
    <section>About me</section>
    <section id="Contact%20me">Contact</section>
    {/* <Test/> */}
  </div>;
};

export default App;

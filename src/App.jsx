import Test from "./Test"
import "./app.scss"
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/NavBar";

const App = () => {
  return <div>
    <section>
      <Navbar />
      <Hero />
    </section>
    <section>Parallax</section>
    <section>Service</section>
    <section>Parallax</section>
    <section>Portofolio1</section>
    <section>Portofolio2</section>
    <section>Portofolio3</section>
    <section>Contac</section>
    {/*<Test/>
    <Test/>*/}
  </div>;

};

export default App;

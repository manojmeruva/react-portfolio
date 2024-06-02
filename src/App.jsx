import Test from "./Test";
import Navbar from "./components/navbar/Navbar";
import "./styles/app.scss";

const App = () => {
  return <div>
    <section>
      <Navbar />
    </section>
    <section>Parallax</section>
    <section>Services</section>
    <section>Portfolio</section>
    {/* <Test />
    <Test />
    <Test /> */}
  </div>;
};

export default App;

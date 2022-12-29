import "./App.css";
import About from "./components/About";
import Developers from "./components/Developers";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Subscribe from "./components/Subscribe";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <About />
      <Developers />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;

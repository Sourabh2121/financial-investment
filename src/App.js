import logo from "./logo.svg";
import "./App.css";
import Header from "./pages/Header";
import Hero from "./pages/Hero";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import About from "./pages/About";
import Services from "./pages/Services";
import Expert from "./pages/Expert";
import Work from "./pages/Work";
import 'boxicons/css/boxicons.min.css';
import Footer from "./pages/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About/>
      {/* <Services/> */}
      <Work/>
      <Expert/>
      <Footer/>
    </div>
  );
}

export default App;

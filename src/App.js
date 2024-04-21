import "./App.css"
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navbar from './Components/Navbar/Navbar';
import Testimonials from "./Components/Testimonials/Testimonials";
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

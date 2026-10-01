import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import CarMarquee from "./components/CarMarquee";
import CarShowcase from "./components/CarShowcase";
import ValuesSection from "./components/Valuessection";
import SparePartsCta from "./components/Sparepartscta";
import CarStats from "./components/Carstats";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <Services />
        <AboutUs />
         <CarMarquee />
        <CarShowcase />
        <ValuesSection />
        <SparePartsCta />
        <CarStats />
        <Footer />
      </main>
    </>
  )
}

export default App;
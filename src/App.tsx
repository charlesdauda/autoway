import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import CarMarquee from "./components/CarMarquee";

const App = () => {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <Services />
        <AboutUs />
        <CarMarquee />
      </main>
    </>
  )
}

export default App;
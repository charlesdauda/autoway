import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import BrandShowcase from "./components/BrandShowcase";
import AboutUs from "./components/AboutUs";

const App = () => {
  return (
    <>
      <NavBar />
      <main className="pt-16">
        <Hero />
        <BrandShowcase />
        <AboutUs />
      </main>
    </>
  )
}

export default App;
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";

const App = () => {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <Services />
        <AboutUs />
      </main>
    </>
  )
}

export default App;
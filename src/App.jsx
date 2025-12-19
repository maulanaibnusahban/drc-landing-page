import { useState, useEffect } from "react";
import About from "./components/landing_page/About";
import Activities from "./components/landing_page/Activities";
import Division from "./components/landing_page/Division";
import Home from "./components/landing_page/Home";
import Footer from "./components/ui/Footer";
import Navbar from "./components/ui/Navbar";
import Preloader from "./components/ui/Preloader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center w-full relative">
      <Preloader isLoading={isLoading} />
      <Navbar />
      <Home />
      <About />
      <Division />
      <Activities />
      <Footer />
    </main>
  );
}

export default App;

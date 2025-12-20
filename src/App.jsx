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
    const minTimer = new Promise((resolve) => setTimeout(resolve, 1200));

    const windowLoad = new Promise((resolve) => {
      if (document.readyState === "complete") {
        resolve();
      } else {
        window.addEventListener("load", resolve, { once: true });
      }
    });

    Promise.all([minTimer, windowLoad]).then(() => {
      setIsLoading(false);
    });
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center w-full relative">
      <Preloader isLoading={isLoading} />
      <Navbar />
      <Home isLoading={isLoading} />
      <About />
      <Division />
      <Activities />
      <Footer />
    </main>
  );
}

export default App;

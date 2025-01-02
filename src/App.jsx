import Navbar from "./components/Navbar";
import Games from "./components/Games";
import Footer from "./components/Footer";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`app ${isLoading ? "loading" : ""}`}>
      <Navbar />
      <Games />
      <Footer className="footer"/>
    </div>
  );
}

export default App;

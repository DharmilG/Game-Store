import Navbar from "./components/Navbar";
import Games from "./components/Games";
import Footer from "./components/Footer";
import "./App.css";
function App() {
  return (
    <>
      <div className="app">
        <Navbar />
        <Games />
        <Footer />
      </div>
    </>
  );
}

export default App;

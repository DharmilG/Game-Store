import './App.css'
import Nav from './components/Navbar'
import Games from './components/Games'
import Footer from './components/Footer.jsx'
function App() {

  return (
    <>
      <div className="app">
        <Nav />
        <Games />
        <Footer/>
      </div>
    </>
  )
}

export default App

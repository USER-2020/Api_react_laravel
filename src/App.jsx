import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import './App.css'
import Inicio from './inicio'
import Carousel from './carousel'


function App() {
 

  return (
    
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
              <Link to = "/" className="nav-link">Inicio</Link>
              <Link to = "/registrovideojuegos" className="nav-link">Tabla</Link>
              

            
          </ul>
        </div>
      </div>
    </nav>
    <Routes>
      <Route path="/" element={<Carousel/>}></Route>
    </Routes>
    <Routes>
      <Route path="/registrovideojuegos" element={<Inicio/>}></Route>
    </Routes>
    </Router>
    
  )
}

export default App

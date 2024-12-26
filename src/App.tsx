import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import AppRoutes from './routes/AppRoutes'
import './App.css'

function App() {

  return (
    <Router> 
      <div className="body-container">
          <Navbar />
          <AppRoutes />
      </div>     
    </Router>
    )
}

export default App

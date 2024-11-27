import { useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Home, About, Projects, Contact } from './pages';
import Navbar from './components/Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='bg-slate-300/20'>
      {/* bg-slate-800 */}
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </main>
  )
}

export default App

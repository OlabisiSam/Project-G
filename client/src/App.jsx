import { useState } from 'react'
import './App.css'
import Homepage from './pages/Homepage';
import Navbar from './components/Navbar';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <Homepage/>
   

    </div>
   
  )
}

export default App

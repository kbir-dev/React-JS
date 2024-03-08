import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar.js'
import Footer from './components/Footer.js'

function App() {
  const[value,setValue] = useState(0);
  return (
    <div className="App">
      <Navbar/>
      <div className='container'>
        {value}
      </div>
      <button onClick={()=>{setValue(value+1)}}>Lmao</button>
      <Footer/>
    </div>
  );
}

export default App;

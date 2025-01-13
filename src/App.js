import { useState } from 'react';

import Navbar from './components/navbar';
import Home from './components/home';
import Profile from './components/profile';
import Portfolio from './components/portfolio';
import Contact from './components/contact';

import './styles/App.css';

function App() {
  const [page,setPage] = useState(0)
  const handleNavClick = (index) => {
    console.log('clicked', index)
    setPage(index)
  }
  return (
    <div className="App">
      <header className="App-header">
        <div className='container'>
        <Navbar handleClick={handleNavClick}/>
        {
          page===0?<Home/>:
          page===1?<Profile/>:
          page===2?<Portfolio/>:
          page===3?<Contact/>:<div>not found</div>
        }
       </div>
      </header>
    </div>
  );
}

export default App;

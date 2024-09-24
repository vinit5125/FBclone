import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter as Router ,Routes, Link} from 'react-router-dom';
import './index.css';
import App from './App';
import Video from './video/Video';
import Friends from './Friends/Friends';
import Mess from './Message/Mess';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <div> <div className='s' >
       <img className='s1' src='https://img.icons8.com/?size=100&id=uLWV5A9vXIPu&format=png&color=000000' alt='tree' />
       <input className="i1"  type="search" placeholder="search Facebook" />
       <button className='s2' ><li><Link to="/" ><img  src='https://img.icons8.com/?size=100&id=2797&format=png&color=000000' alt='home' /></Link></li></button>
      <button className='s3' > <li><Link to="/Mess" ><img  src='https://img.icons8.com/?size=100&id=37966&format=png&color=000000' alt='name'  /></Link></li></button> 
      <button className='s4' ><li><Link to="/Video" ><img  src='https://img.icons8.com/?size=100&id=111381&format=png&color=000000' alt='name'  /></Link></li></button> 
      <button> <li><Link to="/Friends" ><img className='s5' src='https://img.icons8.com/?size=100&id=34095&format=png&color=000000' alt='name'  /></Link></li> </button>
       <img className='s6'  src='https://img.icons8.com/?size=100&id=7314&format=png&color=000000' alt='name'  />
       <img className='s7'  src='https://img.icons8.com/?size=100&id=78230&format=png&color=000000' alt='name' />
       <img className='s8'  src='https://img.icons8.com/?size=100&id=11668&format=png&color=000000' alt='name'  />
       

       </div>
     
      <Routes>
        <Route exact path="/" element={<App/>} />
        <Route path="/Video" element={<Video/>} />
       <Route path='/Mess' element={<Mess/>}/>
       <Route path='Friends' element={<Friends/>}/>
        
       
      </Routes>
    </div>
  </Router>
);
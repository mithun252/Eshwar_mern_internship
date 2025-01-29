import React from 'react'
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import { Projects } from './projects';
import  About  from './about';
import  Skills  from './skills';
import {Home} from './home';
import { Contact } from './contact';
import './home.css';
export const Header = () => {
  return (
    <Router>
      <Home />
    <center>
    <div className="App">

      <Routes>
          <Route path="/home" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/projects" Component={Projects} />
          <Route path="/skills" Component={Skills} />
          <Route path='/contact' Component={Contact} />
      </Routes>
      </div>
      </center>
      </Router>
  )
}


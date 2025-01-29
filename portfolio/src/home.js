import React from 'react';
import img from './img1.jpg';
// import './Home.css';
import { Link } from 'react-router-dom';

export const Home = () => {
    return (
        <div className="home-container">
                  <nav>
        <div className='h1'>
          <Link to="/home">Home</Link>
        </div>
        <div className='a1'>
          <Link to="/about">About</Link>
        </div>
        <div className='p1'>
          <Link to ="/projects">Projects</Link>
        </div>
        <div className='s1'>
          <Link to="/skills">Skills</Link>
        </div>
        <div className='c1'>
          <Link to="/contact">Contacts</Link>
        </div>
      </nav>
            <div className="profile-section">
                <img 
                    src={img} 
                    alt="Mithun" 
                    className="profile-img"
                />
                <h1 className="profile-name">Hi, I'm Mithun S</h1>
                <p className="profile-details">
                    A passionate student at <strong>Sri Eshwar College of Engineering</strong>,<br />
                    honing my skills as a <strong>Student</strong>. 
                </p>
            </div>
        </div>
    );
};

export default Home;

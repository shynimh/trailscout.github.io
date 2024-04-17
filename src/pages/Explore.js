import React from 'react';
import { Link } from 'react-router-dom';

export const Explore = () => {
  return (
    <div className="App">
      <div className="view">
    <div>
      <div className="row">
        <div className="leftcolumn">
          <h2>Explore the Trails</h2>
          <iframe src={`${process.env.PUBLIC_URL}/explore.html`} width="100%" height="700" style={{ border: 'none' }} title="ArcGIS Map"></iframe>
        </div>
        <div className="rightcolumn">
        <div className="homepgcard">
            <h3>Popular Trails</h3>
            <div>
                  <img className="fakeimg" src='./beachy.jpg' alt='beach img' />
            </div><br />
            <div>
                  <img className="fakeimg" src='./beachy.jpg' alt='beach img' />
            </div><br />
            <div>
                  <img className="fakeimg" src='./beachy.jpg' alt='beach img' />
            </div><br />
            
            <Link to="/toptrails"> <button>View All</button> </Link>
            
          </div>
          <div className="homepgcard">
            <h2>About Us</h2>
            <h6>Khushalini RAVI <br /> Shyni Meagana HETTIARACHCHI <br /> Fakhrul Afiq BIN ABD AZIZ</h6>
            <p>WebInt Project 2024 -Trail Scout Team</p>
          </div>
        </div>
      </div>

      <div className="footer">
        <h2>Contact Us</h2>
        <p>Email: contact@trailscout.com</p>
        <a href="https://www.instagram.com" target="_blank"><img className='contactusicon' src='/instagram.png' alt="Instagram Logo" /></a>        
        <a href="https://www.facebook.com/" target="_blank"><img className='contactusicon' src='/facebook.png' alt="Facebook Logo" /></a>        
      </div>
    </div>
    </div>
    </div>
  );
}


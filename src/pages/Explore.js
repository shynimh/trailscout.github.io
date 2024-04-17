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
          <p>The map should be here including the trail marks, Ex: Alltrails</p>
          <a href="https://www.alltrails.com/explore?b_tl_lat=43.66393948269254&b_tl_lng=6.9403163204355565&b_br_lat=43.50916102197496&b_br_lng=7.308083679565954" target="_blank" rel="noopener noreferrer">AllTrails REFERENCE</a>
          <iframe className='mapcls' src="https://trailrouter.com/" ></iframe>
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
      </div>
    </div>
    </div>
    </div>
  );
}


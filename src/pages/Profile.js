import React from 'react';
import { Link } from 'react-router-dom';

export const Profile = () => {
  return (    
    <div className="App">
    <div className="view">
    <div>   
      <div className="row">
        <div className="leftcolumn">
          <h2>Explore the Trails</h2>
          <div className="profile-card">
            <img src="/profpic.jpg" alt="Profile" className="profile-image" />
            <div className="profile-details">
                <h2 className="profile-name">John Doe</h2>
                <p className="profile-bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
                <div className="profile-contact">
                    <p className="profile-email">Email: john.doe@example.com</p>
                    <p className="profile-phone">Phone: +1234567890</p>
                    <br/>
                    <p className="profile-instagram">Instagram: <a href="https://www.instagram.com" target="_blank">@john_doeig</a></p>
                    <p className="profile-instagram">Facebook: <a href="https://www.facebook.com/" target="_blank">@john_doefb</a></p>
                </div>
                </div>
            </div>
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


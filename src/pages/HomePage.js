import React from "react";
import { useNavigate, Link } from "react-router-dom"; // Ensure useNavigate is imported

export const HomePage = () => {
  const navigate = useNavigate(); // Hook for programmatic navigation

  // Updated trails array with 'path' for each trail
  const trails = [
    {
      name: "Mount Everest",
      description: "Experience the breathtaking views from the top of the world.",
      imageUrl: "./beachy.jpg",
      diff: "Intermediate",
      path: "/grapheve", 
    },
    {
      name: "Yosemite National Park",
      description: "Explore the stunning beauty of the iconic Yosemite Valley.",
      imageUrl: "./mountain.jpg",
      diff: "Advanced",
      path: "/graphyoc",
    },
    {
      name: "Banff National Park",
      description: "The best lake at National Park.",
      imageUrl: "./lake.jpg",
      diff: "Advanced",
      path: "/grapheve",
    },
  ];

  // Function to handle navigation
  const handleViewDetails = (path) => {
    navigate(path);
  };

  return (
    <div className="App">
      {/* ... your existing code ... */}
      <div className="view">
        <div className="row">
          <div className="leftcolumn">
            {trails.map((trail, index) => (
              <div className="card" key={index} style={{ backgroundImage: `url(${trail.imageUrl})` }}>
                <h2>{trail.name}</h2>
                <h5>Difficulty: {trail.diff}</h5>
                <p>{trail.description}</p>
                <button onClick={() => handleViewDetails(trail.path)}>View Details</button>
              </div>
              ))}
              
              <div>
            <h1>Events Nearby</h1>
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Name</th>
                  <th>Distance</th>
                  <th>Total Ascent</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>28-04-2024</td>
                  <td><a href="https://www.cycloworld.cc/gran-fondo/france/des-biclous--des-potes/28096/CF/?utm_source=Climbfinder&utm_medium=organic&utm_campaign=events">Des Biclous & des Potes</a></td>
                  <td>49km</td>
                  <td>950m</td>
                </tr>
                <tr>
                  <td>04-07-2024</td>
                  <td><a href="https://www.cycloworld.cc/gran-fondo/france/lultraverne/29654/CF/?utm_source=Climbfinder&utm_medium=organic&utm_campaign=events">L'Ultr'Averne</a></td>
                  <td>778km</td>
                  <td>14500m</td>
                </tr>
                <tr>
                  <td>06-07-2024</td>
                  <td><a href="https://www.cycloworld.cc/gran-fondo/france/la-montee-chrono-du-col-du-beal/29689/CF/?utm_source=Climbfinder&utm_medium=organic&utm_campaign=events">La Montée Chrono du Col du Béal</a></td>
                  <td>13km</td>
                  <td>860m</td>
                </tr>
                <tr>
                  <td>06-07-2024</td>
                  <td><a href="https://www.cycloworld.cc/gran-fondo/france/les-balcons-foreziens/29825/CF/?utm_source=Climbfinder&utm_medium=organic&utm_campaign=events">Les Balcons Foréziens</a></td>
                  <td>140km</td>
                  <td>2750m</td>
                </tr>
                <tr>
                  <td>07-07-2024</td>
                  <td><a href="https://www.cycloworld.cc/gran-fondo/france/les-copains-cyfac/29723/CF/?utm_source=Climbfinder&utm_medium=organic&utm_campaign=events">Les Copains Cyfac</a></td>
                  <td>156km</td>
                  <td>3210m</td>
                </tr>
              </tbody>
            </table>
          </div>


              <div className="review">
                <h2>Customer Reviews</h2>
                <div className="homepgcard">
                  <p>"Great app for hikers! I've discovered so many amazing trails through this app."</p>
                  <p>- John Doe</p>
                </div>
                <div className="homepgcard">
                  <p >"Excellent resource for outdoor enthusiasts. Highly recommended!"</p>
                  <p>- Jane Smith</p>
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
                <h3>Follow Us</h3>
                <p>Stay updated with our latest news and updates.</p>
                <button>Follow</button>
              </div>
              <div className="homepgcard">
                <h2>About Us</h2>
                <h6>Khushalini RAVI <br /> Shyni Meagana HETTIARACHCHI <br /> Fakhrul Afiq BIN ABD AZIZ</h6>
                <p>WebInt Project 2024 -Trail Scout Team</p>
              </div>
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
  );
}
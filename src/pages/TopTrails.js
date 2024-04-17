import React from 'react';
import '../App.css';

export const TopTrails = () => {
    
    // Sample data for popular trail hikes
    const trails = [
        {
            name: "Coastal Path: Nice - Villefranche-sur-Mer",
            description: "This family hiking route offers a beautiful view of the sea. Hikers leave from the Port of Nice and walk along the quays to the Jardin Félix Rainaux where we find the coastal path to the Cap de Nice. The route then rejoins Boulevard Maurice Maeterlinck until kilometer 3.7 where hikers will head back towards the seaside. The last part of the route is on the coastal path to the port of Villefranche-sur-Mer and a little further on the Chapelle Saint-Pierre.",
            imageUrl: "/beachy.jpg",
            diff: "Moderate",
            info: "Length: 6.9 km • Est. 1h 34m",

        },
        {
            name: "Yosemite National Park",
            description: "Get to know this 9.7-km loop trail near Nice, Alpes-Maritimes. Generally considered a moderately challenging route, it takes an average of 2 h 50 min to complete. This is a very popular area for hiking and running, so you'll likely encounter other people while exploring. The trail is open year-round and is beautiful to visit anytime.",
            imageUrl: "/lake.jpg",
            diff: "Moderate",
            info: "Length: 1.9 km • Est. 34m",
        },
        {
            name: "Mount Everest - Mont Alban",
            description: "Get to know this 9.7-km loop trail near Nice, Alpes-Maritimes. Generally considered a moderately challenging route, it takes an average of 2 h 50 min to complete. This is a very popular area for hiking and running, so you'll likely encounter other people while exploring. The trail is open year-round and is beautiful to visit anytime.",
            imageUrl: "/mountain.jpg",
            diff: "Easy",
            info: "Length: 14.8 km • Est. 5hr 0m",
        },
        {
            name: "Coastal Path: Nice - Villefranche-sur-Mer",
            description: "This family hiking route offers a beautiful view of the sea. Hikers leave from the Port of Nice and walk along the quays to the Jardin Félix Rainaux where we find the coastal path to the Cap de Nice. The route then rejoins Boulevard Maurice Maeterlinck until kilometer 3.7 where hikers will head back towards the seaside. The last part of the route is on the coastal path to the port of Villefranche-sur-Mer and a little further on the Chapelle Saint-Pierre.",
            imageUrl: "/beachy.jpg",
            diff: "Moderate",
            info: "Length: 6.9 km • Est. 1h 34m",

        },
        {
            name: "Yosemite National Park",
            description: "Get to know this 9.7-km loop trail near Nice, Alpes-Maritimes. Generally considered a moderately challenging route, it takes an average of 2 h 50 min to complete. This is a very popular area for hiking and running, so you'll likely encounter other people while exploring. The trail is open year-round and is beautiful to visit anytime.",
            imageUrl: "/lake.jpg",
            diff: "Moderate",
            info: "Length: 1.9 km • Est. 34m",
        },
        {
            name: "Mount Everest - Mont Alban",
            description: "Get to know this 9.7-km loop trail near Nice, Alpes-Maritimes. Generally considered a moderately challenging route, it takes an average of 2 h 50 min to complete. This is a very popular area for hiking and running, so you'll likely encounter other people while exploring. The trail is open year-round and is beautiful to visit anytime.",
            imageUrl: "/mountain.jpg",
            diff: "Easy",
            info: "Length: 14.8 km • Est. 5hr 0m",
        },
    ];
    
    return (
        <div className="App">
            <div className="view">
                <div className="popular_trails">
                    <h1>Top Trails</h1>
                
                    <div className="trail-list">
                        {trails.map((trail, index) => (
                            <div className="trail" key={index}>
                                <img src={trail.imageUrl} alt={trail.name} className="trail-image" />
                                <div className="trail-details">
                                    <h6 className="trail-diff">{trail.diff}</h6>
                                    <h3 className="trail-name">{trail.name}</h3>
                                    <h6 className="trail-info">{trail.info}</h6>
                                    <p className="trail-description">{trail.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
                <div>                    
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

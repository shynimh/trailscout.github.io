import React from 'react';

const HamNavBar = ({ onClick }) => {
    return (
        <div className="hamburger-menu" onClick={onClick}>
            <div className="bar">
                <p>Home</p>
            </div>
            <div className="bar">
            <p>Explore</p>
            </div>
            <div className="bar">
            <p>Top Trails</p>
            </div>
        </div>
    );
};

export default HamNavBar;
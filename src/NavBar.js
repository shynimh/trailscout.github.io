import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import React, { useEffect, useState } from "react";
// import HamNavBar from './HamNavBar'

export default function NavBar () {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
    
    return(
    <nav className='navbar'>      
        {/* <img className='navimg' src='/logo.png' alt="Trail Scout Logo" /> */}
        <Link to="/" className="site-tittle">
        <img className='navimg' src='/logo.png' alt="Trail Scout Logo" />
        TRAIL SCOUT
        </Link>
        <div className="menu">
          <ul>
            {/* <ul className={isMenuOpen ? "show" : ""}> */}
                <CustomLink to="/">Home</CustomLink>    
                <CustomLink to="/toptrails">Top Trails</CustomLink>        
                <CustomLink to="/explore">Explore</CustomLink>

                <CustomLink to="/profile">Profile</CustomLink>
                <CustomLink to="/login"> 
                    <img className='logoutimg' src='/power-button.png' alt="Logout Button" /> 
                </CustomLink>
            </ul>
        </div>
          {/* ------- HAM NAV -------- */}
      <div className="hamburgernav">
      <div className="hamnav" onClick={toggleMenu}>
        <div className={`ham-icon ${isMenuOpen ? 'active' : ''}`}></div>
      </div>
      <div className={`menuham ${isMenuOpen ? 'show' : ''}`}>
        {/* Display page options one below the other */}
        <div className="menuham-items">
          <CustomLink to="/">Home</CustomLink>
          <CustomLink to="/toptrails">Top Trails</CustomLink>
          <CustomLink to="/explore">Explore</CustomLink>
          <CustomLink to="/profile">Profile</CustomLink>
          <CustomLink to="/login"> 
                    <img className='logoutimg' src='/power-button.png' alt="Logout Button" /> 
                </CustomLink>
        </div>
      </div>
      </div>
        
      </nav>
    );
}

function CustomLink({to, children, ...props}){
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end:true})
    
    return(
        <li className= {isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    );
}


// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from 'react-router-dom';

// export default function NavBar() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem('userToken');
//     if (!token) {
//       navigate('/');
//     } else {
//       setIsLoggedIn(true);
//     }
//   }, [navigate]);

//   const handleLogout = () => {
//     localStorage.removeItem('userToken');
//     setIsLoggedIn(false);
//     navigate('/login');
//   };

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className='navbar'>      
//       <Link to="/" className="site-tittle">
//         <img className='navimg' src='/logo.png' alt="Trail Scout Logo" />
//         TRAIL SCOUT
//       </Link>
//       <div className="menu">
//         <ul>
//           <CustomLink to="/">Home</CustomLink>
//           <CustomLink to="/toptrails">Top Trails</CustomLink>
//           <CustomLink to="/explore">Explore</CustomLink>
//           <CustomLink to="/profile">Profile</CustomLink>
//           {isLoggedIn ? (
//             <li onClick={handleLogout}>
//               <img className='logoutimg' src='/power-button.png' alt="Logout Button" /> 
//             </li>
//           ) : (
//             <CustomLink to="/login">
//               <img className='logoutimg' src='/power-button.png' alt="Logout Button" /> 
//             </CustomLink>
//           )}
//         </ul>
//       </div>


    //   {/* ------- HAM NAV -------- */}
    //   <div className="hamburgernav">
    //   <div className="hamnav" onClick={toggleMenu}>
    //     <div className={`ham-icon ${isMenuOpen ? 'active' : ''}`}></div>
    //   </div>
    //   <div className={`menuham ${isMenuOpen ? 'show' : ''}`}>
    //     {/* Display page options one below the other */}
    //     <div className="menuham-items">
    //       <CustomLink to="/">Home</CustomLink>
    //       <CustomLink to="/toptrails">Top Trails</CustomLink>
    //       <CustomLink to="/explore">Explore</CustomLink>
    //       <CustomLink to="/profile">Profile</CustomLink>
    //       {isLoggedIn ? (
    //         <div onClick={handleLogout} className="logout">
    //           <img className='logoutimg' src='/power-button.png' alt="Logout Button" /> 
              
    //         </div>
    //       ) : (
    //         <CustomLink to="/login">
    //           <img className='logoutimg' src='/power-button.png' alt="Logout Button" /> 
              
    //         </CustomLink>
    //       )}
    //     </div>
    //   </div>
    //   </div>
//     </nav>
//   );
// }

// function CustomLink({ to, children }) {
//   return (
//     <li>
//       <Link to={to}>{children}</Link>
//     </li>
//   );
// }

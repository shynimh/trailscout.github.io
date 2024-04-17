import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

import {Router, Routes, Route, Link, Navigate, useLocation } from 'react-router-dom';

import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp';
import { NotFound } from './pages/NotFound';
import { ForgotPassword } from './pages/ForgotPassword';
import {HomePage} from './pages/HomePage';
import {Explore} from './pages/Explore';
import { Profile } from './pages/Profile';
import {TopTrails} from './pages/TopTrails';
import NavBar from './NavBar';
import { GraphEve } from './pages/GraphEve';
import { GraphYoc } from './pages/GraphYoc';


function App() {
  const location = useLocation();
  const includedPaths = ['/','/home', '/explore', '/profile', '/toptrails','/graphyos',"/grapheve"];
  const showNavBar = includedPaths.includes(location.pathname);

  return (
    <>
    <div className="App">
      {/* Only show navbar for defined paths */}
      {showNavBar && <NavBar />}

      <div className='navbar_container'>   
        <Routes>
          <Route path="/login" element={<Login />}/>
          <Route path="/passwordreset" element={<ForgotPassword />} />
          <Route path="/signup" element={<SignUp />} />

          <Route path="*" element={<NotFound />} />

          <Route path="/" element={<HomePage />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/toptrails" element={<TopTrails />} /> 
          <Route path="/grapheve" element={<GraphEve />} /> 
          <Route path="/graphyos" element={<GraphYoc />} />        
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
    </>
  );
}

export default App;
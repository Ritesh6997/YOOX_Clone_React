import React from 'react'
import Nav1 from './Nav1';
import {Route,Routes} from "react-router-dom"
import Home from '../Home';
import Nav2 from './Nav2';
import Nav3 from './Nav3';
export default function Navbar() {
    return (
      <div>
            <Nav1></Nav1>
            <Nav2></Nav2>
            <Nav3></Nav3>
        <Routes>
          <Route path="/Home" element={<Home/>} />
          <Route path="/Home" element={<Home/>} />
        </Routes>
      </div>
      
    );
}

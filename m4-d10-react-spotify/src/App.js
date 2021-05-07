import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import AlbumPage from './Components/AlbumPage';

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <Home />
      {/* <AlbumPage /> */}
    </div>
  );
}

export default App;

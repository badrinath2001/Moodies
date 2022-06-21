import React from 'react';
import './App.css';
import Home from './pages/Home';
import Mood from './pages/Mood';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import {CookiesProvider} from "react-cookie";
import Result from './pages/Result';
import Random from './pages/random';

import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
function App() {
  return (
    <BrowserRouter>
    <CookiesProvider>
    <Routes>
    
    <Route path="Moodies" index element={<Home />} />
        <Route path="type:" element={<Mood />}>
          </Route>
          <Route path="random" element={<Random/>}>
          </Route>
          <Route path="Happy" element={<Result mood='Happy'/>}></Route>
          <Route path="Sad" element={<Result mood='Sad'/>}></Route>
          <Route path="Angry" element={<Result mood='Angry'/>}></Route>
          <Route path="Energetic" element={<Result mood='Energetic'/>}></Route>
          <Route path="Anxious" element={<Result mood='Anxious'/>}></Route>
          <Route path="Shocked" element={<Result mood='Shocked'/>}></Route>
          <Route path="ContactUs" element={<ContactUs/>}></Route>
          <Route path="AboutUs" element={<AboutUs/>}></Route>
          </Routes>
          </CookiesProvider>
      </BrowserRouter>
  );
}

export default App;

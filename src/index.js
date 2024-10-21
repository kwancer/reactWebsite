import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ProjectsCoding from './ProjectsCoding';
import ProjectsDE from './ProjectsDE';
import reportWebVitals from './reportWebVitals';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Skills from './components/Skills';
import About from './components/About';
import NavBar from './components/NavBar';
import Awards from './components/Awards';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/projects" >
        <Route path="design-engineering" element={<ProjectsDE />} />
        <Route path="coding" element={<ProjectsCoding />} />
      </Route>
      <Route path="/aboutme" element={<AboutMe />}>
        <Route path="education" element={<Education />} />
        <Route path="experience" element={<Experience />} />
        <Route path="skills" element={<Skills />} />
        <Route path="awards" element={<Awards />} />
      </Route>
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<><NavBar /><h1 style={{textAlign:"center"}}>404: Sorry, page not found!</h1></>} />
    </Routes>
  </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

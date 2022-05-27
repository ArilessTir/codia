import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar/navbar';
import SideNav from './components/sideNav/sideNav';
import './index.css';
import HomePage from './pages/Home';
import Courses from './pages/Courses';
import Exercices from './pages/Exercices';
import Exercice from './pages/Exercice';
import Jobs from './pages/Jobs';
import Job from './pages/Job';
import Quizz from './pages/Quizz';
import Projects from './pages/Projects';
import Path from './pages/Path';
import Cours from './pages/Cours';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>               
            <NavBar />
            <SideNav />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/cours" element={<Courses />} />
                <Route path="/cours/:id" element={<Cours />} />
                <Route path="/exercices" element={<Exercices />} />
                <Route path="/exercices/:id" element={<Exercice />} />
                <Route path="/parcours" element={<Path />} />
                <Route path="/carriere" element={<Jobs />} />
                <Route path="/carriere/:id" element={<Job />} />
                <Route path="/quizz" element={<Quizz />} />
                <Route path="/projets" element={<Projects />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

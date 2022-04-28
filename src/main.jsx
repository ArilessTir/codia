import React from 'react';
import ReactDOM from 'react-dom/client';
import NavBar from './components/navbar/navbar';
import SideNav from './components/sideNav/sideNav';
import './index.css';
import HomePage from './pages/Home';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <NavBar />
        <SideNav />
        <HomePage />
    </React.StrictMode>
);

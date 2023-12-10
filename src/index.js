import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Pages/Header/Header';
import Main from './components/Pages/Main/Main';
import SideBar from './components/Pages/SideBar/SideBar';
import Footer from './components/Pages/Footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="container">
      <Header />
      <Main />
      <SideBar />
      <Footer />
    </div>

  </React.StrictMode>
);

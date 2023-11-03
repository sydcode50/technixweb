import React from 'react';
import './App.css';
import Header from './components/Header';
import MainSection from './components/MainSection';
import Footer from './components/Footer';
import Offers from './components/Offers';


function App() {
  return (
    <div className="app">
      <Header />
      <MainSection />
      <Offers />
      <Footer />
    </div>
  );
}

export default App;

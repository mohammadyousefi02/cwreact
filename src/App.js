import React from 'react';

import Header from './components/common/Header';
import Card from "./components/customs/Card"
import Footer from './components/common/Footer';

import './assets/styles/styles.css';

function App() {
  return (
    <div className="App d-flex flex-column">
      <Header/>
      <div className="cards col pt-5 row">
        <Card title={"one"}/>
        <Card title="two"/>
        <Card title={"three"}/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;

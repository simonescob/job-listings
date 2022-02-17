import React from 'react';
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import List from './components/list';
import './styles/App.scss';

function App() {
  return (
    <div className="App">

      <Header/>

      <List/>

      <Footer/>
      
    </div>
  );
}

export default App;

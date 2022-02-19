import React, { useState } from 'react';
import './App.css';
import TagsContext from './components/context';
import Filter from './components/filter';
import Footer from './components/footer';
import Header from './components/header';
import List from './components/list';
import './styles/App.scss';

function App() {

  const [ tags, setTags ] = useState<string[]>([]);

  return (
    <TagsContext.Provider value={{tags, setTags}}>
      <div className="App">

        <Header/>
        <Filter/>
        <List/>
        <Footer/>
        
      </div>
    </TagsContext.Provider>
  );
}

export default App;

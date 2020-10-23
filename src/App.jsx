import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Containers/Header';
import SideBar from './Containers/SideBar';
import Content from './Containers/Content';

function App() {
  const initialData = [
    { id: 0, title: 'Tikka Masala', description: 'Indian Food' },
  ];
  const setData = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };
  const getData = (key) => {
    JSON.parse(localStorage.getItem(key));
  };

  const [recipe, setRecipe] = useState(getData('recipes') || initialData);

  const [hash, setHash] = useState(window.location.hash);
  window.onhashchange = () => {
    setHash(window.location.hash);
  };

  useEffect(() => {
    setData('recipe', recipe);
  }, [recipe]);

  return (
    <div>
      <Header />
      <div className='container'>
        <SideBar recipe={recipe} />
        <Content recipe={recipe} setRecipe={setRecipe} hash={hash} />
      </div>
    </div>
  );
}

export default App;

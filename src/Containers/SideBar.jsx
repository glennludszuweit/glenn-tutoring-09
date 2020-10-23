import React from 'react';
import List from '../Components/List';
import Search from '../Components/Search';

function SideBar({ recipe }) {
  return (
    <div>
      <h1>SIDEBAR</h1>
      <Search />
      <List recipe={recipe} />
    </div>
  );
}

export default SideBar;

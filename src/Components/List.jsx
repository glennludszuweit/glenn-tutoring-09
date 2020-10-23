import React from 'react';

function List({ recipe }) {
  return (
    <div>
      <ul>
        {recipe.map((item) => {
          return (
            <li key={item.id}>
              <a href={`#${item.id}`}>{item.title}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default List;

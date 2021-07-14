import './App.css';
import React, { useState } from 'react';
import Item from './components/item';

function App() {
  const [items, setItem] = useState(['Apprendre JS','Dormir', 'Manger','Aller au sport']);

  return (
    <>
      <h1>
        A Faire
      </h1>
      <p>
        Le but de cette todoList est de créer, supprimer ou modifier une todoList et pouvoir la conserver, voir le localstorage
      </p>
      <ul>
        {items.map((item) => (
          <Item activity={item}></Item>
        ))}
      </ul>

      <button>Ajouter une activité</button>
    </>
  );
}

export default App;

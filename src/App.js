import './App.css';
import React, { useState } from 'react';
import Item from './components/item';

function App() {
  const [items, setItem] = useState([{id: 1,name:'Apprendre JS'},{id: 2,name:'Dormir'}, {id: 3,name:'Manger'},{id: 4,name:'Aller au sport'}]);

  function deleteItem(id) {   console.log(`le lien pour l'id ${id} a été cliqué`);  }

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
          <Item key={item.id} activity={item.name} delete={deleteItem}></Item>
        ))}
      </ul>

      <button>Ajouter une activité</button>
    </>
  );
}

export default App;

import './App.css';
import React, { useState } from 'react';
import Item from './components/item';

function App() {
  const [item, setItem] = useState([{ text: 'Apprendre JS' }]);

  return (
    <>
      <h1>
        A Faire
      </h1>
      <p>
        Le but de cette todoList est de créer, supprimer ou modifier une todoList et pouvoir la conserver, voir le localstorage
      </p>
      <ul>
        <Item activity={this.state.item}></Item>
        <Item activity='Dormir '></Item>
        <Item activity='Manger '></Item>
        <Item activity='Aller au sport '></Item>
      </ul>

      <button>Ajouter une activité</button>
    </>
  );
}

export default App;

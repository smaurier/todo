import './App.css';
import React, { useState } from 'react';
import Item from './components/item';
import _ from 'lodash';

function App() {
  const [items, setItems] = useState([{id: 1,name:'Apprendre JS'},{id: 2,name:'Dormir'}, {id: 3,name:'Manger'},{id: 4,name:'Aller au sport'}]);

  function deleteItem(id) {
    setItems(items.filter((item) => item.id !== id))
  }

  function addItem() {
    const newActivity = {id: 5, name:'Parler de Dieu avec Benjamin'}
    const newItems = _.cloneDeep(items)

    newItems.push(newActivity)
    setItems(newItems)
  }

  return (
    <>
      <h1>
        A Faire
      </h1>
      <p>
        Le but de cette todoList est de créer, supprimer ou modifier une todoList et pouvoir la conserver, voir le localstorage
      </p>
      <ul>
        {items.map((item, index) => (
          <Item key={index} id={item.id} activity={item.name} delete={deleteItem}/>
        ))}
      </ul>

      <form>
        <label>
          Nom activité :
          <input type="text" name="name" />
        </label>
        <button type="submit" onClick={() => addItem()}>Ajouter une activité</button>
      </form>
      
    </>
  );
}

export default App;

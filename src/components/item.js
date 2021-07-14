function Item(props) {
  return (
    <li>
        {props.activity}
        <button onClick={() => props.delete(props.key)}>supprimer</button>
        <button>editer</button>
    </li>  
  );
}

export default Item;

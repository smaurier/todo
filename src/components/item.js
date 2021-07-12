function Item(props) {
  return (
    <li>
        {props.activity}
        <button>supprimer</button>
        <button>editer</button>
    </li>  
  );
}

export default Item;

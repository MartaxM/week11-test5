import '../App.css';
function MyList(props) {
    const header = props.header;
    const listItems = 
    props.items.map((item) =>
        <li key={item.id.toString()} 
            onClick={()=> props.updateItem(item.id)} 
            className={item.clicked ? 'clicked' : ''} 
            style={item.clicked ? {textDecoration: "line-through"} : {textDecoration: ""}}
            >
            {item.text}
        </li>
    );

  return (
    <div>
    <h1>{header}</h1>
    <ol>{listItems}</ol>
    </div>
  )
}

export default MyList
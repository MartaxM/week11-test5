import MyList from "./MyList"
import { useState } from "react"
import '../App.css';

function MyContainer() {
    const [items, setItems] = useState([
        { id: "1", text: "This is an item", clicked:false},
        { id: "2", text: "Also this",clicked:false }
    ]);

    const [text, setText]=useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        addItem({text: text});
        setText("");
    }

    const addItem = (text) => {
        const id = Math.floor(Math.random()*1000000+1000);
        const newItem = {id, ...text,clicked:false};
        setItems([...items, newItem]);
    }

    const updateItem = (id) => {
        const updatedItems = items.map((item)=>{
            if(id === item.id){
                return {...item, clicked: true};
            }else{
                return item;
            }
        });

        setItems(updatedItems);
    }

    return (
        <div>
            <MyList
                updateItem = {updateItem}
                header="List"
                items={items}
            />
            <form onSubmit={onSubmit}>
                <textarea placeholder="Add item" onChange={(e)=>setText(e.target.value)} value={text}></textarea>
                <button type="submit">Add</button>
            </form>

        </div>
    )
}

export default MyContainer
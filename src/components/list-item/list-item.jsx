import './list-item.css';
import { useState } from 'react';

function ListItem({groceryList, setGroceryList, item}) {

    const [canEdit, setCanEdit] = useState(true);

    const handleToggleEdit = () => {
        setCanEdit(canEdit => !canEdit); //setting state is asynchronous
    }

    const handleDelete = (event) => {
        event.preventDefault();
        
        // create  a shallow copy of groceryList
        const myList = [...groceryList]

        // use the filter to delete from list
        const filteredList = myList.filter((word) => word !== item)

        // setGroceryList with the new list
        setGroceryList(filteredList)
    }

    const handleChange = (event) => {
        event.preventDefault();
        const myList = [...groceryList] // shallow copy
        const itemIndex = groceryList.findIndex((obj) => obj === item)
        // e.target.value has the latest updated word
        // So we create a new object with the updated "name" and replace the object
        // at the same index with the new object
        const currentItem =  myList[itemIndex]

        myList[itemIndex] = {...currentItem, name: event.target.value}

        setGroceryList(myList)
    }

    const handleSelected = (event) => {
        event.preventDefault();
        const myList = [...groceryList];
        const itemIndex = groceryList.findIndex((obj) => obj === item);
        const currentItem = myList[itemIndex]
        myList[itemIndex] = {...currentItem, selected: !item.selected}
        setGroceryList(myList)

    }

   

    return (
        <div>
            <article className="grocery-item row">
                <div className="col-8 form-check">
                    <label className="radio-inline">
                        <input 
                            key={Math.random()}
                            className="form-check-input item-list" 
                            type="checkbox"
                            id="itemList"
                            checked={item.selected}
                            onChange={handleSelected}
                        />
                        <input 
                            value={item.name} 
                            type="text" 
                            style={{textDecoration: item.selected ? 'line-through' : 'none'}}
                            onChange={handleChange} 
                            disabled={canEdit}
                        />
                    </label>
                </div>
                <div className="btn-container btn-group col-2">
                    <button onClick={handleToggleEdit} type="button" className="edit-btn btn btn-sm text-success m-1">
                        <i className="fas fa-edit"></i>
                    </button>
                    <button onClick={handleDelete} type="button" className="delete-btn btn btn-sm text-danger m-1">
                        <i className="fas fa-trash"></i>
                    </button>
                </div>
            </article>
        </div>
    )
}

export default ListItem;
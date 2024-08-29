import './list-item.css';
import { useRef } from 'react';

function ListItem({groceryList, setGroceryList, value}) {

    const toggleUpdate = () => {

    }

    const handleDelete = (event) => {
        event.preventDefault();
        
        // create  a shallow copy of groceryList
        const newList = [...groceryList]

        // use the filter to delete from list
        const filteredList = newList.filter((word) => word !== value)

        // setGroceryList with the new list
        setGroceryList(filteredList)
    }

    const handleChange = (event) => {
        event.preventDefault();
        const myList = [...groceryList] // shallow copy
        const valueIndex = groceryList.findIndex((item)=> item === value)
        myList[valueIndex] = event.target.value

        setGroceryList(myList)
    }

    return (
        <div>
            <article className="grocery-item row">
                <div className="col-8 form-check">
                    <label className="radio-inline">
                        <input className="form-check-input item-list" type="checkbox" value="" id="itemList" />
                        <input value={value} type="text" onChange={handleChange} disabled/>
                    </label>
                </div>
                <div className="btn-container btn-group col-2">
                    <button type="button" className="edit-btn btn btn-sm text-success m-1">
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
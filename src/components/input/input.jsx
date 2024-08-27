import './input.css'
import { useRef } from 'react';

// props {setGroceryList: setGroceryList}

function Input({groceryList, setGroceryList}){
    //setGroceryList
    const myInput = useRef(null);


    const submitItem = () => {
        // e.g. ['eggs']
        const updatedGroceryList = [...groceryList, myInput.current.value] //spread operator - extract items from grocery list, then append new grocery item to the list
        // e.g ['eggs', 'potato']
        setGroceryList(updatedGroceryList)
    }
    return (
        <div className="grocery-form">
            <div className="mb-3 mt-3 row">
                <div className="col-10">
                    <input ref={myInput} type="text" id="grocery" placeholder="e.g. eggs" className="form-control input-item" />
                </div>
                <div className="col-2">
                    <button type="submit" className="submit-btn btn btn-primary" onClick={submitItem}>
                        Submit
                    </button>
                </div>
            </div>
        </div>
    )

}

export default Input;
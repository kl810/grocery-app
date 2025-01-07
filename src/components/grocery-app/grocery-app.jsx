import './grocery-app.css';
import Input from "../input/input";
import List from '../list/list';
import { useState } from 'react';


function GroceryApp() {

    const [groceryList, setGroceryList] = useState([]) //initialise empty list


    return(
        <div className="app">
            <div className="app-wrapper">
                <h3 className="title">Grocery List</h3>
                <Input groceryList={groceryList} setGroceryList={setGroceryList}/>
                <List groceryList={groceryList} setGroceryList={setGroceryList}/>
            </div>
         </div>
    )
}

export default GroceryApp;



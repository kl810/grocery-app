import './grocery-app.css';
import Input from "../input/input";
import List from '../list/list';
import { useState } from 'react';

function GroceryApp(){
    const [groceryList, setGroceryList] = useState([]) //initialise empty list


    return(
        <div className="app">
            <h3>Grocery List</h3>
            <Input groceryList={groceryList} setGroceryList={setGroceryList}/>
            <List groceryList={groceryList}/>

         </div>
    )
}

export default GroceryApp;



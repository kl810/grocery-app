import './grocery-app.css';
import Input from "../input/input";
import List from '../list/list';
import { useState } from 'react';


function GroceryApp() {

    const [groceryList, setGroceryList] = useState([]) //initialise empty list

    const darkMode = () => {
        const element = document.getElementById("app");
        element.classList.toggle("dark-mode")
    }

    return(
        <div id="app">
            <div className='toggle-wrapper'>
                <button className="dark-mode-toggle" onClick={darkMode}><i class="fa-solid fa-circle-half-stroke"></i></button>
            </div>
            <main>
                <h3>Grocery List</h3>
                <Input groceryList={groceryList} setGroceryList={setGroceryList}/>
                <List groceryList={groceryList} setGroceryList={setGroceryList}/>
            </main>
         </div>
    )
}

export default GroceryApp;



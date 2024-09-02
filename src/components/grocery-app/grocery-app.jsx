import './grocery-app.css';
import Input from "../input/input";
import List from '../list/list';
import { useEffect, useState } from 'react';


// const getDogsFromApi = async () => {
//     // Get data from an API
//     let a = await fetch('https://dog.ceo/api/breeds/list/all')
//     a = await a.json()
//     // Filter and transform the json to look like our grocery list item objects
//     const listOfDogNames = Object.keys(a.message)
//     const newGroceryList = listOfDogNames.map(dogName => ({name: dogName, selected: false}))
//     // Return "grocery list items"
//     return newGroceryList
// }

function GroceryApp() {

    const [groceryList, setGroceryList] = useState([]) //initialise empty list

    // const getDogs = async () => {
    //     const groceryListOfDogs = await getDogsFromApi()
    //     setGroceryList(groceryListOfDogs)
    // }

    // useEffect(() => {
    //     getDogs()
    // })


    return(
        <div className="app">
            <h3>Grocery List</h3>
            <Input groceryList={groceryList} setGroceryList={setGroceryList}/>
            <List groceryList={groceryList} setGroceryList={setGroceryList}/>
         </div>
    )
}

export default GroceryApp;



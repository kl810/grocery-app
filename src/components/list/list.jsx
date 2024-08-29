import './list.css';
import ListItem from '../list-item/list-item';

function List({groceryList, setGroceryList}) {

    const handleClearList = (event) => {
        event.preventDefault();

        setGroceryList([])
    }
    
    return (
        <div className="grocery-container form-inline">
            <div className="grocery-list form-group">
                {groceryList.map((listItem, i) => <ListItem key={i} value={listItem} groceryList={groceryList} setGroceryList={setGroceryList}/>)}
            </div>
            <div className="d-flex justify-content-center"> 
                <div>
                    <button onClick={handleClearList} type="button" className="clear-btn btn btn-outline-danger">Clear</button>
                </div>
            </div>

        </div>
    )
}

export default List;


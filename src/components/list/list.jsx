import './list.css';
import ListItem from '../list-item/list-item';

function List({groceryList}) {
    console.log(groceryList)
    return (
        <div className="grocery-container form-inline">
            <div className="grocery-list form-group">
                {groceryList.map(listItem => <ListItem key={listItem} value={listItem}/>)}
            </div>
            <div className="d-flex justify-content-center"> 
                <div>
                    <button type="button" className="clear-btn btn btn-outline-danger">Clear</button>
                </div>
            </div>

        </div>
    )
}

export default List;


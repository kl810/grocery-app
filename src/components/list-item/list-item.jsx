import './list-item.css';

function ListItem({value}) {
    return (
        <div>
            <article className="grocery-item row">
                <div className="col-10 form-check">
                    <label className="radio-inline">
                        <p><input className="form-check-input item-list" type="checkbox" value="" id="itemList" />{value}</p>
                    </label>
                </div>

                <div className="btn-container btn-group col-2">
                    <button type="button" className="edit-btn btn btn-sm text-success m-1">
                        <i className="fas fa-edit"></i>
                    </button>
                    <button type="button" className="delete-btn btn btn-sm text-danger m-1">
                        <i className="fas fa-trash"></i>
                    </button>
                </div>
            </article>
        </div>
    )
}

export default ListItem;
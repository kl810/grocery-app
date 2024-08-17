import './list.css'

function List() {
    return (
        <div class="grocery-container form-inline">
            <div class="grocery-list form-group">
                <article class="grocery-item row">
                    <div class="col-10 form-check">
                        <label class="radio-inline">
                            <p><input class="form-check-input item-list" type="checkbox" value="" id="itemList" />item 1</p>
                        </label>
                    </div>
                    
                    <div class="btn-container btn-group col-2">
                        <button type="button" class="edit-btn btn btn-sm text-success m-1">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button type="button" class="delete-btn btn btn-sm text-danger m-1">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </article>

            </div>
            <div class="d-flex justify-content-center"> 
                <div>
                    <button type="button" class="clear-btn btn btn-outline-danger">Clear</button>
                </div>
            </div>

        </div>
    )
}

export default List;


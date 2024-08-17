import './input.css'
import List from '../list/list';


function Input(){
    return (
        <div class="grocery-form">
            <div class="mb-3 mt-3 row">
                <div class="col-10">
                    <input type="text" id="grocery" placeholder="e.g. eggs" class="form-control input-item" />
                </div>
                <div class="col-2">
                    <button type="submit" class="submit-btn btn btn-primary">
                        Submit
                    </button>
                </div>
            </div>
            <List />
        </div>
    )

}

export default Input;

import Button from "./Button";

function TodoListItem(props){

    const { item, removeFromItems, index } = props;

    const onRemove = () => {
        removeFromItems(index);
    }
    const styleItem = {
        marginTop: '10px'
    }
    return (
        <div className="row" style={styleItem}>
            <div className="col-10">
                {item}
            </div>
            <div className="col">
                <Button classe="btn btn-danger" funOnClick={onRemove} texto={"X"}/>
            </div>
        </div>
    );

}

export default TodoListItem;
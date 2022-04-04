import './ToDoList.css';
const ToDoList = (props) => {
    return (
        <div className="list">
            <ol className="list-a">
                {props.items.map(item =>
                    <li key={item.id} className="list-b">
                        <div className="list-c">
                            <h4 style={{ textDecoration: item.done ? 'line-through' : 'none' }}>{item.title}</h4>
                            <button id="delete" type="button" onClick={() => props.onDeleteTodo(item.id)}>Delete</button>
                            <button id="done" type="button" onClick={() => props.onDoneTodo(item.id)}>Done</button>
                        </div>
                    </li>
                )}
            </ol>
        </div>
    );

}
export default ToDoList;

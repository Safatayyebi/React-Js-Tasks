import React, { useState } from 'react';
import './ToDoInput.css';

const ToDoInput = (props) => {
    const [toDoInput, setTodoInput] = useState('');

    const toDoHandler = (event) => {
        setTodoInput(event.target.value);
    }

    const newTodoHandler = (event) => {
        event.preventDefault();

        const toDoItem = {
            title: toDoInput
        }

        props.onAddToDo(toDoItem);
        setTodoInput('');

    }


    return (
        <form className="input" onSubmit={newTodoHandler}>
            <div className="form-items">
                <label>Add To Do</label><br />
                <input className='form-input' type="text" value={toDoInput} placeholder="Doing Math . . ." onChange={toDoHandler} />
                <button className='form-button' type='submit'>Add</button>
            </div>
        </form>
    );
}

export default ToDoInput;
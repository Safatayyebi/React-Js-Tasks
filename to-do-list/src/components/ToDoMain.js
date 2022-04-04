import AppHeader from './permanent/AppHeader';
import Signature from './permanent/Signature';
import ToDoInput from './input/ToDoInput';
import ToDoList from './list/ToDoList';
import './ToDoMain.css';
import { useState } from 'react';

const DUMMY_DATA = [
    {
        id: 't1',
        title: 'Meet Sina & Ali',
        done: false,
    },
    {
        id: 't2',
        title: 'Meet Ava',
        done: false,
    },
]

const ToDoMain = () => {

    const [updatedList, setUpdatedList] = useState(DUMMY_DATA);
    const [isDone, setIsDone] = useState(false);



    // 
    const addTodoHandler = todo => {
        const toDoItem = {
            ...todo,
            id: Math.random().toString(),
            done: false,
        }

        setUpdatedList(preToDo => {
            return [toDoItem, ...preToDo]
        });
    };

    // 
    const filterHandler = (id) => {
        const filterdItem = updatedList.filter((item) => item.id !== id)
        setUpdatedList(filterdItem)
    };

    // 


    const doneHandler = (id) => {
        const filterdItem = updatedList.filter((item) => item.id === id);
        filterdItem[0].done = true;
        if (isDone !== filterdItem[0].done) {
            setIsDone(true);
        }else {
            filterdItem[0].done = false;
            setIsDone(false)
        }
    }

    return (
        <div className="main">
            {/* App Header */}
            <AppHeader />
            {/* Input Bar */}
            <ToDoInput onAddToDo={addTodoHandler} />
            {/* List Of ToDo's */}
            <ToDoList items={updatedList} onDeleteTodo={filterHandler} onDoneTodo={doneHandler} />
            {/* My Signature */}
            <Signature />
        </div>
    );
}

export default ToDoMain;
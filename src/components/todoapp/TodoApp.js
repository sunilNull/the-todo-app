import React, { useState } from 'react'
import './style.css';
import TodoItem from './TodoItem';
const TodoApp = () => {
    const [todoItem, setTodoItem] = useState('');
    const updateTodoItemValue = todoItemVal => {
        const newData= todoItemVal.nativeEvent.data===null?'':todoItem+todoItemVal.nativeEvent.data
        setTodoItem(newData);
    }
    const [todoList, setTodoList] = useState([]);

    const deleteTodoItem = currItem => {
        setTodoList(currentTodoList => {
            return currentTodoList.filter((element) => element !== currItem)
        })
    }

    const editTodoItem = currItem => {
        setTodoItem(currItem);
    }
    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src="./images/todo.svg" alt="todo_logo" />
                        <figcaption>Add your list here ✌</figcaption>
                    </figure>
                    <div className="addItems">
                        <input type="text" placeholder="✍  add item" value={todoItem} className="form-control" onInput={updateTodoItemValue} />
                        <i className="fa fa-plus add-btn" onClick={() => {setTodoList([...todoList,todoItem]); setTodoItem('');}}></i>
                    </div>

                    <div className="showItems">
                        {todoList.map((curentItem) => {
                            return (
                                <>
                                    <TodoItem label={curentItem} deleteTodoItem={deleteTodoItem} editTodoItem={editTodoItem}/>
                                </>
                            )
                        })}
                    </div>

                    <div className="showItems">
                        <button className="btn effect04" data-sm-link-text="REMOVE ALL">
                            <span>CHECK LIST</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TodoApp

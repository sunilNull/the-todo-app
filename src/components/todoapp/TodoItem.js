import React from 'react'
import './style.css';

const TodoItem = props => {
    return (
        <>
            <div className="eachItem">
                <h3>{props.label}</h3>
                <div className="todo-btn">
                    <i className="far fa-edit add-btn" onClick={() => props.editTodoItem(props.label)}></i>
                    <i className="far fa-trash-alt add-btn" onClick={() => props.deleteTodoItem(props.label)}></i>
                </div>
            </div>
        </>
    )
}

export default TodoItem

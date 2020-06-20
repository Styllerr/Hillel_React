import React, { useState, useEffect } from 'react'
import TodoItem from './TodoItem'
import api from '../api';
import TodoForm from './TodoForm';

function Todo() {
    const [todoItems, setTodoItems] = useState([]);
    const [title, setTitle] = useState('')

    useEffect(() => {
        api.get().then(({data}) => setTodoItems)
    });

    function toggleItem(item) {

    }
    function onTitleChange(e) {
        setTitle()
    }
    return (
        <>
            <ul>
                {todoItem.map((item) => (
                    <TodoItem key={item.id} item ={item} onToggle={toggleItem}toggleItem/>
                ))}
            </ul>
            <TodoForm title={title} onTitleChange={onTitleChange}/>
        </>
    )
}

export default Todo

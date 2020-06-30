import React from 'react'

function TodoList({title, change}) {
    return (
        <div>
            <input 
            type='text' 
            value={title}
            onChange={(e) => change(e.target.value)}    
            />
        </div>
    )
}

export default TodoList

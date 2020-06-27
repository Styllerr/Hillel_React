import React from 'react'

function TodoForm({title, onTitleChenge, onSave}) {

    function onSubmit(e) {
        e.preventDefault();
        onSave();
    }
    return (
        <form action='' onSubmit={onSubmit}>
            <input type='text' 
            value={title}
            onChange={onTitleChenge} />
        </form>
    )
}

export default TodoForm

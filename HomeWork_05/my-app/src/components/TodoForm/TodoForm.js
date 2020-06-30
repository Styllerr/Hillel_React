import React from 'react';

function TodoForm({ onTitleChange, onSave, title }) {

    function onSubmit(e) {
        e.preventDefault();
        onSave();
    }
    return (
        <form action='' onSubmit={onSubmit}>
            <input type='text'
                value={title}
                onChange={onTitleChange} />
        </form>
    )
}

export default TodoForm

import React from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import { connect } from 'react-redux';
import { add, changeInput, toggle } from '../store/actions';

function Todo({ todos, title, add, changeInput, toggle }) {

    function onTitleChange(e) {
        changeInput(e.target.value);
    }

    function onSave() {
        add({
            id: Date.now(),
            title,
            isDone: false,
        });
        changeInput('');
    }

    function toggleItem(item) {
        toggle({ ...item, isDone: !item.isDone })
    }
    
    return (
        <>
            <ul>
                {todos.map(item => (
                    <TodoItem
                        key={item.id}
                        item={item}
                        onToggle={toggleItem}
                    />))}
            </ul>
            <TodoForm
                title={title}
                onTitleChange={onTitleChange}
                onSave={onSave}
            />
        </>
    )
}

const mapStateToProps = ({ todos, title }) => ({ todos, title })
const mapDispatchToProps = {
    add,
    changeInput,
    toggle
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo)

import React from 'react'
import Todoform from './Todoform'
import Todolist from './Todolist'

export default class Todo extends React.Component {
    state = {
        todos: [
            { id: 1, title: 'do samething 1', isDone: false },
            { id: 2, title: 'do samething 2', isDone: true },
            { id: 3, title: 'do samething 3', isDone: false }
        ],
    };
    addNewTodo(newTodo) {
        console.log('submited', newTodo);
    }

    render() {
        return (
            <>
                <Todolist todos={this.state.todos} />
                <Todoform onSubmit={this.addNewTodo} />
            </>
        );
    }
}

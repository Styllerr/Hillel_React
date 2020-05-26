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
    addNewTodo = (newTodo) => {
        newTodo.id = Date.now();
        newTodo.isDone = false;

        this.state.todos.push(newTodo);

        this.setState({
            todos: [...this.state.todos, newTodo],
        })
    }

deleteTodo = (id) =>{
    this.setState({
        todos: this.state.todos.filter((item) => item.id !== id),
    })
}

toggleTodo = (id) => {
    this.setState({
        todos: this.state.todos.map((item) => 
            item.id !==id ? item : {...item, isDone: item.isDone})
    })
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

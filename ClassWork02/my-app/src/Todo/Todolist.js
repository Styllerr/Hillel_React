import React, { Component } from 'react';
import TodoListItem from './TodoListItem';

export default class Todolist extends Component {
    render() {
        return (
            <ul>
                {this.props.todos.map((item) => (
                    <TodoListItem key={item.id} item={item} />
                ))}

            </ul>
        )
    }
}

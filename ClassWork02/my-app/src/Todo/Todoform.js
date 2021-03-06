import React, { Component } from 'react'

export default class Todoform extends Component {
    state = {
        hello: 'world',
        taskTitle: '',
    };
    onFormSubmit = (e) => {
        e.preventDefault();

        this.props.onSubmit({
            title: this.state.taskTitle,
        });

        this.setState({ taskTitle: '' });
    };

    onInputChange = (e) => {
        this.setState({
            taskTitle: e.target.value,
        });
    };

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <input
                    type="text"
                    name="taskTitle"
                    value={this.state.taskTitle}
                    onChange={this.onInputChange}
                />
                <button>Add</button>
            </form>
        );
    }
}
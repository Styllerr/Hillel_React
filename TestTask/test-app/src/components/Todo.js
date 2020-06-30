import React from 'react';
import { connect } from 'react-redux';
import { change } from '../store/actions';
import TodoList from './TodoList';

function Todo({ title, change }) {
    return (
        <div>
            Сдесь типа целое приложение Todo
            <TodoList
                title={title}
                change={change}
            />
        </div>
    )
}

const mapStateToProps = function (state) {
    return { title: state.title }
}
const mapDispatchToProps = {
    change,
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo)

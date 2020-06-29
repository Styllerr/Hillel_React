import React from 'react';
import {connect} from 'react-redux';
import { changeInput } from '../../store/actions'

function TodoForm({onTitleChange, onSave}, props) {

    function onSubmit(e) {
        e.preventDefault();
        onSave();
    }
    return (
        <form action='' onSubmit={onSubmit}>
            <input type='text' 
            value={props.title}
            onChange={onTitleChange} />
        </form>
    )
}

const mapStateToProps = ({title}) => ({title})
const mapDispatchToProps = {
    changeInput,
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)

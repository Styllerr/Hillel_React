import React from 'react'
import {connect} from 'react-redux';
import {onChangeInput} from '../store/actions'

function TodoForm({value, onChangeInput}) {
    return (
        <div>
            <input type='text' name='title' value={value} onChange={onChangeInput((event) => event.target.value)}/>
        </div>
    )
}

const mapStateToProps = ({ value }) => ({ value });

const mapDispatchToprops = {
    onChangeInput,
};

export default connect(mapStateToProps, mapDispatchToprops)(TodoForm)




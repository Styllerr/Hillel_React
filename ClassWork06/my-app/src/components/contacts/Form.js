import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

function Form( {contact} ) {
    const {name, surname, phone} = {...contact}
    console.log('Загрузился ', contact, name, surname, phone);

    function onSubmit(e) {
        e.preventDefault();
    }
    return (
        <form action='#' onSubmit={onSubmit}>
            <input type='text'  value={name}/>
            <input type='text'  value={surname}/>
            <input type='text'  value={phone}/>
            <input type='submit'/>
        </form>
    )
}

const mapStateToProps = (state, props) => {
    return {
        contact: state.contacts.items.find(
            (item) => item.id == props.match.params.id
        )
    }

}
export default withRouter(connect(mapStateToProps)(Form))

import React from 'react';

function ContactsItem({contact, onDelete}) {
    const {id, name, surname, phone} = {...contact};

    return (
        <tr>
            <td>{name}</td>
            <td>{surname}</td>
            <td>{phone}</td>
            <td>
                <button 
                onClick={() => onDelete(id)}
                >Delete</button>
            </td>
        </tr>
    )
}

export default ContactsItem

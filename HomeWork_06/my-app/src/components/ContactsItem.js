import React from 'react'

function ContactsItem({contact}) {
    const {name, surname, phone} = {...contact};
    return (
        <tr>
            <td>{name}</td>
            <td>{surname}</td>
            <td>{phone}</td>
            <td>
                <button>Delete</button>
            </td>
        </tr>
    )
}

export default ContactsItem

import React from 'react';

import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { useHistory } from 'react-router-dom';

function ListItem({ contact }) {
    const history = useHistory();
    function onRowClick() {
        console.log(history);
        history.push('/contacts/'+contact.id);
    }
    return (
        <TableRow onClick={onRowClick}>
            <TableCell component="th" scope="row">
                {contact.name}
            </TableCell>
            <TableCell align="right">{contact.surname}</TableCell>
            <TableCell align="right">{contact.phone}</TableCell>
        </TableRow>
    )
}

export default ListItem

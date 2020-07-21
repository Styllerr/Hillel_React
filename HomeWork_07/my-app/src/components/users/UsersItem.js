import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import { delUser } from '../../store/actions/users';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

function UsersItem({ users, delUser }) {

    const history = useHistory();

    function onRowClick() {
        history.push('/users/' + users.id);
    }
    function onDelClick(e) {
        e.stopPropagation();
        delUser(users.id);
    }
    return (
        <TableRow onClick={onRowClick}>
            <TableCell component="th" scope="row">
                {users.name}
            </TableCell>
            <TableCell align="right">{users.username}</TableCell>
            <TableCell align="right">{users.email}</TableCell>
            <TableCell align="right">{users.phone}</TableCell>
            <TableCell align="right">
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={onDelClick}
                >X
                </Button>
            </TableCell>
        </TableRow>
    )
}

const mapDispatchToProps = {
    delUser,
}
export default connect(null, mapDispatchToProps)(UsersItem)

import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import { delUser } from '../../store/actions/users';
import { connect } from 'react-redux';

function UsersItem({ users, delUser }) {
    return (
        <TableRow>
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
                    onClick={() => delUser(users.id)}
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

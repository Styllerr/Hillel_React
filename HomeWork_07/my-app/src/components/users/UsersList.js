import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import UsersItem from './UsersItem';
import { connect } from 'react-redux';

function UsersList({ users }) {
    
    return (
        <TableContainer component={Paper}>
            <Table size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Username</TableCell>
                        <TableCell align="right">E-mail</TableCell>
                        <TableCell align="right">Phone</TableCell>
                        <TableCell align="right">Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((item) => (
                        <UsersItem
                            users={item}
                            key={item.id} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
const mapStateToProps = ({ users: { items } }) => ({
    users: items,
})
export default connect(mapStateToProps)(UsersList)

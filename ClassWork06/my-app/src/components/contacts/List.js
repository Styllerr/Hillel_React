import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ListItem from './ListItem';
import { connect } from 'react-redux';

function List({ contacts }) {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Surname</TableCell>
                        <TableCell align="right">Phone</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {contacts.map((contact) => (
                        <ListItem contact={contact} key={contact.id} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

const mapStateToProps = ({ contacts: { items } }) => {
    return {
        contacts: items,
    }
}
export default connect(mapStateToProps)(List)

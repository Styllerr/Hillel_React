import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import AlbumsItem from './AlbumsItem'

function AlbumsList({albums}) {
    return (
        <TableContainer component={Paper}>
            <Table size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>Album title</TableCell>
                        <TableCell align="right">Username</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {albums.map((item) => (
                        <AlbumsItem
                            albums={item}
                            key={item.id} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
const mapStateToProps = ({users: {albums}}) => ({
    albums,
})
export default connect(mapStateToProps)(AlbumsList)

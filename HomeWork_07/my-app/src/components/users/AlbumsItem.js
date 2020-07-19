import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

function AlbumsItem({ albums, items }) {
    const owner = items.find((item) => item.id === albums.userId);
    const history = useHistory();

    function onAlbumSelected() {
        history.push('/albums/' + albums.id);
    }
    return (
        <TableRow onClick={onAlbumSelected}>
            <TableCell component="th" scope="row">
                {albums.title}
            </TableCell>
            <TableCell align="right">{owner.name}</TableCell>
        </TableRow>
    )
}
const mapStateToProps = ({ users: { items } }) => ({
    items,
})
export default connect(mapStateToProps)(AlbumsItem)

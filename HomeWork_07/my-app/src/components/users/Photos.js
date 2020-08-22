import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import api from '../../api';
import PhotosItem from './PhotosItem';
import GridList from '@material-ui/core/GridList';


function Photos(props) {
    const [photos, setPhotos] = useState([])
    const albumID = props.match.params.id;
    

    useEffect(() => {
        api.get('/albums/' + albumID + '/photos').then(
            (resp) => setPhotos(resp.data)
        )
    }, [albumID])

    return (
        <>
        <h2>Album ID: {albumID}</h2>
        <GridList cellHeight={160} cols={3}>
            {photos.map((tile) => (
                <PhotosItem tile={tile} key={tile.id} />
            ))}
        </GridList>
        </>
    )
}

export default withRouter(Photos)

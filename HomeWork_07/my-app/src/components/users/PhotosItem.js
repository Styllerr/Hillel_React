import React from 'react';
import GridListTile from '@material-ui/core/GridListTile';

function PhotosItem({tile}) {
    return (
        <GridListTile cols={tile.cols || 1}>
            <img src={tile.url} alt={tile.title} />
        </GridListTile>
    )
}

export default PhotosItem

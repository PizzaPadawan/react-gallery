import './GalleryItem'
// import './GalleryList.css'
import GalleryItem from './GalleryItem'
import { Item } from '../../Item'

import { Grid } from '@mui/material'

interface Props {
    getGallery: () => void;
    galleryArray: [Item];
}

const GalleryList: React.FC<Props> = ({ galleryArray, getGallery }) => {
    return (
        <Grid container spacing={3}>
            {galleryArray.length > 0 && galleryArray.map(item => (
                <Grid item xs={4}>
                    <GalleryItem getGallery={getGallery} item={item} />
                </Grid>
            ))}
        </Grid>
    )
}

export default GalleryList;
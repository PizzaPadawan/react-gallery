import './GalleryItem'
// import './GalleryList.css'
import GalleryItem from './GalleryItem'
import { Item } from '../../Item'
import { Dispatch, SetStateAction } from 'react';
import { useSelector } from 'react-redux';

import { Grid } from '@mui/material'

interface Props {
    setEditMode: Dispatch<SetStateAction<boolean>>
    setSelected: Dispatch<SetStateAction<Item>>
}

const GalleryList: React.FC<Props> = ({ setEditMode, setSelected }) => {

    const galleryArray = useSelector((state: { gallery: Item[] }) => state.gallery);

    return (
        <Grid container spacing={3}>
            {galleryArray.length > 0 && galleryArray.map(item => (
                <Grid item key="id" xs={4}>
                    <GalleryItem item={item} setEditMode={setEditMode} setSelected={setSelected} />
                </Grid>
            ))}
        </Grid>
    )
}

export default GalleryList;
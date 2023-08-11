import './GalleryItem'
// import './GalleryList.css'
import GalleryItem from './GalleryItem'
import { Item } from '../../Item'
import { Dispatch, SetStateAction } from 'react';
import { useSelector } from 'react-redux';

import { Grid } from '@mui/material'

interface Props {
    getGallery: () => void;
    editMode: boolean,
    setEditMode: Dispatch<SetStateAction<boolean>>
    selected: Item,
    setSelected: Dispatch<SetStateAction<Item>>
}

const GalleryList: React.FC<Props> = ({ getGallery, editMode, setEditMode, selected, setSelected }) => {

    const galleryArray = useSelector((state: { gallery: Item[] }) => state.gallery);

    return (
        <Grid container spacing={3}>
            {galleryArray.length > 0 && galleryArray.map(item => (
                <Grid item key="id" xs={4}>
                    <GalleryItem getGallery={getGallery} item={item} editMode={editMode} setEditMode={setEditMode} selected={selected} setSelected={setSelected} />
                </Grid>
            ))}
        </Grid>
    )
}

export default GalleryList;
import React, { useState, Dispatch, SetStateAction } from "react"
import { useDispatch } from 'react-redux';
import "./GalleryList.css"
import Swal from "sweetalert2";
import { Item } from "../../Item";

import {
    IconButton,
    Card,
    CardMedia,
    CardActionArea,
    CardContent,
    Typography,
    Tooltip
} from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

interface Props {
    item: Item;
    setEditMode: Dispatch<SetStateAction<boolean>>
    setSelected: Dispatch<SetStateAction<Item>>
}

const GalleryItem: React.FC<Props> = ({ item, setEditMode, setSelected }) => {

    const [showDescription, setShowDescription] = useState<boolean>(false);
    const dispatch = useDispatch();

    const likeCounter = (item: Item) => {
        dispatch({
            type: "PUT_LIKE",
            payload: {
                id: item.id,
                path: item.path,
                description: item.description,
                likes: (item.likes + 1)
            }
        })
    }

    const deletePost = (item: Item) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "This post will be deleted! (But only temporarily, I guess.)",
            icon: 'warning',
            background: '#191f28',
            color: '#c69f68',
            showCancelButton: true,
            confirmButtonColor: '#b81b2c',
            cancelButtonColor: '#4b5975',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'This post has been deleted.',
                    'success'
                )
                dispatch({
                    type: "DELETE_GALLERY",
                    payload: item
                })
            }
        })
    }

    // styles
    const containerStyle: React.CSSProperties = {
        position: 'relative',
        height: '250px',
    };

    const backgroundStyle: React.CSSProperties = {

        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `url(${item.path})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    const textStyle: React.CSSProperties = {
        zIndex: 1,
        padding: 'auto 0',
        position: 'absolute',
        width: '100%',
        height: '100%',
        backdropFilter: 'blur(2px) brightness(0.4)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    return (
        <Card>
            {showDescription
                ? <>
                    <CardActionArea sx={containerStyle} onClick={() => setShowDescription(false)}>
                        <div style={backgroundStyle}>
                            <Typography sx={textStyle} align='center' variant="body1" onClick={() => setShowDescription(false)}>
                                {item.description}
                            </Typography>
                        </div>
                    </CardActionArea>
                </>
                : <CardActionArea>
                    <CardMedia sx={{ height: '250px' }} image={item.path} onClick={() => setShowDescription(true)} />
                </CardActionArea>
            }
            <CardContent>
                <Typography align='center' variant='body2'>{item.likes} likes</Typography>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Tooltip title="Edit Description">
                        <IconButton aria-label="edit" size="small" color="primary" onClick={() => { setSelected(item); setEditMode(true); }}>
                            <EditIcon fontSize="small" />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Add Like">
                        <IconButton aria-label="like" size="small" color="error" onClick={() => likeCounter(item)}>
                            <FavoriteIcon fontSize="small" />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete post">
                        <IconButton aria-label="delete" size="small" color="secondary" onClick={() => deletePost(item)}>
                            <DeleteIcon fontSize="small" />
                        </IconButton>
                    </Tooltip>
                </div>
            </CardContent>
        </Card >
    )

}

export default GalleryItem;
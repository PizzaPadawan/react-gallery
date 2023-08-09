import { useState } from "react"
import axios from "axios";
import "./GalleryList.css"
import Swal from "sweetalert2";
import { Item } from "../../Item";

import {
    IconButton,
    Card,
    CardMedia,
    CardActionArea,
    CardContent,
    Typography
} from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';

interface Props {
    getGallery: () => void;
    item: Item;
}

const GalleryItem: React.FC<Props> = ({ getGallery, item }) => {

    const likeCounter = (imgId: number) => {
        axios.put(`/gallery/like/${imgId}`)
            .then(() => getGallery())
            .catch((err) => alert(err));
    }

    const deletePost = (imgId: number) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "This post will be deleted forever!",
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
                axios.delete(`/gallery/${imgId}`)
                    .then(() => getGallery())
                    .catch((err) => alert(err));
            }
        })
    }

    const [showDescription, setShowDescription] = useState<boolean>(false);

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
        <Card key={item.id}>
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
                    <IconButton size="small" color="error" onClick={() => likeCounter(item.id)}>
                        <FavoriteIcon fontSize="small" />
                    </IconButton>
                    <IconButton aria-label="delete" size="small" color="secondary" onClick={() => deletePost(item.id)}>
                        <DeleteIcon fontSize="small" />
                    </IconButton>
                </div>
            </CardContent>
        </Card >
    )

}

export default GalleryItem;
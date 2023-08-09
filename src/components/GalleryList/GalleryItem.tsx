import { useState } from "react"
import axios from "axios";
import "./GalleryList.css"
import Swal from "sweetalert2";
import { IconButton } from "@mui/material";
import { Item } from "../../Item";
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';


interface Props{
    getGallery: () => void;
    item: Item;
}

const GalleryItem: React.FC<Props> = ({getGallery, item}) => {

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
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
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

    const backgroundStyle: React.CSSProperties = {
        position: 'absolute',
        width: '247px',
        height: '247px',
        backgroundImage: `url(${item.path})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '10px',
        filter: 'blur(1px)',
        zIndex: -1,
    }

    return (
            <div className="galleryItem" key={item.id}>
                {showDescription
                    ? <><div style={backgroundStyle} />
                        <p className="caption" onClick={() => setShowDescription(false)}>{item.description}</p></>
                    : <><img src={item.path} onClick={() => setShowDescription(true)} /></>}
                <p>{item.likes} likes</p>
                <IconButton size="small" color="error" onClick={() => likeCounter(item.id)}>
                    <FavoriteIcon fontSize="small" />
                </IconButton>
                <IconButton aria-label="delete" size="small" color="secondary" onClick={() => deletePost(item.id)}>
                    <DeleteIcon fontSize="small" />
                 </IconButton>
            </div>
            )

}

export default GalleryItem;
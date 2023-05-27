import { useState } from "react"
import axios from "axios";
import "./GalleryList.css"

export default function GalleryItem({ getGallery, item }) {

    const likeCounter = (imgId) => {
        axios.put(`/gallery/like/${imgId}`)
            .then(() => getGallery())
            .catch((err) => alert(err));
    }

    const [showDescription, setShowDescription] = useState(false);

    const backgroundStyle = {
        position: 'absolute',
        width: '250px',
        height: '250px',
        backgroundImage: `url(${item.path})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '10px',
        filter: 'blur(1px)',
        zIndex: -1,
    };


    return (
        <div className="galleryItem" key={item.id}>
            {showDescription
                ? <><div style={backgroundStyle} />
                    <p className="caption" onClick={() => setShowDescription(false)}>{item.description}</p></>
                : <><img  src={item.path} onClick={() => setShowDescription(true)} /></>}
            <p>{item.likes} likes</p>
            <button onClick={() => likeCounter(item.id)}>&hearts;</button>
        </div>
    )

}
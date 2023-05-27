import { useState } from "react"
import "./GalleryList.css"

export default function GalleryItem({ key, path, description, likes }) {

    const [showDescription, setShowDescription] = useState(false);

    const containerStyle = {
        position: 'relative',
    };

    const backgroundStyle = {
        position: 'absolute',
        width: '250px',
        height: '250px',
        backgroundImage: `url(${path})`,
        backgroundSize: 'cover',
        filter: 'blur(8px)',
        zIndex: -1,
    };


    return (
        <div className="galleryItem" key={key}>
                {showDescription
                    ? <><div style={backgroundStyle} />
                    <p className="caption" onClick={() => setShowDescription(false)}>{description}</p></>
                    : <><img src={path} onClick={() => setShowDescription(true)} /></>}
            <p className="likes">{likes} likes</p>
            <button className="likes">&hearts;</button>
        </div>
    )

}
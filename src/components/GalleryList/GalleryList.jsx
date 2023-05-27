import './GalleryItem'
import './GalleryList.css'
import GalleryItem from './GalleryItem'


export default function GalleryList({galleryArray, getGallery}){
    return (
    <div className="gallery">
        {galleryArray.map(item => (
            <GalleryItem getGallery={getGallery} item={item} />
        ))}
    </div>
    )
}
import './GalleryItem'
import './GalleryList.css'
import GalleryItem from './GalleryItem'


export default function GalleryList({galleryArray}){
    return (
    <div className="gallery">
        {galleryArray.map(item => (
            <GalleryItem key={item.id} path={item.path} description={item.description} likes={item.likes} />
        ))}
    </div>
    )
}
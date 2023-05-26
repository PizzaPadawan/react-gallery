import './GalleryItem'
import GalleryItem from './GalleryItem'

export default function GalleryList({galleryArray}){
    return (
    <div>
        {galleryArray.map(item => (
            <GalleryItem key={item.id} path={item.path} description={item.description} />
        ))}
    </div>
    )
}
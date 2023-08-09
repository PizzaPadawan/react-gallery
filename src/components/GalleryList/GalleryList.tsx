import './GalleryItem'
import './GalleryList.css'
import GalleryItem from './GalleryItem'
import { Item } from '../../Item'

interface Props {
    getGallery: () => void;
    galleryArray: [Item];
}

 const GalleryList: React.FC<Props> = ({galleryArray, getGallery}) => {
    return (
    <div className="gallery">
        {galleryArray.length > 0 && galleryArray.map(item => (
            <GalleryItem getGallery={getGallery} item={item} />
        ))}
    </div>
    )
}

export default GalleryList;
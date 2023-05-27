import "./GalleryList.css"

export default function GalleryItem({key, path, description, likes}){

    return (
    <div className="galleryItem" key={key}>
        <img src={path}/>
        <p>{likes} likes</p>
        <button>&hearts;</button>
    </div>
    )
}
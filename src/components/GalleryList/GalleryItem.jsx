export default function GalleryItem({key, path, description}){
    return (
    <div key={key}>
        <img src={path} alt={description}/>
    </div>
    )
}
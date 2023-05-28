import { useState } from "react";
import axios from "axios";

export default function SubmitForm({getGallery}) {

    let [newPath, setNewPath] = useState();
    let [newDesc, setNewDesc] = useState();

    const newPost = () => {
        const posty = {
            path: newPath,
            description: newDesc
        }

        axios.post('/gallery', posty)
            .then(() => {
                setNewPath('')
                setNewDesc('')
                getGallery();
            })
            .catch((err) => alert(err));
    }

    return (
        <div>
            <h3>Add to the Gallery:</h3>
            <input type="text" placeholder="image url here"
                value={newPath} onChange={(e) => setNewPath(e.target.value)} />
            <input type="text" placeholder="poetic caption here"
                value={newDesc} onChange={(e) => setNewDesc(e.target.value)} />
            <button onClick={() => newPost()}>Post</button>
        </div>
    )

}
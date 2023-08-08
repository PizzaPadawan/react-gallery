import { useState } from "react";
import axios from "axios";
import { Button, Container, TextField } from "@mui/material";

interface Props {
    getGallery: () => void;
}

const SubmitForm: React.FC<Props> = ({ getGallery }) => {

    let [newPath, setNewPath] = useState<string>('');
    let [newDesc, setNewDesc] = useState<string>('');

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
        <Container>
            <h3>Add to the Gallery:</h3>
            <TextField
                id="outlined-basic"
                variant="outlined"
                type="text"
                label="image url"
                value={newPath}
                onChange={(e) => setNewPath(e.target.value)} />
            <TextField id="outlined-multiline-flexible"
                multiline
                maxRows={4}
                type="text"
                label="poetic caption"
                value={newDesc}
                onChange={(e) => setNewDesc(e.target.value)} />
            <br></br>
            <Button
                size="large"
                variant="text"
                color="success"
                onClick={() => newPost()}>Post</Button>
        </Container>
    )

}

export default SubmitForm;
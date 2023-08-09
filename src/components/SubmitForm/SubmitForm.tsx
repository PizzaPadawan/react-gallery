import { useState } from "react";
import axios from "axios";
import {
    Button,
    Grid,
    TextField,
    Typography,
}
    from "@mui/material";

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
        <Grid container sx={{ pb: 2, m: 'auto', display: 'flex', flexDirection: 'column', alignContent: 'center' }} >
            <Grid item xs={12}>
                <Typography
                    align='center'
                    variant="h6"
                    variantMapping={{ h6: 'h2' }}
                >Add to the Gallery:
                </Typography>
            </Grid>
            <Grid item xs={12} sx={{ my: 1 }}>
                <TextField
                    sx={{ width: '13em', mx: 1 }}
                    type="text"
                    label="image url"
                    value={newPath}
                    onChange={(e) => setNewPath(e.target.value)} />
                <TextField
                    sx={{ width: '13em', mx: 1 }}
                    multiline
                    maxRows={4}
                    type="text"
                    label="poetic caption"
                    value={newDesc}
                    onChange={(e) => setNewDesc(e.target.value)} />
                <Button
                    sx={{ m: 1 }}
                    size="large"
                    variant="contained"
                    color="secondary"
                    onClick={() => newPost()}>Post</Button>
            </Grid>
        </Grid>
    )

}

export default SubmitForm;
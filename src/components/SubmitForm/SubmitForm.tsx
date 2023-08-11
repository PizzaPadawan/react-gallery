import { useState, Dispatch, SetStateAction } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Item } from "../../Item";
import {
    Button,
    Grid,
    TextField,
    Typography,
}
    from "@mui/material";

interface Props {
    editMode: boolean;
    setEditMode: Dispatch<SetStateAction<boolean>>;
    selected: Item;
    setSelected: Dispatch<SetStateAction<Item>>;
}

const SubmitForm: React.FC<Props> = ({ editMode, setEditMode, selected, setSelected }) => {

    const [newPath, setNewPath] = useState<string>('');
    const [newDesc, setNewDesc] = useState<string>('');
    const dispatch = useDispatch();
    const galleryArray = useSelector((state: { gallery: Item[] }) => state.gallery);

    const newPost = () => {
        const postItem = {
            id: (galleryArray[galleryArray.length - 1].id + 1),
            path: newPath,
            description: newDesc,
            likes: 0
        }

        dispatch({
            type: "POST_GALLERY",
            payload: postItem
        });

        clearEdit();
    }

    const editDescription = (item: Item) => {

        dispatch({
            type: "PUT_DESCRIPTION",
            payload: {
                id: item.id,
                path: item.path,
                description: newDesc,
                likes: item.likes,
            }
        });

        clearEdit();
    }

    const clearEdit = () => {
        setNewDesc('');
        setNewPath('');
        setSelected({
            id: 0,
            path: '',
            description: '',
            likes: 0,
        });
        setEditMode(false);

    }

    return (
        <Grid container sx={{ py: 2, m: 'auto', display: 'flex', flexDirection: 'column', alignContent: 'center' }} >
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
                    value={newDesc || selected.description}
                    onChange={(e) => setNewDesc(e.target.value)} />
                {editMode
                    ? <>
                        <Button
                            sx={{ m: 1 }}
                            size="large"
                            variant="contained"
                            color="secondary"
                            onClick={() => editDescription(selected)}>Save</Button>
                        <Button
                            sx={{ m: 1 }}
                            size="large"
                            variant="contained"
                            color="secondary"
                            onClick={() => clearEdit()}>Cancel</Button>
                    </>

                    : <Button
                        sx={{ m: 1 }}
                        size="large"
                        variant="contained"
                        color="secondary"
                        onClick={() => newPost()}>Post</Button>
                }
            </Grid>
        </Grid >
    )

}

export default SubmitForm;
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

// interface
import { Item } from '../../Item';

// Components
import GalleryList from '../GalleryList/GalleryList';
import SubmitForm from '../SubmitForm/SubmitForm';

// MUI
import {
  ThemeProvider,
  createTheme
} from '@mui/material/styles';
import {
  Container,
  Typography,
  Paper,
  Collapse,
  Link,
  Divider,
  CardActionArea
} from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#c69f68',
    },
    secondary: {
      main: '#4b5975',
    },
    text: {
      primary: '#ccccb5',
    },
    background: {
      paper: '#191f28',
    },
    error: {
      main: '#b81b2c',
    },
    info: {
      main: '#3a61bd',
    },
    warning: {
      main: '#cb671c',
    },
    success: {
      main: '#53754b',
    },
    divider: '#141a22',
  },
  typography: {
    fontFamily: 'Ysabeau Office',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 800,
  }
});


const App: React.FC = () => {

  useEffect(() => {
    getGallery()
  }, [])

  const dispatch = useDispatch();

  const getGallery = () => {
    dispatch({ type: "FETCH_GALLERY" });
  }

  const [editMode, setEditMode] = useState<boolean>(false);
  const [selected, setSelected] = useState<Item>({
    id: 0,
    path: '',
    description: '',
    likes: 0,
  })
  const [open, setOpen] = useState<boolean>(false);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container maxWidth='md' >
        <Paper sx={{ my: 2, p: 3 }}>
          <CardActionArea onClick={() => setOpen(!open)}
          >
            <Typography
              sx={{ p: 3 }}
              align='center'
              variant="h3"
              color="primary"
              variantMapping={{ h3: "h1" }}>
              Gallery of My Life
            </Typography>
          </CardActionArea>
          <Collapse in={open} >
            <Typography align='center' sx={{ p: 1 }}>
              Welcome to the Gallery! This was originally a weekend project during my time at Emerging Digital Academy on the first week we learned React.
              I decided to come back to it after I graduated, spruce up the styling, convert it to TypeScript, and transfer all of the CRUD capabilities into
              Redux state (so you hooligans can't delete my pictures and replace them with memes!)
            </Typography>
            <Typography align='center' sx={{ p: 1 }}>
              You can click on a picture to see its caption, click the edit button to edit the caption, click the heart button to add likes, and click the trash button
              to delete a gallery item. You can also upload a new post via the form below.
              The pictures pre-loaded come from the database, but any changes made or new posts added are only temporary and will
              revert when you refresh the page.
            </Typography>
            <Typography align='center' sx={{ p: 1 }}>
              Thanks for checking this out!
            </Typography>
            <Typography align='center' sx={{ pt: 1, pb: 3 }} variant="body2">
              If you'd like to know more, feel free to contact me at my <Link href='mailto:kord.r.maurer@gmail.com'>email</Link> or
              on <Link href="https://www.linkedin.com/in/kord-maurer" rel="noopener noreferrer" target=".blank" >LinkedIn</Link>,
              or check out the repository
              on <Link href="https://github.com/PizzaPadawan/react-gallery" rel="noopener noreferrer" target=".blank" >GitHub</Link>!
            </Typography>
          </Collapse>
          <SubmitForm editMode={editMode} setEditMode={setEditMode} selected={selected} setSelected={setSelected} />
        </Paper>
        <GalleryList setEditMode={setEditMode} setSelected={setSelected} />
      </Container>
    </ThemeProvider >
  );
}

export default App;

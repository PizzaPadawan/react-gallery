import React, { useState, useEffect } from 'react';
// import './App.css';
import axios from 'axios';

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
  Paper
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

  const [galleryArray, setGalleryArray] = useState<[Item]>([{
    id: 0,
    path: 'https://media.istockphoto.com/id/1355858742/vector/robot-error-404-concept.jpg?s=612x612&w=0&k=20&c=04qQhOyGLu6dOmqL9yAx5nUZ7c3dlFngioVG8GUHM3k=',
    description: 'default',
    likes: 0
  }]);

  const getGallery = () => {
    axios.get('/gallery')
      .then((response) => {
        console.log(response.data)
        setGalleryArray(response.data)
      })
      .catch(err => alert(err))
  }


  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container>
        <Container maxWidth='md' >
          <Paper sx={{ my: 2 }}>
            <Typography
              sx={{ p: 3 }}
              align='center'
              variant="h3"
              color="primary"
              variantMapping={{ h3: "h1" }}>
              Gallery of My Life
            </Typography>
            <SubmitForm getGallery={getGallery} />
          </Paper>
        </Container>
        <GalleryList galleryArray={galleryArray} getGallery={getGallery} />
      </Container>
    </ThemeProvider >
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';
import SubmitForm from '../SubmitForm/SubmitForm';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


function App() {

  useEffect(() => {
    getGallery()
  }, [])

  const [galleryArray, setGalleryArray] = useState([]);

  function getGallery() {
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
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <SubmitForm getGallery={getGallery} />
        <GalleryList galleryArray={galleryArray} getGallery={getGallery} />
      </div>
    </ThemeProvider>
  );
}

export default App;

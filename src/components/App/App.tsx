import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { Item } from '../../Item';
import GalleryList from '../GalleryList/GalleryList';
import SubmitForm from '../SubmitForm/SubmitForm';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
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

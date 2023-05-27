import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';


function App() {

  useEffect(() => {
    getGallery()
  }, [])

  const[galleryArray, setGalleryArray] = useState([]);

  function getGallery(){
    axios.get('/gallery')
    .then((response) => {
      console.log(response.data)
      setGalleryArray(response.data)
    })
    .catch(err => alert(err))
  }


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <GalleryList galleryArray={galleryArray} getGallery={getGallery}/>
      </div>
    );
}

export default App;

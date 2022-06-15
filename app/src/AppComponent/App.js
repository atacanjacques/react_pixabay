import './App.css';
import { useState, useEffect } from 'react';
import pixabayApiService from '../services/pixabayApiService';
import AppPicture from './AppPictureComponent/AppPicture';


function App() {
  const [searchImagesResult, setSearchImagesResult] = useState([]);
  const [searchQuery, setSearchQuery] = useState("yellow flowers");

  useEffect(() => {
    // Retrieve images from Pixabay 
    pixabayApiService.searchImagesByQuery(searchQuery)
      .then((result) => {
        return setSearchImagesResult(result.hits);
      });
  }, [searchQuery]);


  return (
    <div className="App">
      <input type="text" placeholder="Search ..." onChange={(e) => setSearchQuery(e.target.value)}/>

        {Object.keys(searchImagesResult).map((key) => {
          let item = searchImagesResult[key];
          return <AppPicture key={key} data={item} />
        })}
    </div>
  );
}

export default App;

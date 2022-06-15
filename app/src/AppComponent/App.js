import './App.css';
import { useState, useEffect } from 'react';
import pixabayApiService from '../services/pixabayApiService';


function App() {
  const [searchImagesResult, setSearchImagesResult] = useState(0);

  useEffect(() => {
    pixabayApiService.searchImagesByQuery("yellow flowers")
      .then((result) => {
        return setSearchImagesResult(result.hits);
      })
  }, []);


  return (
    <div className="App">
        {Object.keys(searchImagesResult).map((key) => {
          return <img src={searchImagesResult[key].previewURL} />
        })}
    </div>
  );
}

export default App;

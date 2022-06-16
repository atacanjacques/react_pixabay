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
        return setSearchImagesResult(result.hits.slice(0, 6));
      })
      .catch(() => {
        return setSearchImagesResult([]);
      });
  }, [searchQuery]);


  return (
    <div className="m-10 p-5 rounded-lg border-solid border-2 border-gray-500 bg-gray-300">
      <div className="w-full flex mb-5">
        <input className="w-full md:w-auto p-1 pl-5 m-auto	border-solid border-1 border-gray-500 focus:outline-none placeholder:text-black" type="text" placeholder="Search ..." onChange={(e) => setSearchQuery(e.target.value)} />
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {
          searchImagesResult.length ? Object.keys(searchImagesResult).map((key) => {
            let item = searchImagesResult[key];
            return <AppPicture key={key} data={item} />
          })
            : <span className="col-span-3 text-center">An error has occured. Can't find any image.</span>
        }
      </div>
    </div>
  );
}

export default App;

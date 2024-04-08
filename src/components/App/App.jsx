import { useState } from 'react';
import ImageGallery from '../ImageGallery';
// import ImageModal from '../ImageModal';
import LoadMoreBtn from '../LoadMoreBtn';
import Loader from '../Loader';
import SearchBar from '../SearchBar';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [galleryImages, setGalleryImages] = useState([]);

  const handleSearchSubmit = (newQuery) => {
    setSearchQuery(newQuery);
  };

  return (
    <>
      <SearchBar handleSearchSubmit={handleSearchSubmit} />
      <Loader />
      <ImageGallery />
      <LoadMoreBtn />
      {/* <ImageModal
        isOpen={false}
        url="https://cdn.pixabay.com/photo/2016/03/28/12/35/cat-1285634_1280.png"
      /> */}
    </>
  );
}

export default App;

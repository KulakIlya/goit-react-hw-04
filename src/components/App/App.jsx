import { useEffect, useRef, useState } from 'react';

import ErrorMessage from '../ErrorMessage';
import ImageGallery from '../ImageGallery';
import ImageModal from '../ImageModal';
import LoadMoreBtn from '../LoadMoreBtn';
import Loader from '../Loader';
import SearchBar from '../SearchBar';

import { fetchImages } from '../../api/unsplash-api';

const INITIAL_MODAL_INFO = {
  isOpen: false,
  url: '',
  description: '',
};

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [galleryImages, setGalleryImages] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, serError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [modalInfo, setModalInfo] = useState(INITIAL_MODAL_INFO);

  const appRef = useRef();

  const handleSearch = (newQuery) => {
    if (newQuery === searchQuery) return;

    setCurrentPage(1);
    setSearchQuery(newQuery);
    setGalleryImages([]);
  };

  const handleLoadMore = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const handleModalClose = () => setModalInfo(INITIAL_MODAL_INFO);

  const handleImageClick = ({ url, description }) => {
    setModalInfo({ isOpen: true, url, description });
  };

  useEffect(() => {
    if (searchQuery === '') return;

    async function getImages() {
      setStatus('loading');
      try {
        const data = await fetchImages(searchQuery, currentPage);

        if (data.results.length === 0) throw new Error('No results found');

        setGalleryImages((prev) => [...prev, ...data.results]);
        setStatus('idle');
      } catch (error) {
        setStatus('rejected');
        serError(error);

        throw new Error(error.message);
      }
    }
    getImages();
  }, [searchQuery, currentPage]);

  useEffect(() => {
    if (currentPage === 1) return;

    appRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [galleryImages, currentPage]);

  return (
    <div ref={appRef}>
      <SearchBar onSearch={handleSearch} />

      {status === 'loading' && galleryImages.length === 0 && <Loader />}

      {galleryImages.length > 0 && (
        <>
          <ImageGallery items={galleryImages} onImageClick={handleImageClick} />

          {status === 'loading' && <Loader />}
          {status === 'rejected' && <ErrorMessage message={error.message} />}
          {status !== 'rejected' && <LoadMoreBtn onClick={handleLoadMore} />}
        </>
      )}

      {status === 'rejected' && galleryImages.length === 0 && (
        <ErrorMessage message={error.message} />
      )}

      <ImageModal
        isOpen={modalInfo.isOpen}
        url={modalInfo.url}
        description={modalInfo.description}
        onClose={handleModalClose}
      />
    </div>
  );
}

export default App;

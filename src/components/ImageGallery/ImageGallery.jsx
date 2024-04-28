import PropTypes from 'prop-types';

import ImageCard from '../ImageCard';

import styles from './ImageGallery.module.css';

const ImageGallery = ({ items, onImageClick }) => {
  return (
    <ul className={styles.gallery}>
      {/* Набір елементів списку із зображеннями */}
      {items.map(({ id, urls: { small, regular }, description }) => (
        <li key={id} className={styles.galleryItem}>
          <ImageCard
            url={small}
            description={description}
            onImageClick={() => onImageClick({ url: regular, description })}
          />
        </li>
      ))}
    </ul>
  );
};
export default ImageGallery;

ImageGallery.propTypes = {
  items: PropTypes.array,
  onImageClick: PropTypes.func,
};

import PropTypes from 'prop-types';

import styles from './ImageCard.module.css';

const ImageCard = ({ url, description }) => {
  return (
    <div>
      <img className={styles.image} src={url} alt={description} />
    </div>
  );
};
export default ImageCard;

ImageCard.propTypes = {
  url: PropTypes.string,
  description: PropTypes.string,
};

import PropTypes from 'prop-types';
import ReactModal from 'react-modal';

import styles from './ImageModal.module.css';

const ImageModal = ({ isOpen, url, description }) => {
  return (
    <ReactModal
      className={styles.modal}
      overlayClassName={styles.overlay}
      isOpen={isOpen}
      ariaHideApp={false}
      preventScroll={true}
    >
      <div>
        <img src={url} alt={description} className={styles.modalImage} />
      </div>
    </ReactModal>
  );
};
export default ImageModal;

ImageModal.propTypes = {
  isOpen: PropTypes.bool,
  url: PropTypes.string,
  description: PropTypes.string,
};

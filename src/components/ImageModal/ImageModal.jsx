import PropTypes from 'prop-types';
import ReactModal from 'react-modal';

import styles from './ImageModal.module.css';

const ImageModal = ({ isOpen, url, description, onClose }) => {
  return (
    <ReactModal
      portalClassName={styles.modalPortal}
      className={styles.modal}
      overlayClassName={styles.overlay}
      isOpen={isOpen}
      ariaHideApp={false}
      shouldCloseOnEsc={true}
      onRequestClose={onClose}
    >
      <img src={url} alt={description} className={styles.modalImage} />
    </ReactModal>
  );
};
export default ImageModal;

ImageModal.propTypes = {
  isOpen: PropTypes.bool,
  url: PropTypes.string,
  description: PropTypes.string,
  onClose: PropTypes.func,
};

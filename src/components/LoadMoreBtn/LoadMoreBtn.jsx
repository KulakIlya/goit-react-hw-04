import PropTypes from 'prop-types';

import styles from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ onClick }) => {
  return (
    <button onClick={onClick} className={styles.button}>
      Load more
    </button>
  );
};
export default LoadMoreBtn;

LoadMoreBtn.propTypes = {
  onClick: PropTypes.func,
};

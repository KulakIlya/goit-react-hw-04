import PropTypes from 'prop-types';
import styles from './ErrorMessage.module.css';

const ErrorMessage = ({ message }) => {
  return <p className={styles.message}>{message}</p>;
};
export default ErrorMessage;

ErrorMessage.propTypes = {
  message: PropTypes.string,
};

import { MagnifyingGlass } from 'react-loader-spinner';

import styles from './Loader.module.css';

const Loader = () => {
  return <MagnifyingGlass wrapperClass={styles.spinner} />;
};
export default Loader;

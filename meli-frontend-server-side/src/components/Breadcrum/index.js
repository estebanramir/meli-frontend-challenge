import PropTypes from 'prop-types';
import styles from './Breadcrum.module.scss';

function Breadcrum({ categories = [] }) {
  const categoriesLength = categories.length;
  return (
    <div className={styles['breadcrum']}>
      {categories.map((category, index) => {
        return index === categoriesLength - 1 ? (
          <span key={`${category}${index}`}>{category}</span>
        ) : (
          <div
            key={`${category}${index}`}
            className={styles['breadcrum-category']}
          >
            <a href='#'>{category}</a>
            <img
              src='/chevron.svg'
              className={styles['breadcrum-divider']}
              alt='arrow icon'
            ></img>
          </div>
        );
      })}
    </div>
  );
}

Breadcrum.propTypes = {
  categories: PropTypes.array,
};
export default Breadcrum;

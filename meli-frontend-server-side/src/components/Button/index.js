import PropTypes from 'prop-types';
import styles from './Button.module.scss';

function Button({ children, ariaLabel, type = 'button' }) {
  return (
    <button className={styles['button']} aria-label={ariaLabel} type={type}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  ariaLabel: PropTypes.string,
  type: PropTypes.string,
};
export default Button;

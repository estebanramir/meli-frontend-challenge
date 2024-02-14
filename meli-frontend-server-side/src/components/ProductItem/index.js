import PropTypes from 'prop-types';
import Link from 'next/link';

import styles from './ProductItem.module.scss';
function ProductItem(props) {
  const {
    id,
    price,
    title,
    picture,
    free_shipping,
    state_name,
  } = props.product;
  const detailUrl = `/items/${id}-${encodeURIComponent(title)}`;

  const priceFormatter = (value) => {
    const formatter = new Intl.NumberFormat('de', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
    return `$ ${formatter.format(value.amount)}`;
  };

  return (
    <li className={styles['productItem']}>
      <Link className={styles['productItem-imageWrapper']} href={detailUrl}>
          <img
            src={picture}
            className={styles['productItem-image']}
            alt={`${title} thumbnail`}
          />
      </Link>

      <div className={styles['productItem-brief']}>
        <div className={styles['productItem-briefHeader']}>
          <span className={styles['productItem-price']}>
            {price ? priceFormatter(price) : ''}
          </span>
          {free_shipping && (
            <span className={styles['productItem-freeShipping']}>
              <img src='/truck.svg' alt='icono envio gratis' />
            </span>
          )}
        </div>

        <Link href={detailUrl}>
            <h2 className={styles['productItem-title']}>{title}</h2>
        </Link>
      </div>
      <div className={styles['productItem-location']}>
        <address className={styles['productItem-city']}>{state_name}</address>
      </div>
    </li>
  );
}

ProductItem.propTypes = {
  product: PropTypes.object,
};
export default ProductItem;

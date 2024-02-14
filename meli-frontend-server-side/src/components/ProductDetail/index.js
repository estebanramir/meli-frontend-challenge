import PropTypes from 'prop-types';
import Button from '../Button';

import styles from './ProductDetail.module.scss';

function ProductDetail(props) {
  const {
    price,
    title,
    picture,
    description,
    condition,
    sold_quantity,
  } = props.product;

  const priceFormatter = (value) => {
    const formatter = new Intl.NumberFormat('de', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
    return `$ ${formatter.format(value.amount)}`;
  };

  return (
    <section className={styles['productDetail']}>
      <div className={styles['productDetail-imageWrapper']}>
        <img
          src={picture}
          className={styles['productDetail-image']}
          alt={title}
        />
      </div>

      <div className={styles['productDetail-sideContent']}>
        <div className={styles['productDetail-condition']}>
          <span>{condition}</span> - <span>{sold_quantity} vendidos</span>
        </div>
        <h1 className={styles['productDetail-title']}>{title}</h1>
        <span className={styles['productDetail-price']}>
          <span>{price ? priceFormatter(price) : ''}</span>
          <span className={styles['productDetail-priceDecimals']}>
            {price.decimals || '00'}
          </span>
        </span>
        <Button type='button' ariaLabel='comprar'>
          Comprar
        </Button>
      </div>
      <div className={styles['productDetail-mainContent']}>
        <h2 className={styles['productDetail-descTitle']}>
          Descripción del producto
        </h2>
        <p className={styles['productDetail-description']}>{description}</p>
      </div>
    </section>
  );
}

ProductDetail.propTypes = {
  product: PropTypes.object,
};
export default ProductDetail;

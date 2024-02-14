import PropTypes from 'prop-types'
import styles from './ProductList.module.scss'

import ProductItem from '@/components/ProductItem'

function ProductsList({ products = [] }) {
    return (
        <ul className={styles['productsList']}>
            {products.map((product) => (
                <ProductItem product={product} key={product.id} />
            ))}
        </ul>
    )
}

ProductsList.propTypes = {
    products: PropTypes.array,
}
export default ProductsList

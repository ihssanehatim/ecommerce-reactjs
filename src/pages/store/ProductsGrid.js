import React, { useContext } from 'react';
import ProductItem from './ProductItem';
import { ProductsContext } from '../../contexts/ProductsContext';
import styles from './ProductsGrid.module.scss';

const ProductsGrid = () => {

    const { products} = useContext(ProductsContext)

    return (
        <div className={styles.p__container}>
            <div className="row">
                <div className="col-sm-4">
                    <div className="form-group">
                        <input type="text" name="" placeholder="Search product" className="form-control" id=""/>
                    </div>
                </div>
            </div>
            <div className={styles.p__grid}>

                {

                        <ProductItem key={products[0].id} product={products[0]}/>
                }

            </div>
            <div className={styles.p__footer}>

            </div>
        </div>
     );
}

export default ProductsGrid;

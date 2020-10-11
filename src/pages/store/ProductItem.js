import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import { formatNumber } from '../../helpers/utils';

const ProductItem = ({product}) => {

    const { addProduct, cartItems, increase } = useContext(CartContext);

    const isInCart = product => {
        return !!cartItems.find(item => item.id === product.id);
    }

    return (
        <div className="card card-body">
            <img style={{display: "block", margin: "0 auto 10px", maxHeight: "200px"}} className="img-fluid"
            src={`${process.env.REACT_APP_HOST}${product.image.url}`} alt=""/>
            <p>{product.title}</p>
            <h3 className="text-left">{formatNumber(product.price)}</h3>
            <div className="text-right">
                <Link  to="/" className="btn btn-link btn-sm mr-2">Details</Link>

                {
                    isInCart(product) &&
                    <button
                    onClick={() => increase(product)}
                    className="btn btn-outline-primary btn-sm">Add more</button>
                }

                {
                    !isInCart(product) &&
                    <button type="button"
                    className="snipcart-add-item btn btn-outline-danger btn-sm"
                    data-item-name={product.title}
                    data-item-price="22.23"
                    data-item-description={product.description}
                    data-item-min-quantity="0"
                    data-item-max-quantity={product.Qte}
                    data-item-id={product.id}
                    data-item-image={`${process.env.REACT_APP_HOST}${product.image.url}`}
                    data-item-url="/">
                        Add to cart
                    </button>
                }

            </div>
        </div>
     );
}

export default ProductItem;

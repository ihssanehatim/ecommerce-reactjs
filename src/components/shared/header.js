import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { CartContext } from '../../contexts/CartContext';
import {CartIcon} from '../icons';
import styles from './header.module.scss';

const Header = () => {

    const {itemCount} = useContext(CartContext);

    return (
        <header className={styles.header}>
            <Link to='/'>Store</Link>
            <Link to='/about'>About</Link>
            <Link to='/cart' class="snipcart-checkout"> <CartIcon/> Cart (<span class="snipcart-items-count">0</span>)</Link>
              <a href="/#/dashboard" class="snipcart-user-profile">
              <span><img src="https://img.icons8.com/officel/16/000000/guest-male.png"/></span>  Account
              </a>
        </header>
     );
}

export default Header;

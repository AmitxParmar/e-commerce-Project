import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import CartColumns from './CartColumns'
import CartItem from './CartItem';
import CartTotals from './CartTotals';

import { useCartContext } from '../context/cart_context';

const CartContent = () => {
    const { cart, clearCart } = useCartContext();

    return (
        <Wrapper className='section section-center'>
            <CartColumns />
            {cart.map(item => (
                <CartItem key={item.id} {...item} />
            ))}
            <hr />

            <div className='link-container'>
                <Link to='/products' className='link-btn'>
                    continue shopping
                </Link>
                <button className="link-btn" onClick={clearCart(null)}>
                    clear  cart
                </button>
            </div>
            <CartTotals />
        </Wrapper>
    )
}

const Wrapper = styled.section`
    .link-container {
        display: flex;
        justify-content: space-between;
        margin-top: 2rem;
    }
    .link-btn {
        background: transparent;
    }
`
export default CartContent
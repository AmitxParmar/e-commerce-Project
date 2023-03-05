import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import CartColumns from './CartColumns'
import CartItem from './CartItem';
import CartTotals from './CartTotal';

const CartContent = () => {
    return (
        <Wrapper className='section section-center'>
            <CartColumns />

            <hr />

            <div className='link-container'>
                <Link to='/products' className='link-btn'>
                    continue shopping
                </Link>
                <button className="link-btn">
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
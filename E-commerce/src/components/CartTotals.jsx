import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

import { formatPrice } from './../utils/helpers';
import { useCartContext } from '../context/cart_context';
import { useUserContext } from '../context/user_context';
import { signInWithPopup } from 'firebase/auth';

const CartTotals = () => {
    const { totalAmount, shippingFee } = useCartContext();
    const { myUser, isAuthenticated, signInWithGoogle } = useUserContext();

    return (
        <Wrapper>
            <div>
                <article>
                    <h5>
                        subtotal  :  <span>{formatPrice(totalAmount)}</span>
                    </h5>
                    <p>
                        shipping fee: <span>{formatPrice(shippingFee)}</span>
                    </p>
                    <hr />
                    <h4>
                        order total :<span>{formatPrice(totalAmount + shippingFee)}</span>
                    </h4>
                </article>
                {myUser && isAuthenticated ? (
                    <Link to="/checkout" className='btn'>
                        proceed to checkout
                    </Link>
                ) : (
                    <button type='button' className='btn' onClick={signInWithGoogle}>
                        login to checkout
                    </button>
                )}
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.section`
    margin-top: 3rem;
    display: flex;
    justify-content: center;
    article {
        border: 1px solid var(--clr-grey-8);
        border-radius: var(--radius);
        padding: 1.5rem 3rem;
    }
    h4,
    h5,
    p {
        display: grid,
        grid-template-columns: 200px 1fr;
    }
    P {
        text-transform: capitalize;
    }
    h4{
        margin-top: 2rem;
    }
    @media(min-width: 776px) {
        justify-content: flex-end;
    }
    .btn {
        width: 100%;
        margin-top: 1rem;
        text-align: center;
        font-weight: 700;
    }
`;

export default CartTotals
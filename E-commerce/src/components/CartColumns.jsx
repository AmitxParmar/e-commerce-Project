import React from 'react'
import styled from 'styled-components'

const CartColumns = () => {
    return (
        <Wrapper>
            <div className='content'>
                <h5>item</h5>
                <h5>price</h5>
                <h5>quantity</h5>
                <h5>subtotal</h5>
                <span></span>
            </div>
            <hr />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: none;
    @media(min-width: 776) {
        display: block;
    }
`

export default CartColumns
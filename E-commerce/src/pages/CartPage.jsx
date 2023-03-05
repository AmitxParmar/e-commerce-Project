import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { PageHero, CartContent } from '../components'

const CartPage = () => {
    React.useEffect(() => {
        document.title = "Cart"
    }, [])

    if (false) { // if no cart items render this
        return (
            <main>
                <PageHero title='cart' />
                <Wrapper className='page'>
                    <div className='empty'>
                        <br />
                        <br />
                        <h2>Your Cart Is Empty :(</h2> <br />
                        <Link to='/products' className='btn'>
                            continue shopping
                        </Link>
                    </div>
                </Wrapper>
            </main>
        )
    }
    return (
        <main>
            <PageHero title='cart' />
            <Wrapper className='page'>
                <CartContent />
            </Wrapper>
        </main>
    )
}
const Wrapper = styled.main`
    .empty {
        text-align: center;
    }
`;

export default CartPage
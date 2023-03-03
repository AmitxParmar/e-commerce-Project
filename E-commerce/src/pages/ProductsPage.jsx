import React from 'react'
import { PageHero } from '../components'
import styled from 'styled-components'


const ProductsPage = () => {
    return (
        <main id='main'>
            <PageHero title='products' />
            <Wrapper className='page'>
                <div className='section-center products'>
                    {/* Filter component goes goes here */}
                    <div>
                        {/* Sort Component Goes Here */}
                        {/* Product List Goes Here */}
                    </div>
                </div>
            </Wrapper>
        </main>
    );
};

const Wrapper = styled.div`
    .products {
        display: grid;
        gap: 3rem 1.5rem;
        margin: 4rem auto;
    }

    @media (min-width: 768px) {
        .products {
            grid-template-columns: 200px 1fr;
        }
}
`;

export default ProductsPage
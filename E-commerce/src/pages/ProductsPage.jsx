import React from 'react'
import { PageHero, ProductList, Filters, Sort } from '../components'
import styled from 'styled-components'


const ProductsPage = () => {

  React.useEffect(() => {
    document.title = "Products"
  }, []);

  return (
    <main id='main'>
      <PageHero title='products' />
      <Wrapper className='page'>
        <div className='section-center products'>
          <Filters />
          <div>
            <Sort />
            <ProductList />
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
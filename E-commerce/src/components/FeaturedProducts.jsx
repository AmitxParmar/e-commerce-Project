import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Error from './Error'
import Loading
    from './Loading'


const FeaturedProducts = () => {
    return (
        <Wrapper>
            Featured products goes here
            <div className='title'>
                <h2>Featured products</h2>
                <div className='underline'></div>
            </div>
            <div className='section-center featured'>
                { }
            </div>
            <Link>
                all products
            </Link>
        </Wrapper>
    );
}

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`;

export default FeaturedProducts
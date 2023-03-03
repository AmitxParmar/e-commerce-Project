import React from 'react'
import styled from 'styled-components'

import Product from './Product'

const GridView = ({ products }) => {
    return (
        <Wrapper>
            <div className='products-container'>
                {products.map((product) => {
                    return <Product key={product.id} {...product} />
                })}
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`

`

export default GridView
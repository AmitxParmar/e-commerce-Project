import React from 'react'
import { FaTrash } from 'react-icons/fa'
import styled from 'styled-components'

import { useCartContext } from '../context/cart_context';

import { formatPrice } from '../utils/helpers'
import AmountButtons from './AmountButtons'

const CartItem = ({ id, image, name, color, price, amount }) => {
    const { removeItem, toggleAmount } = useCartContext();

    const increase = () => toggleAmount(id, "inc");

    const decrease = () => toggleAmount(id, "dec");

    return (
        <AmountButtons />
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

export default CartItem
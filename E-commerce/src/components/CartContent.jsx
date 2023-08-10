import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import CartColumns from "./CartColumns";
import CartItem from "./CartItem";
import CartTotals from "./CartTotals";

import { useCartContext } from "../context/cart_context";

const CartContent = () => {
  const { cart, clearCart } = useCartContext();
  console.log("🚀 ~ file: CartContent.jsx:13 ~ CartContent ~ cart", cart);

  return (
    <Wrapper className="section section-center">
      <CartColumns />
      {cart ? (
        cart?.map((item) => <CartItem key={item.id} {...item} />)
      ) : (
        <>
          <hr />

          <div className="link-container">
            <Link to="/products" className="link-btn">
              continue shopping
            </Link>
            <button className="link-btn clear-btn" onClick={clearCart(null)}>
              clear cart
            </button>
          </div>
        </>
      )}
      <CartTotals />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .link-container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }
  .link-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    background: var(--clr-primary-5);
    color: var(--clr-white);
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    font-weight: 400;
    cursor: pointer;
  }
  .clear-btn {
    background: var(--clr-black);
  }
`;
export default CartContent;

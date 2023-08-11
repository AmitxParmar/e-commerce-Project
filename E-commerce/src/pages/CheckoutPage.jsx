import { Link } from "react-router-dom";
import styled from "styled-components";

import { PageHero, StripeCheckout } from "../components";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";

const CheckoutPage = () => {
  const { cart, clearCart } = useCartContext();
  const { myuser } = useUserContext();

  return (
    <main>
      <PageHero title={"checkout"} />
      <Wrapper classname="page">
        {cart.length < 1 ? (
          <div className="empty">
            <h2>can't proceed with empty cart:(</h2> <br />
            <Link to={"/products"}>continue shopping </Link>
          </div>
        ) : (
          <StripeCheckout />
        )}
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .empty {
    text-align: center;
  }
`;

export default CheckoutPage;

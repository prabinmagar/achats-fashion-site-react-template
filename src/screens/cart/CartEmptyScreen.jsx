import styled from "styled-components";
import { Container } from "../../styles/styles";
import { BaseLinkGreen } from "../../styles/button";
import { staticImages } from "../../utils/images";

const CartEmptyScreenWrapper = styled.main`
  margin: 24px 0;
  
  .empty-cart-img {
    width: 240px;
    overflow: hidden;
  }

  .empty-cart-msg {
    border-radius: 6px;
    padding: 24px 24px 0 24px;
    margin-top: 16px;
    width: 100%;
    max-width: 400px;
    gap: 12px;

    &-text {
      font-size: 24px;
    }
  }
`;

const CartEmptyScreen = () => {
  return (
    <CartEmptyScreenWrapper className="page-py-spacing">
      <Container>
        <div className="flex items-center justify-center flex-col">
          <div className="empty-cart-img">
            <img
              src={staticImages.empty_cart_img}
              alt=""
              className="object-fit-cover"
            />
          </div>
          <div className="empty-cart-msg flex flex-col justify-center items-center">
            <p className="empty-cart-msg-text font-semibold text-outerspace">
              Your cart is empty and sad :(
            </p>
            <p className="text-gray italic">Add something to fill it!</p>
            <BaseLinkGreen to="/">
              Continue Shopping
            </BaseLinkGreen>
          </div>
        </div>
      </Container>
    </CartEmptyScreenWrapper>
  );
};

export default CartEmptyScreen;

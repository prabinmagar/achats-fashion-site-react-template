import styled from "styled-components";
import { CartDiscount, CartSummary, CartTable, Breadcrumb } from "../../components";
import { cartItems } from "../../data/data";
import { Container } from "../../styles/styles";
import { breakpointsDown } from "../../styles/themes/default";
import { Link } from "react-router-dom";

const CartPageWrapper = styled.main`
  padding: 48px 0;
  .breadcrumb-nav {
    margin-bottom: 20px;
  }
`;

const CartContent = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 40px;
  align-items: start;

  @media (max-width: ${breakpointsDown.xl}) {
    grid-template-columns: 100%;
  }

  @media (max-width: ${breakpointsDown.sm}) {
    margin-top: 24px;
  }

  .cart-list {
    @media (max-width: ${breakpointsDown.lg}) {
      overflow-x: scroll;
    }
  }

  .cart-content-right {
    gap: 24px;

    @media (max-width: ${breakpointsDown.xl}) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: ${breakpointsDown.md}) {
      grid-template-columns: 100%;
    }
  }
`;

const breadcrumbItems = [
  { label: "Home", link: "/cart" },
  { label: "Add To Cart", link: "" },
];

const CartScreen = () => {
  return (
    <CartPageWrapper>
      <Container>
        <Breadcrumb items={breadcrumbItems} />
        <div className="cart-head">
          <p className="text-base text-gray">
            Please fill in the fields below and click place order to complete
            your purchase!
          </p>
          <p className="text-gray text-base">
            Already registered?{" "}
            <Link to="/sign_in" className="text-sea-green font-medium">
              Please login here
            </Link>
          </p>
        </div>

        <CartContent>
          <div className="cart-content-left">
            <CartTable cartItems={cartItems} />
          </div>

          <div className="grid cart-content-right">
            <CartDiscount />
            <CartSummary />
          </div>
        </CartContent>
      </Container>
    </CartPageWrapper>
  );
};

export default CartScreen;

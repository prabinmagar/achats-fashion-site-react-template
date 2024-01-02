import { Container } from "../../styles/styles";
import { ShippingPayment, Billing, Title } from "../../components";
import styled from "styled-components";
import { breakpoints, defaultTheme } from "../../styles/themes/default";

const CheckoutScreenWrapper = styled.main`
  padding: 48px 0;

  .horiz-line-separator {
    height: 1px;
    background-color: ${defaultTheme.color_anti_flash_white};
    max-width: 818px;
    margin: 30px 0;

    @media (max-width: ${breakpoints.sm}) {
      margin: 20px 0;
    }
  }
`;

const CheckoutScreen = () => {
  return (
    <CheckoutScreenWrapper>
      <Container>
        <Title titleText={"Check Out"} />
        <Billing />
        <div className="horiz-line-separator w-full"></div>
        <ShippingPayment />
      </Container>
    </CheckoutScreenWrapper>
  );
};

export default CheckoutScreen;

import { Container, SectionTitle } from "../../styles/styles";
import { ShippingPayment, Billing } from "../../components";
import styled from "styled-components";
import { breakpointsDown, defaultTheme } from "../../styles/themes/default";

const CheckoutScreenWrapper = styled.main`
  padding: 48px 0;

  .horiz-line-separator {
    height: 1px;
    background-color: ${defaultTheme.color_anti_flash_white};
    max-width: 818px;
    width: 100%;
    margin: 30px 0;

    @media (max-width: ${breakpointsDown.sm}) {
      margin: 20px 0;
    }
  }
`;

const CheckoutScreen = () => {
  return (
    <CheckoutScreenWrapper>
      <Container>
        <SectionTitle >
          <h3>Check Out</h3>
        </SectionTitle>
        <Billing />
        <div className="horiz-line-separator"></div>
        <ShippingPayment />
      </Container>
    </CheckoutScreenWrapper>
  );
};

export default CheckoutScreen;

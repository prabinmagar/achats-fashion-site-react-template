import styled from "styled-components";
import { breakpointsDown, defaultTheme } from "../../styles/themes/default";
import {
  BaseButtonOuterspace,
  BaseLinkOutlinePlatinum,
} from "../../styles/button";
import { Input } from "../../styles/form";

const CartDiscountWrapper = styled.div`
  @media (max-width: ${breakpointsDown.xl}) {
    max-width: 420px;
  }

  @media (max-width: ${breakpointsDown.md}) {
    max-width: 100%;
  }

  .coupon-group {
    margin-top: 20px;
    overflow: hidden;
    border-radius: 6px;
    height: 40px;
    display: flex;
  }

  .coupon-input {
    width: 100%;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    border: 1px solid ${defaultTheme.color_platinum};
    padding-left: 12px;
    padding-right: 12px;
    border-right: none;
  }

  .coupon-btn {
    padding: 2px 16px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    white-space: nowrap;
    height: 100%;
  }

  .contd-shop-btn {
    width: 100%;
    height: 40px;
    margin-top: 10px;
    color: ${defaultTheme.color_gray};
  }
`;

const CartDiscount = () => {
  return (
    <CartDiscountWrapper>
      <h3 className="text-xxl text-outerspace">Discount Codes</h3>
      <p className="text-base text-gray">
        Enter your coupon code if you have one.
      </p>
      <form>
        <div className="coupon-group">
          <Input type="text" className="coupon-input" placeholder="Search" />
          <BaseButtonOuterspace type="submit" className="coupon-btn">
            Apply Coupon
          </BaseButtonOuterspace>
        </div>
      </form>
      <BaseLinkOutlinePlatinum as={BaseLinkOutlinePlatinum} to="/" className="contd-shop-btn">
        continue shopping
      </BaseLinkOutlinePlatinum>
    </CartDiscountWrapper>
  );
};

export default CartDiscount;

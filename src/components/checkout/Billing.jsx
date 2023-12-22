import styled from "styled-components";
import { breakpointsDown, defaultTheme } from "../../styles/themes/default";
import { Input } from "../../styles/form";
import { orderData } from "../../data/data";
import { currencyFormat } from "../../utils/helper";
import { BaseButtonGreen } from "../../styles/button";

const BillingOrderWrapper = styled.div`
  gap: 60px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: flex-start;

  @media (max-width: ${breakpointsDown.xl}) {
    gap: 40px;
  }

  @media (max-width: ${breakpointsDown.lg}) {
    gap: 30px;
    grid-template-columns: 100%;
  }
`;

const BillingDetailsWrapper = styled.div`
  @media (max-width: ${breakpointsDown.lg}) {
    order: 2;
  }

  .checkout-form {
    margin-top: 24px;

    .input-elem {
      margin-bottom: 16px;

      @media (max-width: ${breakpointsDown.xs}) {
        margin-bottom: 10px;
      }

      label {
        margin-bottom: 8px;
        display: block;
      }
      
      input,
      select {
        height: 40px;
        border-radius: 4px;
        background: #f6f6f6;
        padding-left: 12px;
        padding-right: 12px;
        width: 100%;
        border: 1px solid ${defaultTheme.color_platinum};
        font-size: 12px;

        &::placeholder {
          font-size: 12px;
        }
      }
    }

    .elem-col-2 {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 24px;

      @media (max-width: ${breakpointsDown.lg}) {
        column-gap: 12px;
      }

      @media (max-width: ${breakpointsDown.sm}) {
        grid-template-columns: 100%;
      }
    }

    .elem-col-3 {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      column-gap: 24px;

      @media (max-width: ${breakpointsDown.lg}) {
        column-gap: 12px;
      }

      @media (max-width: ${breakpointsDown.sm}) {
        grid-template-columns: 100%;
      }
    }

    .input-check-group {
      column-gap: 10px;
      margin-top: 16px;
    }

    .contd-delivery-btn {
      margin-top: 20px;

      @media (max-width: ${breakpointsDown.sm}) {
        width: 100%;
      }
    }
  }
`;

const OrderSummaryWrapper = styled.div`
  box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.05),
    -2px -2px 4px 0px rgba(0, 0, 0, 0.05);
  padding: 40px;

  @media (max-width: ${breakpointsDown.xl}) {
    padding: 24px;
  }

  @media (max-width: ${breakpointsDown.sm}) {
    padding: 16px;
  }

  @media (max-width: ${breakpointsDown.xs}) {
    background-color: transparent;
    padding: 0;
    box-shadow: none;
  }

  .order-list {
    margin-top: 20px;
    display: grid;
    row-gap: 24px;

    @media (max-width: ${breakpointsDown.sm}) {
      row-gap: 16px;
    }
  }

  .order-item {
    display: grid;
    grid-template-columns: 60px auto;
    gap: 16px;

    @media (max-width: ${breakpointsDown.xs}) {
      align-items: center;
    }

    &-img {
      width: 60px;
      height: 60px;
      overflow: hidden;
      border-radius: 4px;
    }

    &-info {
      gap: 16px;

      @media (max-width: ${breakpointsDown.xs}) {
        flex-direction: column;
        gap: 6px;
      }
    }
  }

  .order-info {
    margin-top: 30px;

    @media (max-width: ${breakpointsDown.sm}) {
      margin-top: 20px;
    }

    li {
      margin: 6px 0;
    }

    .list-separator {
      height: 1px;
      background-color: #edeef2;
      margin: 12px 0;
    }
  }
`;

const Billing = () => {
  return (
    <BillingOrderWrapper className="billing-and-order">
      <BillingDetailsWrapper>
        <h4 className="text-xxl font-bold text-outerspace">Billing Details</h4>
        <form action="" className="checkout-form">
          <div className="input-elem-group elem-col-2">
            <div className="input-elem">
              <label
                htmlFor=""
                className="text-base text-outerspace font-semibold"
              >
                First Name*
              </label>
              <Input type="text" placeholder="First Name" />
            </div>
            <div className="input-elem">
              <label
                htmlFor=""
                className="text-base text-outerspace font-semibold"
              >
                Last Name*
              </label>
              <Input type="text" placeholder="Last Name" />
            </div>
          </div>
          <div className="input-elem-group elem-col-2">
            <div className="input-elem">
              <label
                htmlFor=""
                className="text-base text-outerspace font-semibold"
              >
                Country / Region*
              </label>
              <Input type="text" placeholder="Country / Region" />
            </div>
            <div className="input-elem">
              <label
                htmlFor=""
                className="text-base text-outerspace font-semibold"
              >
                Company Name
              </label>
              <Input type="text" placeholder="Company (optional)" />
            </div>
          </div>
          <div className="input-elem-group elem-col-2">
            <div className="input-elem">
              <label
                htmlFor=""
                className="text-base text-outerspace font-semibold"
              >
                Street Address*
              </label>
              <Input type="text" placeholder="House number and street name" />
            </div>
            <div className="input-elem">
              <label
                htmlFor=""
                className="text-base text-outerspace font-semibold"
              >
                Apt, suite, unit
              </label>
              <Input
                type="text"
                placeholder="apartment, suite, unit, etc. (optional)"
              />
            </div>
          </div>
          <div className="input-elem-group elem-col-3">
            <div className="input-elem">
              <label
                htmlFor=""
                className="text-base text-outerspace font-semibold"
              >
                City*
              </label>
              <Input type="text" placeholder="Town / City" />
            </div>
            <div className="input-elem">
              <label
                htmlFor=""
                className="text-base text-outerspace font-semibold"
              >
                State*
              </label>
              <select name="">
                <option value="" disabled>
                  State
                </option>
                <option value="">State 1</option>
                <option value="">State 2</option>
              </select>
            </div>
            <div className="input-elem">
              <label
                htmlFor=""
                className="text-base text-outerspace font-semibold"
              >
                Postal Code*
              </label>
              <Input type="text" placeholder="Postal Code" />
            </div>
          </div>
          <div className="input-elem-group elem-col-2">
            <div className="input-elem">
              <label
                htmlFor=""
                className="text-base text-outerspace font-semibold"
              >
                Phone*
              </label>
              <Input type="text" placeholder="Phone" />
            </div>
          </div>
          <BaseButtonGreen type="submit" className="contd-delivery-btn">
            Continue to delivery
          </BaseButtonGreen>
          <div className="input-check-group flex items-center flex-wrap">
            <Input type="checkbox" />
            <p className="text-base">
              Save my information for a faster checkout
            </p>
          </div>
        </form>
      </BillingDetailsWrapper>
      <OrderSummaryWrapper>
        <h4 className="text-xxl font-bold text-outerspace">Order Summary</h4>
        <div className="order-list">
          {orderData?.map((order) => {
            return (
              <div className="order-item" key={order.id}>
                <div className="order-item-img">
                  <img
                    src={order.imgSource}
                    className="object-fit-cover"
                    alt=""
                  />
                </div>
                <div className="order-item-info flex justify-between">
                  <div className="order-item-info-l">
                    <p className="text-base font-bold text-outerspace">
                      {order.name}{" "}
                      <span className="text-gray">x {order.quantity}</span>
                    </p>
                    <p className="text-base font-bold text-outerspace">
                      Color:{" "}
                      <span className="text-gray font-normal">
                        {order.color}
                      </span>
                    </p>
                  </div>
                  <div className="order-item-info-r text-gray font-bold text-base">
                    {currencyFormat(order.price)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <ul className="order-info">
          <li className="flex items-center justify-between">
            <span className="text-outerspace font-bold text-lg">
              Subtotal{" "}
              <span className="text-gray font-semibold">(3 items)</span>
            </span>
            <span className="text-outerspace font-bold text-lg">$513.00</span>
          </li>
          <li className="flex items-center justify-between">
            <span className="text-outerspace font-bold text-lg">Savings</span>
            <span className="text-outerspace font-bold text-lg">-$30.00</span>
          </li>
          <li className="flex items-center justify-between">
            <span className="text-outerspace font-bold text-lg">Shipping</span>
            <span className="text-outerspace font-bold text-lg">-$5.00</span>
          </li>
          <li className="list-separator"></li>
          <li className="flex items-center justify-between">
            <span className="text-outerspace font-bold text-lg">Total</span>
            <span className="text-outerspace font-bold text-lg">$478.00</span>
          </li>
        </ul>
      </OrderSummaryWrapper>
    </BillingOrderWrapper>
  );
};

export default Billing;

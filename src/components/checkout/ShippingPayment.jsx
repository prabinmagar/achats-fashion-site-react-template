import styled from "styled-components";
import { Input } from "../../styles/form";
import { breakpointsDown, defaultTheme } from "../../styles/themes/default";
import { cardsData } from "../../data/data";
import { BaseButtonGreen } from "../../styles/button";

const ShippingPaymentWrapper = styled.div`
  .shipping-addr,
  .shipping-method,
  .payment-method {
    margin: 20px 0;

    &-title {
      margin-bottom: 8px;
    }

    .list-group {
      padding: 24px;
      background-color: ${defaultTheme.color_whitesmoke};
      max-width: 818px;
      margin-top: 24px;
      border-radius: 12px;

      @media (max-width: ${breakpointsDown.sm}) {
        padding: 16px;
        border-radius: 8px;
        margin-top: 16px;
      }
    }

    .list-group-item {
      column-gap: 20px;
    }

    .horiz-line-separator {
      margin: 20px 0;

      @media (max-width: ${breakpointsDown.sm}) {
        margin: 12px 0;
      }
    }
  }

  .payment-method {
    .list-group-item {
      &-head {
        column-gap: 20px;
      }
    }

    .payment-cards {
      gap: 20px;
      margin: 24px 0 30px 34px;

      @media (max-width: ${breakpointsDown.lg}) {
        gap: 16px;
      }

      @media (max-width: ${breakpointsDown.sm}) {
        margin-top: 16px;
        margin-bottom: 16px;
        gap: 10px;
        margin-left: 0;
      }

      .payment-card {
        position: relative;
        width: 80px;
        height: 46px;

        input {
          opacity: 0;
          position: absolute;
          top: 0;
          left: 0;
          width: 80px;
          height: 46px;
          z-index: 10;
          cursor: pointer;

          &:checked {
            & + .card-wrapper {
              &::after {
                content: "\F26A";
                position: absolute;
                top: -5px;
                right: -5px;
                width: 14px;
                height: 14px;
                display: inline-block;
                content: "";
                background-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='green' class='bi bi-check-circle-fill' viewBox='0 0 16 16'><path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z'/></svg>");
                background-repeat: no-repeat;
                background-size: 14px 14px;
              }
            }
          }
        }

        .card-wrapper {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: white;
          border-radius: 5px;
          border: 1px solid rgba(0, 0, 0, 0.1);
        }
      }
    }

    .payment-details {
      margin-left: 34px;
      display: grid;
      row-gap: 16px;

      @media (max-width: ${breakpointsDown.sm}) {
        margin-left: 0;
      }

      .form-elem-group {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 24px;

        @media (max-width: ${breakpointsDown.sm}) {
          grid-template-columns: 100%;
          gap: 0;
        }
      }

      .form-elem {
        height: 40px;
        border: 1px solid ${defaultTheme.color_platinum};
        border-radius: 6px;
        padding: 16px;

        &:focus {
          border-color: ${defaultTheme.color_sea_green};
        }

        @media (max-width: ${breakpointsDown.sm}) {
          margin-bottom: 10px;
          border-radius: 4px;
        }
      }
    }
  }

  .pay-now-btn {
    @media (max-width: ${breakpointsDown.sm}) {
      width: 100%;
    }
  }
`;

const ShippingPayment = () => {
  return (
    <ShippingPaymentWrapper>
      <div className="shipping-addr">
        <h3 className="text-xxl shipping-addr-title">Shipping Address</h3>
        <p className="text-base text-outerspace">
          Select the address that matches your card or payment method.
        </p>
        <div className="list-group">
          <div className="list-group-item flex items-center">
            <Input type="radio" name="shipping_adddr" />
            <span className="font-semibold text-lg">
              Same as Billing address
            </span>
          </div>
          <div className="horiz-line-separator"></div>
          <div className="list-group-item flex items-center">
            <Input type="radio" name="shipping_adddr" />
            <span className="font-semibold text-lg">
              Use a different shipping address
            </span>
          </div>
        </div>
      </div>

      <div className="shipping-method">
        <h3 className="text-xxl shipping-method-title">Shipping Address</h3>
        <p className="text-base text-outerspace">
          Select the address that matches your card or payment method.
        </p>
        <div className="list-group">
          <div className="list-group-item flex items-center">
            <span className="font-semibold text-lg">
              Arrives by Monday, June 7
            </span>
          </div>
          <div className="horiz-line-separator"></div>
          <div className="list-group-item flex items-center flex items-start justify-between">
            <p className="font-semibold text-lg">
              Delivery Charges{" "}
              <span className="flex text-base font-medium text-gray">
                Additional fess may apply
              </span>
            </p>
            <span className="font-semibold text-lg">$5.00</span>
          </div>
        </div>
      </div>

      <div className="payment-method">
        <h3 className="text-xxl payment-method-title">Payment Method</h3>
        <p className="text-base text-outerspace">
          All transactions are secure and encrypted.
        </p>
        <div className="list-group">
          <div className="list-group-item">
            <div className="flex items-center list-group-item-head">
              <Input
                type="radio"
                className="list-group-item-check"
                name="payment_method"
              />
              <p className="font-semibold text-lg">
                Credit Card
                <span className="flex text-base font-medium text-gray">
                  We accept all major credit cards.
                </span>
              </p>
            </div>
            <div className="payment-cards flex flex-wrap">
              {cardsData?.map((card) => {
                return (
                  <div
                    className="payment-card flex items-center justify-center"
                    key={card.id}
                  >
                    <Input type="radio" name="payment_cards" />
                    <div className="card-wrapper">
                      <img src={card.imgSource} alt="" />
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="payment-details">
              <div className="form-elem-group">
                <Input
                  type="text"
                  className="form-elem"
                  placeholder="Card number"
                />
                <Input
                  type="text"
                  className="form-elem"
                  placeholder="Name of card"
                />
              </div>
              <div className="form-elem-group">
                <Input
                  type="text"
                  className="form-elem"
                  placeholder="Expiration date (MM/YY)"
                />
                <Input
                  type="text"
                  className="form-elem"
                  placeholder="Security Code"
                />
              </div>
            </div>
          </div>
          <div className="horiz-line-separator"></div>
          <div className="list-group-item flex items-center">
            <Input
              type="radio"
              className="list-group-item-check"
              name="payment_method"
            />
            <p className="font-semibold text-lg">
              Cash on delivery
              <span className="flex text-base font-medium text-gray">
                Pay with cash upon delivery.
              </span>
            </p>
          </div>
          <div className="horiz-line-separator"></div>
          <div className="list-group-item flex items-center">
            <Input
              type="radio"
              className="list-group-item-check"
              name="payment_method"
            />
            <p className="font-semibold text-lg">PayPal</p>
          </div>
        </div>
      </div>

      <BaseButtonGreen type="submit" className="pay-now-btn">
        Pay Now
      </BaseButtonGreen>
    </ShippingPaymentWrapper>
  );
};

export default ShippingPayment;

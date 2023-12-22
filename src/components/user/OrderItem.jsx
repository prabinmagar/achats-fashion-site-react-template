import styled from "styled-components";
import { BaseLinkGreen } from "../../styles/button";
import { currencyFormat } from "../../utils/helper";
import PropTypes from "prop-types";
import { breakpointsDown } from "../../styles/themes/default";

const OrderItemWrapper = styled.div`
  margin: 30px 0;
  border-bottom: 1px solid #edeef2;

  .order-item-title {
    margin-bottom: 12px;
  }

  .order-item-details {
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 24px 32px;
    border-radius: 8px;

    @media (max-width: ${breakpointsDown.sm}) {
      padding: 20px 24px;
    }

    @media (max-width: ${breakpointsDown.xs}) {
      padding: 12px 16px;
    }
  }

  .order-info-group {
    display: flex;
    flex-wrap: wrap;

    @media (max-width: ${breakpointsDown.sm}) {
      flex-direction: column;
    }
  }

  .order-info-item {
    width: 50%;

    span {
      &:nth-child(2) {
        margin-left: 4px;
      }
    }

    &:nth-child(even) {
      text-align: right;
      @media (max-width: ${breakpointsDown.lg}) {
        text-align: left;
      }
    }

    @media (max-width: ${breakpointsDown.sm}) {
      width: 100%;
      margin: 2px 0;
    }
  }

  .order-overview {
    margin: 28px 0;
    gap: 12px;

    @media (max-width: ${breakpointsDown.lg}) {
      margin: 20px 0;
    }

    @media (max-width: ${breakpointsDown.sm}) {
      flex-direction: column;
    }

    &-img {
      width: 100px;
      height: 100px;
      border-radius: 6px;
      overflow: hidden;
    }

    &-content {
      display: grid;
      grid-template-columns: 100px auto;
      gap: 18px;
    }

    &-info {
      ul {
        span {
          &:nth-child(2) {
            margin-left: 4px;
          }
        }
      }
    }
  }
`;

const OrderItem = ({ order }) => {
  return (
    <OrderItemWrapper>
      <div className="order-item-details">
        <h3 className="text-xl order-item-title">Order no: {order.order_no}</h3>
        <div className="order-info-group">
          <div className="order-info-item">
            <span className="text-gray font-semibold">Order Date:</span>
            <span className="text-silver">{order.order_date}</span>
          </div>
          <div className="order-info-item">
            <span className="text-gray font-semibold">Order Status :</span>
            <span className="text-silver">{order.status}</span>
          </div>
          <div className="order-info-item">
            <span className="text-gray font-semibold">
              Estimated Delivery Date :
            </span>
            <span className="text-silver">{order.delivery_date}</span>
          </div>
          <div className="order-info-item">
            <span className="text-gray font-semibold">Payment Method :</span>
            <span className="text-silver">{order.payment_method}</span>
          </div>
        </div>
      </div>
      <div className="order-overview flex justify-between">
        <div className="order-overview-content">
          <div className="order-overview-img">
            <img
              src={order.items[0].imgSource}
              alt=""
              className="object-fit-cover"
            />
          </div>
          <div className="order-overview-info">
            <h4 className="text-xl">{order.items[0].name}</h4>
            <ul>
              <li className="font-semibold text-base">
                <span>Colour:</span>
                <span className="text-silver">{order.items[0].color}</span>
              </li>
              <li className="font-semibold text-base">
                <span>Qty:</span>
                <span className="text-silver">{order.items[0].quantity}</span>
              </li>
              <li className="font-semibold text-base">
                <span>Total:</span>
                <span className="text-silver">
                  {currencyFormat(order.items[0].price)}
                </span>
              </li>
            </ul>
          </div>
        </div>
        <BaseLinkGreen to="/order_detail">View Detail</BaseLinkGreen>
      </div>
    </OrderItemWrapper>
  );
};

export default OrderItem;

OrderItem.propTypes = {
  order: PropTypes.object,
};

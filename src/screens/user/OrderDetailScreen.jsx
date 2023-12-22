import styled from "styled-components";
import { Container, SectionTitle } from "../../styles/styles";
import { UserContent, UserDashboard } from "../../styles/user";
import { UserMenu, Breadcrumb } from "../../components";
import { orderData } from "../../data/data";
import { currencyFormat } from "../../utils/helper";
import { breakpointsDown, defaultTheme } from "../../styles/themes/default";
import { Link } from "react-router-dom";

const OrderDetailScreenWrapper = styled.main`
  .order-d-top {
    background-color: ${defaultTheme.color_whitesmoke};
    padding: 26px 32px;
    border-radius: 8px;
    border: 1px solid rgba(0, 0, 0, 0.05);

    @media (max-width: ${breakpointsDown.sm}) {
      flex-direction: column;
      row-gap: 12px;
    }
  }

  .order-d-no {
    margin-bottom: 6px;
  }

  .section-title {
    .btn-go-back {
      margin-right: 12px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      transition: ${defaultTheme.default_transition};

      &:hover {
        margin-right: 16px;
      }
    }
  }
`;

const OrderDetailStatusWrapper = styled.div`
  margin: 0 36px;

  @media (max-width: ${breakpointsDown.sm}) {
    margin: 0 10px;
    overflow-x: scroll;
  }

  .order-status {
    height: 4px;
    background-color: ${defaultTheme.color_silver};
    margin: 50px 0;
    max-width: 580px;
    width: 340px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    margin-bottom: 70px;

    @media (max-width: ${breakpointsDown.sm}) {
      margin-left: 40px;
      margin-right: 40px;
    }

    &-dot {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: ${defaultTheme.color_silver};
      position: absolute;
      top: 50%;
      transform: translateY(-50%);

      &:nth-child(1) {
        left: 0;
      }

      &:nth-child(2) {
        left: calc(33.3333% - 10px);
      }

      &:nth-child(3) {
        left: calc(66.6666% - 10px);
      }

      &:nth-child(4) {
        right: 0;
      }

      &.status-done {
        background-color: ${defaultTheme.color_outerspace};
        .order-status-text {
          color: ${defaultTheme.color_outerspace};
        }
      }

      &.status-current {
        position: absolute;
        &::after {
          content: "";
          position: absolute;
          width: 12px;
          height: 12px;
          background-color: ${defaultTheme.color_outerspace};
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          z-index: 30;
          border-radius: 50%;
        }

        .order-status-text {
          color: ${defaultTheme.color_outerspace};
        }
      }
    }

    &-text {
      position: absolute;
      top: calc(100% + 8px);
      left: 50%;
      transform: translateX(-50%);
      color: ${defaultTheme.color_silver};
    }
  }
`;

const OrderDetailMessageWrapper = styled.div`
  background-color: ${defaultTheme.color_whitesmoke};
  max-width: 748px;
  margin-right: auto;
  margin-left: auto;
  min-height: 68px;
  padding: 16px 24px;
  border-radius: 8px;
  position: relative;
  margin-top: 80px;

  &::after {
    content: "";
    position: absolute;
    top: -34px;
    left: 20%;
    border-bottom: 22px solid ${defaultTheme.color_whitesmoke};
    border-top: 18px solid transparent;
    border-left: 18px solid transparent;
    border-right: 18px solid transparent;
  }

  @media (max-width: ${breakpointsDown.sm}) {
    margin-top: 10px;
  }
`;

const OrderDetailListWrapper = styled.div`
  padding: 24px;
  margin-top: 40px;
  border: 1px solid rgba(0, 0, 0, 0.05);

  @media (max-width: ${defaultTheme.md}) {
    padding: 18px;
  }

  @media (max-width: ${defaultTheme.xs}) {
    padding: 12px;
  }

  .order-d-item {
    display: grid;
    grid-template-columns: 80px 1fr 1fr 32px;
    gap: 20px;
    padding: 12px 0;
    border-bottom: 1px solid ${defaultTheme.color_whitesmoke};
    position: relative;

    @media (max-width: ${defaultTheme.xl}) {
      grid-template-columns: 80px 3fr 2fr 32px;
      padding: 16px 0;
      gap: 16px;
    }

    @media (max-width: ${breakpointsDown.sm}) {
      grid-template-columns: 50px 3fr 2fr;
      gap: 16px;
    }

    @media (max-width: ${defaultTheme.xs}) {
      gap: 12px;
      grid-template-columns: 100%;
    }

    &:first-child {
      padding-top: 0;
    }

    &:last-child {
      padding-bottom: 0;
      border-bottom: 0;
    }

    &-img {
      width: 80px;
      height: 80px;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

      @media (max-width: ${breakpointsDown.sm}) {
        width: 50px;
        height: 50px;
      }

      @media (max-width: ${defaultTheme.xs}) {
        width: 100%;
        height: 200px;
      }
    }

    &-calc {
      p {
        display: inline-block;
        margin-right: 50px;

        @media (max-width: ${defaultTheme.lg}) {
          margin-right: 20px;
        }
      }
    }

    &-btn {
      margin-bottom: auto;
      &:hover {
        color: ${defaultTheme.color_sea_green};
      }

      @media (max-width: ${breakpointsDown.sm}) {
        position: absolute;
        right: 0;
        top: 10px;
      }

      @media (max-width: ${defaultTheme.xs}) {
        width: 28px;
        height: 28px;
        z-index: 5;
        background-color: ${defaultTheme.color_white};
        border-radius: 50%;
        right: 8px;
        top: 24px;
      }
    }
  }
`;

const breadcrumbItems = [
  { label: "Home", link: "/" },
  { label: "Order", link: "/order" },
  { label: "Order Details", link: "/order_detail" },
];

const OrderDetailScreen = () => {
  return (
    <OrderDetailScreenWrapper className="page-py-spacing">
      <Container>
        <Breadcrumb items={breadcrumbItems} />
        <UserDashboard>
          <UserMenu />
          <UserContent>
            <SectionTitle className="section-title">
              <Link to="/order" className="btn-go-back text-xxl">
                <i className="bi bi-chevron-left"></i>
              </Link>
              <h3>Order Details</h3>
            </SectionTitle>

            <div className="order-d-wrapper">
              <div className="order-d-top flex justify-between items-start">
                <div className="order-d-top-l">
                  <h4 className="text-3xl order-d-no">
                    Order no: #47700985665
                  </h4>
                  <p className="text-lg font-medium text-gray">
                    Placed On 2 June 2023 2:40 PM
                  </p>
                </div>
                <div className="order-d-top-r text-xxl text-gray font-semibold">
                  Total: <span className="text-outerspace">$143.00</span>
                </div>
              </div>

              <OrderDetailStatusWrapper className="order-d-status">
                <div className="order-status">
                  <div className="order-status-dot status-done">
                    <span className="order-status-text font-semibold text-center no-wrap">
                      Order Placed
                    </span>
                  </div>
                  <div className="order-status-dot status-current">
                    <span className="order-status-text font-semibold text-center no-wrap">
                      In Progress
                    </span>
                  </div>
                  <div className="order-status-dot">
                    <span className="order-status-text font-semibold text-center no-wrap">
                      Shipped
                    </span>
                  </div>
                  <div className="order-status-dot">
                    <span className="order-status-text font-semibold text-center no-wrap">
                      Delivered
                    </span>
                  </div>
                </div>
              </OrderDetailStatusWrapper>

              <OrderDetailMessageWrapper className="order-message flex items-center justify-start">
                <p className="font-semibold text-gray">
                  8 June 2023 3:40 PM{" "}
                  <span className="text-outerspace">
                    Your order has been successfully verified.
                  </span>
                </p>
              </OrderDetailMessageWrapper>

              <OrderDetailListWrapper className="order-d-list">
                {orderData[0].items?.map((item) => {
                  return (
                    <div className="order-d-item" key={item.id}>
                      <div className="order-d-item-img">
                        <img
                          src={item.imgSource}
                          alt=""
                          className="object-fit-cover"
                        />
                      </div>
                      <div className="order-d-item-info">
                        <p className="text-xl font-bold">{item.name}</p>
                        <p className="text-md font-bold">
                          Color :{" "}
                          <span className="font-medium text-gray">
                            {item.color}
                          </span>
                        </p>
                      </div>
                      <div className="order-d-item-calc">
                        <p className="font-bold text-lg">
                          Qty:{" "}
                          <span className="text-gray">{item.quantity}</span>
                        </p>
                        <p className="font-bold text-lg">
                          Price:{" "}
                          <span className="text-gray">
                            {currencyFormat(item.price)}
                          </span>
                        </p>
                      </div>
                      <button
                        type="button"
                        className="text-xl text-outerspace order-d-item-btn"
                      >
                        <i className="bi bi-x-lg"></i>
                      </button>
                    </div>
                  );
                })}
              </OrderDetailListWrapper>
            </div>
          </UserContent>
        </UserDashboard>
      </Container>
    </OrderDetailScreenWrapper>
  );
};

export default OrderDetailScreen;

import styled from "styled-components";
import { Container } from "../../styles/styles";
import { OrderItemList, UserMenu, Breadcrumb, Title } from "../../components";
import { UserDashboardWrapper, UserContent } from "../../styles/user";
import { breakpoints, defaultTheme } from "../../styles/themes/default";
import { orderData } from "../../data/data";

const OrderListScreenWrapper = styled.div`
  .order-tabs-head {
    min-width: 170px;
    padding: 12px;
    border-bottom: 3px solid ${defaultTheme.color_whitesmoke};

    &.order-tabs-head-active {
      border-bottom-color: ${defaultTheme.color_outerspace};
    }

    @media (max-width: ${breakpoints.lg}) {
      min-width: 120px;
    }

    @media (max-width: ${breakpoints.xs}) {
      min-width: 80px;
    }
  }

  .order-tabs-contents {
    margin-top: 40px;
  }
`;

const breadcrumbItems = [
  { label: "Home", link: "/" },
  { label: "Order", link: "/order" },
];

const OrderListScreen = () => {
  return (
    <OrderListScreenWrapper className="page-py-spacing">
      <Container>
        <Breadcrumb items={breadcrumbItems} />
        <UserDashboardWrapper>
          <UserMenu />
          <UserContent>
            <Title titleText={"My Orders"} />
            <div className="order-tabs">
              <div className="order-tabs-heads">
                <button
                  className="order-tabs-head text-xl italic order-tabs-head-active"
                  data-id="active"
                >
                  Active
                </button>
                <button
                  className="order-tabs-head text-xl italic"
                  data-id="cancelled"
                >
                  Cancelled
                </button>
                <button
                  className="order-tabs-head text-xl italic"
                  data-id="completed"
                >
                  Completed
                </button>
              </div>

              <div className="order-tabs-contents">
                <div className="order-tabs-content" id="active">
                  <OrderItemList orders={orderData} />
                </div>
                <div className="order-tabs-content" id="cancelled">
                  Cancelled content
                </div>
                <div className="order-tabs-content" id="completed">
                  Completed content
                </div>
              </div>
            </div>
          </UserContent>
        </UserDashboardWrapper>
      </Container>
    </OrderListScreenWrapper>
  );
};

export default OrderListScreen;

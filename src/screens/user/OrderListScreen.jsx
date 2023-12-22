import styled from "styled-components";
import { Container, SectionTitle } from "../../styles/styles";
import { OrderItemList, UserMenu, Breadcrumb } from "../../components";
import { UserDashboard, UserContent } from "../../styles/user";
import { breakpointsDown, defaultTheme } from "../../styles/themes/default";
import { orderData } from "../../data/data";

const OrderListScreenWrapper = styled.div`
  .order-tabs-head {
    min-width: 170px;
    padding: 12px;
    border-bottom: 3px solid #f6f6f6;

    &.order-tabs-head-active {
      border-bottom-color: ${defaultTheme.color_outerspace};
    }

    @media (max-width: ${breakpointsDown.lg}) {
      min-width: 120px;
    }

    @media (max-width: ${breakpointsDown.xs}) {
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
        <UserDashboard>
          <UserMenu />
          <UserContent>
            <SectionTitle className="section-title">
              <h3>My Orders</h3>
            </SectionTitle>
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
        </UserDashboard>
      </Container>
    </OrderListScreenWrapper>
  );
};

export default OrderListScreen;

import PropTypes from "prop-types";
import { breakpointsDown, defaultTheme } from "../../styles/themes/default";
import styled from "styled-components";
import CartItem from "./CartItem";

const CartTableWrapper = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 680px;
  border: 1px solid rgba(0, 0, 0, 0.1);

  thead {
    tr {
      text-align: left;
    }
    th {
      height: 48px;
      background-color: ${defaultTheme.color_outerspace};
      color: ${defaultTheme.color_white};
      padding-left: 16px;
      padding-right: 16px;
      text-transform: capitalize;
      font-weight: 600;
      letter-spacing: 0.03em;

      @media (max-width: ${breakpointsDown.lg}) {
        padding: 16px 12px;
      }

      @media (max-width: ${breakpointsDown.xs}) {
        padding: 10px;
      }
    }
  }

  tbody {
    td {
      padding: 24px 16px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.08);

      @media (max-width: ${breakpointsDown.lg}) {
        padding: 16px 12px;
      }

      @media (max-width: ${breakpointsDown.xs}) {
        padding: 10px 6px;
      }
    }
  }
`;

const CartTable = ({ cartItems }) => {
  return (
    <div className="scrollbar-x">
      <CartTableWrapper>
        <thead>
          <tr>
            <th className="text-base">product details</th>
            <th className="text-base">price</th>
            <th className="text-base">quantity</th>
            <th className="text-base">shipping</th>
            <th className="text-base">subtotal</th>
            <th className="text-center text-base">action</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((cartItem) => {
            return <CartItem key={cartItem.id} cartItem={cartItem} />;
          })}
        </tbody>
      </CartTableWrapper>
    </div>
  );
};

export default CartTable;

CartTable.propTypes = {
  cartItems: PropTypes.array,
};

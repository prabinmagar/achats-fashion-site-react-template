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
  const CART_TABLE_HEADS = [
    "Product details",
    "Price",
    "Quantity",
    "Shipping",
    "Subtotal",
    "Action",
  ];
  return (
    <div className="scrollbar-x">
      <CartTableWrapper>
        <thead>
          <tr>
            {CART_TABLE_HEADS?.map((column, index) => (
              <th
                className={`text-base${
                  index === CART_TABLE_HEADS.length - 1 ? " text-center" : ""
                }`}
                key={index}
              >
                {column}
              </th>
            ))}
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

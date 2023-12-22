import PropTypes from "prop-types";
import OrderItem from "./OrderItem";

const OrderItemList = ({ orders }) => {
  return (
    <div>
      {orders?.map((order) => (
        <OrderItem key={order.id} order={order} />
      ))}
    </div>
  );
};

export default OrderItemList;

OrderItemList.propTypes = {
  orders: PropTypes.array,
};

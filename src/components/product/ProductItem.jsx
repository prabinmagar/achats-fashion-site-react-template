import PropTypes from "prop-types";
import { ProductCardWrapper } from "../../styles/card";

const ProductItem = ({ product }) => {
  return (
    <ProductCardWrapper key={product.id}>
      <div className="product-img">
        <img className="object-fit-cover" src={product.imgSource} />
        <button
          type="button"
          className="product-wishlist-icon flex items-center justify-center"
        >
          <i className="bi bi-heart"></i>
        </button>
      </div>
      <div className="product-info">
        <p className="info-name font-bold">{product.title}</p>
        <div className="flex items-center justify-between text-sm font-medium">
          <span className="product-brand">{product.brand}</span>
          <span className="product-price">${product.price}</span>
        </div>
      </div>
    </ProductCardWrapper>
  );
};

export default ProductItem;

ProductItem.propTypes = {
  product: PropTypes.object,
};

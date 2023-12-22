import { ProductCardListWrapper } from "../../styles/card";
import ProductItem from "./ProductItem";
import PropTypes from "prop-types";

const ProductList = ({ products }) => {
  return (
    <ProductCardListWrapper className="grid">
      {products.map((product) => {
        return <ProductItem key={product.id} product={product} />;
      })}
    </ProductCardListWrapper>
  );
};

export default ProductList;

ProductList.propTypes = {
  products: PropTypes.array,
};

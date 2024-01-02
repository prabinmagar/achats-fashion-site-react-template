import styled from "styled-components";
import ProductItem from "./ProductItem";
import PropTypes from "prop-types";
import { breakpointsDown } from "../../styles/themes/default";

const ProductCardListWrapper = styled.div`
  display: grid;
  column-gap: 20px;
  row-gap: 40px;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));

  @media (max-width: ${breakpointsDown.sm}) {
    gap: 12px;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

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

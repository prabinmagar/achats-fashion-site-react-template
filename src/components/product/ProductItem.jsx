import PropTypes from "prop-types";
import styled from "styled-components";
import { commonCardStyles } from "../../styles/card";
import { breakpointsDown, defaultTheme } from "../../styles/themes/default";

const ProductCardWrapper = styled.div`
  ${commonCardStyles}
  @media (max-width: ${breakpointsDown.sm}) {
    padding-left: 0px;
    padding-right: 0px;
  }

  .product-img {
    height: 393px;
    position: relative;

    @media (max-width: ${breakpointsDown.sm}) {
      height: 320px;
    }
  }

  .product-link {
    color: #7f7f7f;

    .link-icon {
      font-size: 16px;
    }

    &:hover {
      color: ${defaultTheme.color_sea_green};
    }
  }

  .product-wishlist-icon {
    position: absolute;
    top: 16px;
    right: 16px;
    width: 32px;
    height: 32px;
    background-color: ${defaultTheme.color_white};
    border-radius: 100%;

    &:hover {
      background-color: ${defaultTheme.color_yellow};
      color: ${defaultTheme.color_white};
    }
  }

  .product-brand {
    color: ${defaultTheme.color_gray};
  }

  .product-price {
    color: ${defaultTheme.color_outerspace};
    font-weight: 700;
  }
`;

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

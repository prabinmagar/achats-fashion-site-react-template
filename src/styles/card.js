import styled, { css } from "styled-components";
import { breakpointsDown, defaultTheme } from "./themes/default";

const commonCardStyles = css`
  padding-right: 12px;
  padding-left: 12px;
  border-radius: 12px;
  cursor: pointer;

  .product-img {
    border-radius: 12px;
    overflow: hidden;
    margin-bottom: 20px;

    img {
      transition: ${defaultTheme.default_transition};
    }

    &:hover {
      img {
        scale: 1.1;
      }
    }

    @media (max-width: ${breakpointsDown.lg}) {
      margin-bottom: 12px;
    }
  }
`;

export const ProductCardBoxWrapper = styled.div`
  ${commonCardStyles}
  .product-img {
    height: 262px;
    width: 262px;
  }

  .product-info {
    .info-name {
      font-size: 16px;
    }
  }

  @media (max-width: ${breakpointsDown.sm}) {
    padding-left: 6px;
    padding-right: 6px;
  }
`;

export const ProductCardWrapper = styled.div`
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

export const ProductCardListWrapper = styled.div`
  display: grid;
  column-gap: 20px;
  row-gap: 40px;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));

  @media (max-width: ${breakpointsDown.sm}) {
    gap: 12px;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

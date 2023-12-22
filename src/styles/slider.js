import styled, { css } from "styled-components";

const commonArrowStyles = css`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 100%;
  svg {
    scale: 1.3;
  }
`;

export const SliderNextArrow = styled.button`
  ${commonArrowStyles}
`;

export const SliderPrevArrow = styled.button`
  ${commonArrowStyles}
`;

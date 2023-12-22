import styled, { css } from "styled-components";
import { defaultTheme } from "./themes/default";
import { Link } from "react-router-dom";

const commonButtonStyles = css`
  font-family: inherit;
  min-width: 110px;
  height: 36px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  font-size: 14px;
  border: 1px solid transparent;
  text-transform: capitalize;
  padding-left: 12px;
  padding-right: 12px;
  transition: ${defaultTheme.default_transition};

  &:hover {
    transform: scale(0.97);
  }
`;

const BaseButton = styled.button`
  ${commonButtonStyles}
  color: ${defaultTheme.color_white};
`;

const BaseLink = styled(Link)`
  ${commonButtonStyles}
  color: ${defaultTheme.color_white};
`;

const BaseButtonGreen = styled(BaseButton)`
  background-color: ${defaultTheme.color_sea_green};
  border-color: ${defaultTheme.color_sea_green};
`;

const BaseButtonBlack = styled(BaseButton)`
  background-color: ${defaultTheme.color_black};
`;

const BaseButtonOuterspace = styled(BaseButton)`
  background-color: ${defaultTheme.color_outerspace};
`;

const BaseButtonWhite = styled(BaseButton)`
  color: ${defaultTheme.color_black};
  background-color: ${defaultTheme.color_white};
`;

const BaseButtonWhitesmoke = styled(BaseButton)`
  color: ${defaultTheme.color_black};
  background-color: ${defaultTheme.color_whitesmoke};
`;

const BaseButtonOutlineDark = styled(BaseButton)`
  color: ${defaultTheme.color_black};
  border-color: ${defaultTheme.color_black};
`;

const BaseButtonOutlineWhite = styled(BaseButton)`
  color: ${defaultTheme.color_white};
  border-color: ${defaultTheme.color_white};

  &:hover {
    background-color: ${defaultTheme.color_white};
    color: ${defaultTheme.color_outerspace};
  }
`;

const BaseButtonOutlinePlatinum = styled(BaseButton)`
  color: ${defaultTheme.color_black};
  border-color: ${defaultTheme.color_platinum};
`;

const BaseLinkGreen = styled(BaseLink)`
  background-color: ${defaultTheme.color_sea_green};
  border-color: ${defaultTheme.color_sea_green};
`;

const BaseLinkBlack = styled(BaseLink)`
  background-color: ${defaultTheme.color_black};
`;

const BaseLinkWhite = styled(BaseLink)`
  color: ${defaultTheme.color_black};
  background-color: ${defaultTheme.color_white};
`;

const BaseLinkWhitesmoke = styled(BaseLink)`
  color: ${defaultTheme.color_black};
  background-color: ${defaultTheme.color_whitesmoke};
`;

const BaseLinkOutlineDark = styled(BaseLink)`
  color: ${defaultTheme.color_black};
  border-color: ${defaultTheme.color_black};
`;

const BaseLinkOutlineWhite = styled(BaseLink)`
  color: ${defaultTheme.color_white};
  border-color: ${defaultTheme.color_white};

  &:hover {
    background-color: ${defaultTheme.color_white};
    color: ${defaultTheme.color_outerspace};
  }
`;

const BaseLinkOutlinePlatinum = styled(BaseLink)`
  color: ${defaultTheme.color_black};
  border-color: ${defaultTheme.color_platinum};
`;

export {
  BaseButton,
  BaseLink,
  BaseButtonGreen,
  BaseButtonBlack,
  BaseButtonOuterspace,
  BaseButtonWhite,
  BaseButtonWhitesmoke,
  BaseButtonOutlineDark,
  BaseButtonOutlineWhite,
  BaseButtonOutlinePlatinum,
  BaseLinkGreen,
  BaseLinkBlack,
  BaseLinkWhite,
  BaseLinkWhitesmoke,
  BaseLinkOutlineDark,
  BaseLinkOutlineWhite,
  BaseLinkOutlinePlatinum,
};

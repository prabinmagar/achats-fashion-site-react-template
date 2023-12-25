import styled from "styled-components";
import { breakpointsDown, defaultTheme } from "./themes/default";
import { Link } from "react-router-dom";

// common header stylings
export const HeaderMainWrapper = styled.header`
  min-height: 72px;
  box-shadow: rgba(17, 17, 26, 0.05) 0px 4px 16px,
    rgba(17, 17, 26, 0.05) 0px 8px 24px, rgba(17, 17, 26, 0.05) 0px 16px 56px;
  .header-wrap {
    column-gap: 20px;

    @media (max-width: ${breakpointsDown.sm}) {
      column-gap: 8px;
    }
  }

  .input-group {
    min-width: 320px;

    .input-control {
      @media (max-width: ${breakpointsDown.sm}) {
        display: none;
      }
    }

    @media (max-width: ${breakpointsDown.xl}) {
      min-width: 160px;
    }

    @media (max-width: ${breakpointsDown.sm}) {
      min-width: auto;
      grid-template-columns: 100%;
    }
  }

  .sidebar-toggler{
    font-size: 26px;
    margin-right: 10px;
    margin-bottom: -1px;
  }
`;

export const SiteBrandWrapper = styled(Link)`
  text-decoration: none;
  column-gap: 10px;
  
  .brand-img-wrap {
    img {
      width: 28px;
    }
  }

  .site-brand-text {
    font-size: 24px;
    font-weight: 600;
    @media (max-width: ${breakpointsDown.xl}) {
      font-size: 20px;
    }
    @media(max-width: ${breakpointsDown.xs}){
      display: none;
    }
  }
`;

export const NavigationAndSearchWrapper = styled.div`
  column-gap: 20px;

  .search-form {
    @media (max-width: ${breakpointsDown.lg}) {
      width: 100%;
      max-width: 500px;
    }

    @media (max-width: ${breakpointsDown.sm}) {
      display: none;
    }
  }

  @media (max-width: ${breakpointsDown.lg}) {
    width: 100%;
    justify-content: flex-end;
  }
`;

export const NavigationMenuWrapper = styled.nav`
  .nav-menu-list {
    margin-left: 20px;

    @media (max-width: ${breakpointsDown.lg}) {
      flex-direction: column;
    }
  }
  .nav-menu-item {
    margin-right: 20px;
    margin-left: 20px;

    @media (max-width: ${breakpointsDown.xl}) {
      margin-left: 16px;
      margin-right: 16px;
    }
  }
  .nav-menu-link {
    &.active {
      color: ${defaultTheme.color_outerspace};
      font-weight: 700;
    }

    &:hover {
      color: ${defaultTheme.color_outerspace};
    }
  }

  @media (max-width: ${breakpointsDown.lg}) {
    position: absolute;
    top: 0;
    right: 0;
    width: 260px;
    background-color: ${defaultTheme.color_white};
    height: 100%;
    z-index: 999;
    display: none;
  }
`;

export const IconLinksWrapper = styled.div`
  column-gap: 18px;

  .icon-link {
    width: 36px;
    height: 36px;
    border-radius: 6px;

    &.active {
      background-color: ${defaultTheme.color_sea_green};
      img {
        filter: brightness(100);
      }
    }

    &:hover {
      background-color: ${defaultTheme.color_whitesmoke};
    }
  }

  @media (max-width: ${breakpointsDown.xl}) {
    column-gap: 8px;
  }

  @media (max-width: ${breakpointsDown.sm}) {
    column-gap: 6px;
  }
`;

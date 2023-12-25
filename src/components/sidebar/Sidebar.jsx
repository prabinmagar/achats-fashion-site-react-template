import styled from "styled-components";
import { breakpointsDown, defaultTheme } from "../../styles/themes/default";
import { SiteBrandWrapper } from "../../styles/header";
import { staticImages } from "../../utils/images";
import { Input, InputGroupWrapper } from "../../styles/form";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsSidebarOpen,
  toggleSidebar,
} from "../../redux/slices/sidebarSlice";

const SideNavigationWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${defaultTheme.color_white};
  width: 280px;
  height: 100%;
  z-index: 999;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
  padding: 16px;
  transform: translateX(-100%);
  transition: ${defaultTheme.default_transition};

  &.show {
    transform: translateX(0);
  }

  .sidebar-close-btn {
    position: absolute;
    right: 16px;
    top: 16px;
    font-size: 20px;

    &:hover {
      color: ${defaultTheme.color_sea_green};
    }
  }

  .sidenav-search-form {
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    margin-top: 20px;

    .input-group {
      min-width: 100%;
      column-gap: 0;
    }
  }

  .sidenav-menu-list {
    margin: 20px 0;
    display: grid;
    gap: 20px;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    padding: 24px 0;

    a {
      column-gap: 16px;
      color: ${defaultTheme.color_gray};
      .menu-item-icon {
        font-size: 18px;
      }
      .menu-item-text {
        font-weight: 500;
        font-size: 15px;
      }

      &:hover {
        color: ${defaultTheme.color_sea_green};
      }

      &.active {
        color: ${defaultTheme.color_sea_green};
      }
    }
  }

  @media (max-width: ${breakpointsDown.xs}) {
    width: 100%;
  }
`;

const Sidebar = () => {
  const isSidebarOpen = useSelector(selectIsSidebarOpen);
  const dispatch = useDispatch();
  const location = useLocation();

  return (
    <SideNavigationWrapper className={`${isSidebarOpen ? "show" : ""}`}>
      <button
        className="sidebar-close-btn"
        onClick={() => dispatch(toggleSidebar())}
      >
        <i className="bi bi-x-lg"></i>
      </button>
      <div className="sidenav-head">
        <SiteBrandWrapper to="/" className="inline-flex">
          <div className="brand-img-wrap flex items-center justify-center">
            <img
              className="site-brand-img"
              src={staticImages.logo}
              alt="site-logo"
            />
          </div>
          <span className="site-brand-text text-outerspace">achats.</span>
        </SiteBrandWrapper>
      </div>
      <form className="sidenav-search-form">
        <InputGroupWrapper className="input-group">
          <span className="input-icon flex items-center justify-center text-xl text-gray">
            <i className="bi bi-search"></i>
          </span>
          <Input
            type="text"
            className="input-control w-full"
            placeholder="Search"
          />
        </InputGroupWrapper>
      </form>
      <ul className="sidenav-menu-list">
        <li>
          <Link
            to="/"
            className={`flex items-center ${
              location.pathname === "/" ? "active" : ""
            }`}
          >
            <span className="menu-item-icon">
              <i className="bi bi-house"></i>
            </span>
            <span className="menu-item-text">Home</span>
          </Link>
        </li>
        <li>
          <Link
            to="/product"
            className={`flex items-center ${
              location.pathname === "/product" ? "active" : ""
            }`}
          >
            <span className="menu-item-icon">
              <i className="bi bi-grid-fill"></i>
            </span>
            <span className="menu-item-text">Products</span>
          </Link>
        </li>
        <li>
          <Link
            to="/wishlist"
            className={`flex items-center ${
              location.pathname === "/wishlist" ? "active" : ""
            }`}
          >
            <span className="menu-item-icon">
              <i className="bi bi-bag-heart"></i>
            </span>
            <span className="menu-item-text">Wishlist</span>
          </Link>
        </li>
        <li>
          <Link
            to="/account"
            className={`flex items-center ${
              location.pathname === "/account" ? "active" : ""
            }`}
          >
            <span className="menu-item-icon">
              <i className="bi bi-person-fill"></i>
            </span>
            <span className="menu-item-text">My Account</span>
          </Link>
        </li>
        <li>
          <Link
            to="/cart"
            className={`flex items-center ${
              location.pathname === "/cart" ? "active" : ""
            }`}
          >
            <span className="menu-item-icon">
              <i className="bi bi-bag-check-fill"></i>
            </span>
            <span className="menu-item-text">Cart</span>
          </Link>
        </li>
      </ul>
    </SideNavigationWrapper>
  );
};

export default Sidebar;

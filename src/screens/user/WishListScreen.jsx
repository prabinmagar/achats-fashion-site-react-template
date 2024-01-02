import styled from "styled-components";
import { Container, SectionTitle } from "../../styles/styles";
import { UserContent, UserDashboardWrapper } from "../../styles/user";
import { UserMenu, Breadcrumb } from "../../components";
import { breakpointsDown, defaultTheme } from "../../styles/themes/default";
import { wishlistData } from "../../data/data";
import { currencyFormat } from "../../utils/helper";
import { BaseLinkBlack } from "../../styles/button";

const WishListScreenWrapper = styled.main`
  .wishlist {
    gap: 20px;
  }
`;

const WishItemWrapper = styled.div`
  gap: 30px;
  max-width: 900px;
  position: relative;

  @media (max-width: ${breakpointsDown.xl}) {
    column-gap: 20px;
  }

  @media (max-width: ${breakpointsDown.lg}) {
    column-gap: 16px;
  }

  @media (max-width: ${breakpointsDown.xs}) {
    flex-direction: column;
    gap: 12px;
  }

  .wish-item-img {
    column-gap: 30px;

    @media (max-width: ${breakpointsDown.xl}) {
      column-gap: 20px;
    }

    @media (max-width: ${breakpointsDown.lg}) {
      column-gap: 16px;
    }

    &-wrapper {
      min-width: 110px;
      width: 110px;
      border-radius: 4px;
      overflow: hidden;

      @media (max-width: ${breakpointsDown.xs}) {
        min-width: 100%;
        height: 180px;

        img {
          object-position: top;
        }
      }
    }

    .wish-remove-btn {
      width: 20px;
      min-width: 20px;
      height: 20px;
      border: 1px solid ${defaultTheme.color_outerspace};
      border-radius: 50%;
      font-size: 10px;
      margin-top: auto;
      margin-bottom: auto;

      &:hover {
        background-color: ${defaultTheme.color_gray};
        color: ${defaultTheme.color_white};
        border-color: ${defaultTheme.color_gray};
      }

      @media (max-width: ${breakpointsDown.sm}) {
        position: absolute;
        right: -10px;
        top: -10px;
      }

      @media (max-width: ${breakpointsDown.xs}) {
        right: 6px;
        top: 6px;
        background-color: ${defaultTheme.color_jet};
        color: ${defaultTheme.color_white};
      }
    }
  }

  .wish-item-info {
    flex: 1;

    @media (max-width: ${breakpointsDown.sm}) {
      flex-direction: column;
      row-gap: 8px;
    }

    &-l {
      row-gap: 4px;

      ul {
        row-gap: 4px;
        li {
          span {
            &:last-child {
              margin-left: 4px;
            }
          }
        }
      }
    }

    &-r {
      column-gap: 40px;

      @media (max-width: ${breakpointsDown.xl}) {
        column-gap: 20px;
      }

      @media (max-width: ${breakpointsDown.lg}) {
        flex-direction: column;
        align-items: flex-end;
        row-gap: 8px;
      }

      @media (max-width: ${breakpointsDown.sm}) {
        flex-direction: row;
        align-items: center;
      }

      .wish-item-price {
        @media (max-width: ${breakpointsDown.sm}) {
          order: 2;
        }
      }

      .wish-cart-btn {
        @media (max-width: ${breakpointsDown.sm}) {
          order: 1;
        }
      }
    }
  }
`;

const breadcrumbItems = [
  { label: "Home", link: "/"},
  { label: "Wishlist", link: "/wishlist"}
];

const WishListScreen = () => {
  return (
    <WishListScreenWrapper className="page-py-spacing">
      <Container>
        <Breadcrumb items={breadcrumbItems} />
        <UserDashboardWrapper>
          <UserMenu>
            <div className="section-title horiz-line">
              <h3>Hello Janvi</h3>
            </div>
            <p className="text-base font-light italic">
              Welcome to your account.
            </p>

            <nav className="nav-account">
              <ul className="nav-account-list">
                <li className="nav-account-item">
                  <a
                    href="order.html"
                    className="nav-account-link flex items-center"
                  >
                    <span className="ac-link-icon flex items-center justify-center">
                      <img src="./assets/icons/ac_orders.svg" alt="" />
                    </span>
                    <span className="text-base font-semibold ac-link-text no-wrap">
                      My orders
                    </span>
                  </a>
                </li>
                <li className="nav-account-item">
                  <a
                    href="wishlist.html"
                    className="nav-account-link active flex items-center"
                  >
                    <span className="ac-link-icon flex items-center justify-center">
                      <img src="./assets/icons/ac_heart.svg" alt="" />
                    </span>
                    <span className="text-base font-semibold ac-link-text no-wrap">
                      Wishlist
                    </span>
                  </a>
                </li>
                <li className="nav-account-item">
                  <a
                    href="info.html"
                    className="nav-account-link  flex items-center"
                  >
                    <span className="ac-link-icon flex items-center justify-center">
                      <img src="./assets/icons/ac_user.svg" alt="" />
                    </span>
                    <span className="text-base font-semibold ac-link-text no-wrap">
                      My info
                    </span>
                  </a>
                </li>
                <li className="nav-account-item">
                  <a href="" className="nav-account-link flex items-center">
                    <span className="ac-link-icon flex items-center justify-center">
                      <img src="./assets/icons/ac_sign_out.svg" alt="" />
                    </span>
                    <span className="text-base font-semibold ac-link-text no-wrap">
                      Sign out
                    </span>
                  </a>
                </li>
              </ul>
            </nav>
          </UserMenu>
          <UserContent>
            <SectionTitle className="section-title">
              <h3>Wishlist</h3>
            </SectionTitle>

            <div className="wishlist grid">
              {wishlistData?.map((wishlist) => {
                return (
                  <WishItemWrapper className="wish-item flex" key={wishlist.id}>
                    <div className="wish-item-img flex items-stretch">
                      <button type="button" className="wish-remove-btn">
                        <i className="bi bi-x-lg"></i>
                      </button>
                      <div className="wish-item-img-wrapper">
                        <img
                          src={wishlist.imgSource}
                          className="object-fit-cover"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="wish-item-info flex justify-between">
                      <div className="wish-item-info-l flex flex-col">
                        <p className="wish-item-title text-xl font-bold text-outerspace">
                          {wishlist.name}
                        </p>
                        <ul className="flex flex-col">
                          <li>
                            <span className="text-lg font-bold">Color:</span>
                            <span className="text-lg text-gray font-medium capitalize">
                              {wishlist.color}
                            </span>
                          </li>
                          <li>
                            <span className="text-lg font-bold">Quantity:</span>
                            <span className="text-lg text-gray font-medium">
                              {wishlist.quantity}
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div className="wish-item-info-r flex items-center">
                        <span className="wish-item-price text-xl text-gray font-bold">
                          {currencyFormat(wishlist.price)}
                        </span>
                        <BaseLinkBlack to="/cart" className="wish-cart-btn">
                          Add to cart
                        </BaseLinkBlack>
                      </div>
                    </div>
                  </WishItemWrapper>
                );
              })}
            </div>
          </UserContent>
        </UserDashboardWrapper>
      </Container>
    </WishListScreenWrapper>
  );
};

export default WishListScreen;

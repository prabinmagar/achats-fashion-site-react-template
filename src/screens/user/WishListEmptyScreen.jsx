import styled from "styled-components";
import { Container } from "../../styles/styles";
import { UserContent, UserDashboard } from "../../styles/user";
import { Catalog, UserMenu, Breadcrumb } from "../../components";
import { staticImages } from "../../utils/images";
import { BaseLinkGreen } from "../../styles/button";
import { recentViewedData } from "../../data/data";

const WishListEmptyScreenWrapper = styled.main`
  .wishlist-empty-content {
    max-width: 514px;
    margin-right: auto;
    margin-left: auto;

    .heart-img {
      margin-right: auto;
      margin-left: auto;
      width: 140px;
      height: 140px;
      border-radius: 50%;
      background: #f0f9f4;
      margin-bottom: 40px;
    }

    .btn-continue {
      margin-top: 20px;
    }
  }
`;

const breadcrumbItems = [
  { label: "Home", link: "/"},
  { label: "Wishlist", link: "/wishlist"}
];

const WishListEmptyScreen = () => {
  return (
    <WishListEmptyScreenWrapper className="content-main page-empty-wishlist page-py-spacing">
      <Container>
        <Breadcrumb items={breadcrumbItems} />
        <UserDashboard>
          <UserMenu />
          <UserContent>
            <div className="wishlist-empty-content text-center">
              <div className="heart-img flex items-center justify-center">
                <img src={staticImages.green_heart} />
              </div>
              <h3 className="text-xxl font-semibold">
                Your wishlist is empty.
              </h3>
              <p className="text-gray text-base">
                You don’t have any products in the wishlist yet. You will find a
                lot of interesting products on our Shop page.
              </p>
              <BaseLinkGreen to="/" className="btn-continue">
                Continue Shopping
              </BaseLinkGreen>
            </div>
          </UserContent>
        </UserDashboard>
        <Catalog catalogTitle={"Recently Viewed"} products={recentViewedData} />
      </Container>
    </WishListEmptyScreenWrapper>
  );
};

export default WishListEmptyScreen;

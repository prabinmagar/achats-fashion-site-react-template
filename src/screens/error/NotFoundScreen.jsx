import styled from "styled-components";
import { staticImages } from "../../utils/images";
import { Container } from "../../styles/styles";
import { BaseLinkGreen } from "../../styles/button";

const NotFoundScreenWrapper = styled.main`
  margin: 24px 0;

  .page-not-found-img {
    width: 240px;
    overflow: hidden;
  }
  .page-not-found-msg {
    border-radius: 6px;
    padding: 24px 24px 0 24px;
    margin-top: 16px;
    width: 100%;
    max-width: 400px;
    gap: 12px;

    &-text {
      font-size: 24px;
    }
  }
`;

const NotFoundScreen = () => {
  return (
    <NotFoundScreenWrapper className="page-py-spacing">
      <Container>
        <div className="flex items-center justify-center flex-col">
          <div className="page-not-found-img flex items-center justify-center">
            <img
              src={staticImages.page_not_found}
              alt=""
              className="object-fit-cover"
            />
          </div>
          <div className="page-not-found-msg flex flex-col justify-center items-center">
            <p className="page-not-found-msg-text font-semibold text-outerspace">
              Oops! Page not found.
            </p>
            <p className="text-gray text-center">
              The page you are looking for might have been removed or
              temporarily unavailable.
            </p>
            <BaseLinkGreen to="/">
              Back to HomePage
            </BaseLinkGreen>
          </div>
        </div>
      </Container>
    </NotFoundScreenWrapper>
  );
};

export default NotFoundScreen;

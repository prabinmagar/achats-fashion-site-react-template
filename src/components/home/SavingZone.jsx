import styled from "styled-components";
import { Container, Section, SectionTitle } from "../../styles/styles";
import { breakpointsDown } from "../../styles/themes/default";
import { savingZoneData } from "../../data/data";
import { BaseLinkOutlineWhite } from "../../styles/button";

const ProductGridWrapper = styled.div`
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
`;

const ProductCardOverlayWrapper = styled.div`
  position: relative;
  height: 390px;
  border-radius: 12px;
  overflow: hidden;

  @media (max-width: ${breakpointsDown.sm}) {
    height: 360px;
  }

  &:nth-child(1) {
    grid-column: 1/3;
    @media (max-width: ${breakpointsDown.lg}) {
      grid-column: 1/4;
    }

    @media (max-width: ${breakpointsDown.md}) {
      grid-column: 1/7;
    }
  }

  &:nth-child(2) {
    grid-column: 3/5;
    @media (max-width: ${breakpointsDown.lg}) {
      grid-column: 4/7;
    }
    @media (max-width: ${breakpointsDown.md}) {
      grid-column: 1/7;
    }
  }

  &:nth-child(3) {
    grid-column: 5/7;
    @media (max-width: ${breakpointsDown.lg}) {
      grid-column: 1/4;
    }
    @media (max-width: ${breakpointsDown.md}) {
      grid-column: 1/7;
    }
  }

  &:nth-child(4) {
    grid-column: 1/4;
    @media (max-width: ${breakpointsDown.lg}) {
      grid-column: 4/7;
    }
    @media (max-width: ${breakpointsDown.md}) {
      grid-column: 1/7;
    }
  }

  &:nth-child(5) {
    grid-column: 4/7;
    @media (max-width: ${breakpointsDown.lg}) {
      grid-column: 1/7;
    }
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
  }

  .product-info {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
    padding: 32px 24px;
    width: 230px;

    .info-badge {
      min-width: 100px;
      height: 34px;
    }

    .info-title {
      font-size: 28px;
      margin: 14px 0;
    }

    .discount-text {
      font-size: 18px;
      text-transform: uppercase;
      margin-top: 4px;
    }

    .info-arrow {
      margin: 16px 0 16px auto;
      width: 110px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
    }

    .info-btn {
      text-transform: uppercase;
    }

    @media (max-width: ${breakpointsDown.xl}) {
      padding: 16px;
    }
  }
`;

const SavingZone = () => {
  return (
    <Section>
      <Container>
        <SectionTitle>
          <h3>Big Saving Zone</h3>
        </SectionTitle>
        <ProductGridWrapper className="grid">
          {savingZoneData?.map((savingZone) => {
            return (
              <ProductCardOverlayWrapper
                className="product-card-overlay text-white"
                key={savingZone.id}
              >
                <img
                  className="object-fit-cover"
                  src={savingZone.imgSource}
                  alt=""
                />
                <div className="product-info text-end w-full h-full">
                  {savingZone.isLimited && (
                    <div className="info-badge text-white text-xs bg-outerspace inline-flex items-center justify-center">
                      Limited Stock
                    </div>
                  )}
                  <h4 className="info-title font-semibold">
                    {savingZone.title}
                  </h4>
                  <p className="info-text text-base">
                    {savingZone.description}
                  </p>
                  <p className="discount-text text-bold">
                    upto {savingZone.discount}% off
                  </p>
                  <div className="info-arrow">
                    <i className="bi bi-arrow-down"></i>
                  </div>
                  <BaseLinkOutlineWhite
                    as={BaseLinkOutlineWhite}
                    to="/"
                    className="info-btn"
                  >
                    shop now
                  </BaseLinkOutlineWhite>
                </div>
              </ProductCardOverlayWrapper>
            );
          })}
        </ProductGridWrapper>
      </Container>
    </Section>
  );
};

export default SavingZone;

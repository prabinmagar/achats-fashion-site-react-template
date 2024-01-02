import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Section, SectionTitle } from "../../styles/styles";
import styled from "styled-components";
import { breakpointsDown } from "../../styles/themes/default";
import { newArrivalData } from "../../data/data";
import CustomNextArrow from "../common/CustomNextArrow";
import CustomPrevArrow from "../common/CustomPrevArrow";
import { commonCardStyles } from "../../styles/card";

const ProductCardBoxWrapper = styled.div`
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

const ArrivalSliderWrapper = styled.div`
  .custom-prev-arrow {
    top: 43%;
    left: -18px;
    @media (max-width: ${breakpointsDown.xxl}) {
      left: 24px;
    }
    @media (max-width: ${breakpointsDown.xs}) {
      left: 4px;
    }
  }

  .custom-next-arrow {
    top: 43%;
    right: -18px;
    @media (max-width: ${breakpointsDown.xxl}) {
      right: 24px;
    }
    @media (max-width: ${breakpointsDown.xs}) {
      right: 4px;
    }
  }
`;

const NewArrival = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
  };

  return (
    <Section>
      <Container>
        <SectionTitle>
          <h3>New Arrival</h3>
        </SectionTitle>
        <ArrivalSliderWrapper>
          <Slider
            nextArrow={<CustomNextArrow />}
            prevArrow={<CustomPrevArrow />}
            {...settings}
          >
            {newArrivalData?.map((newArrival) => {
              return (
                <ProductCardBoxWrapper key={newArrival.id}>
                  <div className="product-img">
                    <img
                      className="object-fit-cover"
                      src={newArrival.imgSource}
                    />
                  </div>
                  <div className="product-info">
                    <p className="info-name font-semibold text-lg">
                      {newArrival.title}
                    </p>
                  </div>
                </ProductCardBoxWrapper>
              );
            })}
          </Slider>
        </ArrivalSliderWrapper>
      </Container>
    </Section>
  );
};

export default NewArrival;

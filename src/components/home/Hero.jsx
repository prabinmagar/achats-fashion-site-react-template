import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { bannerData } from "../../data/data";
import styled from "styled-components";
import { BaseLinkWhite } from "../../styles/button";
import { breakpointsDown, defaultTheme } from "../../styles/themes/default";
import { Container } from "../../styles/styles";
import CustomNextArrow from "../common/CustomNextArrow";
import CustomPrevArrow from "../common/CustomPrevArrow";

const SectionHeroWrapper = styled.section`
  background-color: #f2f2f2;
`;

const HeroSliderWrapper = styled.div`
  .custom-prev-arrow {
    left: 30px !important;
    background-color: ${defaultTheme.color_white};
    @media (max-width: ${breakpointsDown.md}) {
      left: 16px !important;
    }
  }

  .custom-next-arrow {
    right: 30px !important;
    background-color: ${defaultTheme.color_white};
    @media (max-width: ${breakpointsDown.md}) {
      right: 16px !important;
    }
  }
`;

const HeroSliderItemWrapper = styled.div`
  position: relative;
  height: 716px;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${defaultTheme.color_black_04};
  }

  img {
    display: block;
  }
`;

const HeroSliderContent = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  max-width: 1100px;
  z-index: 10;

  .btn {
    height: 42px;
    min-width: 120px;
    margin-top: 20px;
    @media (max-width: ${breakpointsDown.md}) {
      margin-top: 12px;
    }
  }

  .container {
    max-width: 840px;
    margin-left: 0;

    @media (max-width: ${breakpointsDown.xxl}) {
      margin-left: 80px;
    }

    @media (max-width: ${breakpointsDown.md}) {
      margin-left: 16px;
      margin-right: 16px;
    }

    @media (max-width: ${breakpointsDown.sm}) {
      margin: 0;
      text-align: center;
    }
  }

  .hero-text-top {
    font-size: 32px;

    @media (max-width: ${breakpointsDown.lg}) {
      font-size: 26px;
    }
  }

  .hero-text-large {
    font-size: 78px;
    font-weight: 800;
    letter-spacing: 0.315px;
    line-height: 1.2;
    margin-bottom: 20px;

    @media (max-width: ${breakpointsDown.lg}) {
      font-size: 60px;
    }

    @media (max-width: ${breakpointsDown.md}) {
      font-size: 48px;
    }

    @media (max-width: ${breakpointsDown.sm}) {
      font-size: 36px;
    }

    @media (max-width: ${breakpointsDown.xs}) {
      font-size: 32px;
    }
  }

  .hero-text-bottom {
    font-size: 26px;
    margin-bottom: 24px;

    @media (max-width: ${breakpointsDown.lg}) {
      font-size: 20px;
    }
  }

  .hero-btn{
    font-size: 18px;
    height: 46px;
    min-width: 160px;
  }
`;

const Hero = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          dots: true,
          arrows: false,
        },
      },
    ]
  };

  return (
    <SectionHeroWrapper>
      <HeroSliderWrapper>
        <Slider
          nextArrow={<CustomNextArrow />}
          prevArrow={<CustomPrevArrow />}
          {...settings}
        >
          {bannerData?.map((banner) => {
            return (
              <HeroSliderItemWrapper key={banner.id}>
                <img
                  src={banner.imgSource}
                  className="object-fit-cover"
                  alt=""
                />
                <HeroSliderContent className="flex items-center w-full h-full">
                  <Container className="container text-white">
                    <p className="hero-text-top font-bold italic">
                      {banner.topText}
                    </p>
                    <h2 className="hero-text-large">{banner.titleText}</h2>
                    <p className="hero-text-bottom font-semibold uppercase">
                      {banner.bottomText}
                    </p>
                    <BaseLinkWhite
                      to={banner.buttonLink} className="hero-btn"
                    >
                      {banner.buttonText}
                    </BaseLinkWhite>
                  </Container>
                </HeroSliderContent>
              </HeroSliderItemWrapper>
            );
          })}
        </Slider>
      </HeroSliderWrapper>
    </SectionHeroWrapper>
  );
};

export default Hero;

import { Link } from "react-router-dom";
import { featuredData } from "../../data/data";
import { Container, Section } from "../../styles/styles";
import styled from "styled-components";
import { breakpointsDown, defaultTheme } from "../../styles/themes/default";

const FeaturedContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  
  @media (max-width: ${breakpointsDown.lg}) {
    grid-template-columns: 100%;
  }
`;

const FeaturedCardWrapper = styled.div`
  height: 380px;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.4);
  
  .feat-text-top {
    margin-bottom: 24px;
    font-size: 18px;
  }
  .feat-text-large {
    font-size: 38px;
    line-height: 1.2;
  }
  .feat-text-bottom {
    font-size: 16px;
    margin-top: 10px;
    margin-bottom: 30px;
  }

  .feat-card-content {
    padding: 60px 28px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    max-width: 400px;

    @media (max-width: ${breakpointsDown.sm}) {
      padding: 16px;
    }
  }

  .feat-card-img {
    object-position: 93px 90px;
    scale: 2;

    @media (max-width: ${breakpointsDown.xl}) {
      object-position: 73px 90px;
    }

    @media (max-width: ${breakpointsDown.sm}) {
      object-position: 0px 90px;
    }
  }

  .feat-link {
    font-size: 20px;
    position: relative;

    &::after {
      position: absolute;
      content: "";
      left: 0;
      top: 100%;
      height: 1px;
      width: 100%;
      background-color: ${defaultTheme.color_white};
    }
  }
`;

const Featured = () => {
  return (
    <Section>
      <Container>
        <FeaturedContent>
          {featuredData?.map((featured) => {
            return (
              <FeaturedCardWrapper className="text-white" key={featured.id}>
                <img
                  className="object-fit-cover feat-card-img"
                  src={featured.imgSource}
                  alt=""
                />
                <div className="feat-card-content">
                  <p className="feat-text-top font-semibold">
                    {featured.topText}
                  </p>
                  <h3 className="feat-text-large font-bold">
                    {featured.largeText}
                  </h3>
                  <p className="feat-text-bottom font-light text-xl italic uppercase">
                    {featured.bottomText}
                  </p>
                  <Link
                    to={featured.buttonLink}
                    className="feat-link font-extrabold text-white"
                  >
                    {featured.buttonText}{" "}
                  </Link>
                </div>
              </FeaturedCardWrapper>
            );
          })}
        </FeaturedContent>
      </Container>
    </Section>
  );
};

export default Featured;

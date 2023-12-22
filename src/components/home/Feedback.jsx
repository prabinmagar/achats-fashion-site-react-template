import Slider from "react-slick";
import CustomNextArrow from "../common/CustomNextArrow";
import CustomPrevArrow from "../common/CustomPrevArrow";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Section, SectionTitle } from "../../styles/styles";
import styled from "styled-components";
import { breakpointsDown, defaultTheme } from "../../styles/themes/default";
import { feedbackData } from "../../data/data";

const FeedbackSliderWrapper = styled.div`
  .custom-next-arrow {
    right: 0;
    background-color: ${defaultTheme.color_jet};
    border: 3px solid ${defaultTheme.color_whitesmoke};
    svg {
      color: ${defaultTheme.color_white};
    }
  }
  .custom-prev-arrow {
    left: 0;
    background-color: ${defaultTheme.color_jet};
    border: 3px solid ${defaultTheme.color_whitesmoke};
    svg {
      color: ${defaultTheme.color_white};
    }
  }
`;

const FeedbackItemWrapper = styled.div`
  padding-left: 16px;
  padding-right: 16px;

  @media (max-width: ${breakpointsDown.sm}) {
    padding: 0;
  }

  .feedback-item-wrap {
    border-radius: 10px;
    border: 1px solid var(--main-grey-2, #d9d9d9);
    background: #fff;
    padding: 20px;
    height: 320px;
    transition: ${defaultTheme.default_transition};

    &:hover {
      background-color: ${defaultTheme.color_sea_green};
      border-color: ${defaultTheme.color_sea_green};
      .rating {
        color: ${defaultTheme.color_white};
      }

      .feedback-icon {
        border-color: ${defaultTheme.color_white};
      }
      .feedback-body,
      .feedback-intro {
        p,
        span {
          color: ${defaultTheme.color_white};
        }
      }
    }
  }

  .feedback-top {
    column-gap: 18px;
  }

  .feedback-icon {
    border-radius: 100%;
    overflow: hidden;
    border: 2px solid ${defaultTheme.color_white};

    img {
      scale: 1.1;
    }
  }

  .rating {
    margin: 14px 0;
    column-gap: 4px;
    color: ${defaultTheme.color_yellow};
  }

  .feedback-body {
    color: #807d7e;
  }
`;

const Feedback = () => {
  const settings = {
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <Section>
      <Container>
        <SectionTitle >
          <h3>Feedback</h3>
        </SectionTitle>
        <FeedbackSliderWrapper>
          <Slider
            nextArrow={<CustomNextArrow />}
            prevArrow={<CustomPrevArrow />}
            {...settings}
          >
            {feedbackData?.map((feedback) => {
              return (
                <FeedbackItemWrapper key={feedback.id}>
                  <div className="feedback-item-wrap">
                    <div className="feedback-top flex items-center">
                      <div className="feedback-icon">
                        <img
                          src={feedback.imgSource}
                          className="object-fit-cover"
                          alt=""
                        />
                      </div>
                      <div className="feedback-intro">
                        <p className="font-semibold text-base">
                          {feedback.name}
                        </p>
                        <span className="text-sm">{feedback.designation}</span>
                      </div>
                    </div>
                    <ul className="rating flex items-center">
                      {[...Array(feedback.rating).keys()].map((index) => (
                        <li key={index}>
                          <i className="bi bi-star-fill"></i>
                        </li>
                      ))}
                      {[...Array(5 - feedback.rating).keys()].map((index) => (
                        <li key={index + feedback.rating}>
                          <i className="bi bi-star"></i>
                        </li>
                      ))}
                    </ul>
                    <div className="feedback-body">
                      <p className="text-base">{feedback.feedbackText}</p>
                    </div>
                  </div>
                </FeedbackItemWrapper>
              );
            })}
          </Slider>
        </FeedbackSliderWrapper>
      </Container>
    </Section>
  );
};

export default Feedback;

import styled from "styled-components";
import { brandsData } from "../../data/data";
import { Container, Section, SectionTitle } from "../../styles/styles";
import { breakpointsDown, defaultTheme } from "../../styles/themes/default";

const StyledSectionTitle = styled(SectionTitle)`
  justify-content: center;
  flex-direction: column;
  padding-left: 0;

  &::after {
    display: none;
  }

  @media (max-width: ${breakpointsDown.sm}) {
    margin-bottom: 20px;
  }
`;

const BrandsContent = styled.div`
  border-radius: 12px;
  background: #3c4242;
  padding: 40px 0;

  @media (max-width: ${breakpointsDown.lg}) {
    padding: 24px 0;
  }
`;

const BrandsListWrapper = styled.div`
  padding: 12px;
  margin-top: 40px;
  gap: 24px;
  @media (max-width: ${breakpointsDown.sm}) {
    gap: 12px;
    margin-top: 20px;
  }
`;

const BrandsItemWrapper = styled.div`
  width: 178px;
  height: 80px;
  border-radius: 12px;
  background-color: ${defaultTheme.color_white};
  padding: 16px;

  img {
    width: auto;
  }

  @media (max-width: ${breakpointsDown.sm}) {
    width: 120px;
    border-radius: 8px;
  }

  @media (max-width: ${breakpointsDown.xs}) {
    width: 80px;
    height: 50px;
    border-radius: 4px;
  }
`;

const Brands = () => {
  return (
    <Section>
      <Container>
        <BrandsContent>
          <StyledSectionTitle className="text-white text-center">
            <h3>Top Brands Deal</h3>
            <p className="text-xxl text-white">
              Up To <span className="text-yellow">60%</span> off on brands.
            </p>
          </StyledSectionTitle>
          <BrandsListWrapper className="flex items-center flex-wrap justify-center">
            {brandsData?.map((brand) => {
              return (
                <BrandsItemWrapper
                  className="flex items-center justify-center"
                  key={brand.id}
                >
                  <img src={brand.imgSource} />
                </BrandsItemWrapper>
              );
            })}
          </BrandsListWrapper>
        </BrandsContent>
      </Container>
    </Section>
  );
};

export default Brands;

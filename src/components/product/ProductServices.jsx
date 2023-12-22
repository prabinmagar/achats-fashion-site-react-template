import styled from "styled-components";
import { servicesData } from "../../data/data";
import { breakpointsDown, defaultTheme } from "../../styles/themes/default";

const ProductServicesWrapper = styled.div`
  margin-top: 40px;
  border-top: 1px solid ${defaultTheme.color_silver};
  padding-top: 40px;

  @media (max-width: ${breakpointsDown.sm}) {
    margin-top: 32px;
    padding-top: 24px;
  }

  .prod-services-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;

    @media (max-width: ${breakpointsDown.sm}) {
      gap: 12px;
    }
  }

  .prod-service-item {
    column-gap: 12px;

    &-icon {
      background: ${defaultTheme.color_flash_white};
      border-radius: 50%;
      width: 44px;
      height: 44px;
      flex-basis: 44px;

      @media (max-width: ${breakpointsDown.sm}) {
        width: 32px;
        height: 32px;
        flex-basis: 32px;
      }
    }
  }
`;

const ProductServices = () => {
  return (
    <ProductServicesWrapper>
      <div className="prod-services-list">
        {servicesData?.map((service) => {
          return (
            <div
              className="prod-service-item flex items-center"
              key={service.id}
            >
              <span className="prod-service-item-icon flex items-center justify-center">
                <img src={service.icon} alt="" />
              </span>
              <span className="prod-service-item-text font-medium text-outerspace text-lg ">
                {service.text}
              </span>
            </div>
          );
        })}
      </div>
    </ProductServicesWrapper>
  );
};

export default ProductServices;

import { useState } from "react";
import styled from "styled-components";
import { breakpointsDown, defaultTheme } from "../../styles/themes/default";
import PropTypes from "prop-types";

const ProductPreviewWrapper = styled.div`
  grid-template-columns: 72px auto;
  gap: 24px;

  @media (max-width: ${breakpointsDown.xl}) {
    gap: 16px;
  }

  @media (max-width: ${breakpointsDown.sm}) {
    grid-template-columns: 42px auto;
    gap: 12px;
  }

  @media (max-width: ${breakpointsDown.xs}) {
    grid-template-columns: 100%;
  }

  .preview-items {
    width: 100%;

    @media (max-width: ${breakpointsDown.xs}) {
      width: 80%;
      margin-right: auto;
      margin-left: auto;
      order: 2;
    }
  }

  .preview-item {
    width: 70px;
    height: 70px;
    overflow: hidden;
    border-radius: 8px;
    cursor: pointer;
    transition: ${defaultTheme.default_transition};

    @media (max-width: ${breakpointsDown.sm}) {
      width: 40px;
      height: 40px;
    }

    &:hover {
      opacity: 0.9;
      outline: 1px solid ${defaultTheme.color_gray};
    }

    &-wrapper {
      padding-top: 4px;
      padding-bottom: 4px;

      @media (max-width: ${breakpointsDown.xs}) {
        display: flex;
        justify-content: center;
      }
    }
  }

  .preview-display {
    height: 600px;
    overflow: hidden;

    @media (max-width: ${breakpointsDown.md}) {
      height: 520px;
    }

    @media (max-width: ${breakpointsDown.sm}) {
      height: 400px;
    }

    @media (max-width: ${breakpointsDown.xs}) {
      height: 320px;
    }
  }
`;

const ProductPreview = ({ previewImages }) => {
  const [activePreviewImage, setActivePreviewImage] = useState(
    previewImages[0].imgSource
  );

  const handlePreviewImageChange = (previewImage) => {
    setActivePreviewImage(previewImage);
  };

  return (
    <ProductPreviewWrapper className="grid items-center">
      <div className="preview-items">
        {previewImages.map((previewImage) => {
          return (
            <div
              className="preview-item-wrapper"
              key={previewImage.id}
              onClick={() => handlePreviewImageChange(previewImage.imgSource)}
            >
              <div className="preview-item">
                <img
                  src={previewImage.imgSource}
                  alt=""
                  className="object-fit-cover"
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="preview-display">
        <img src={activePreviewImage} alt="" className="object-fit-cover" />
      </div>
    </ProductPreviewWrapper>
  );
};

export default ProductPreview;

ProductPreview.propTypes = {
  previewImages: PropTypes.array,
};

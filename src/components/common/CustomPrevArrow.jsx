import PropTypes from "prop-types";
import { BsChevronLeft } from "react-icons/bs";
import { CustomPrevArrowWrapper } from "../../styles/slider";

const CustomPrevArrow = ({ onClick }) => (
  <CustomPrevArrowWrapper className="custom-prev-arrow" onClick={onClick}>
    <BsChevronLeft />
  </CustomPrevArrowWrapper>
);

CustomPrevArrow.propTypes = {
  onClick: PropTypes.func,
};

export default CustomPrevArrow;

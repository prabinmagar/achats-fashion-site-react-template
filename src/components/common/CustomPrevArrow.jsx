import PropTypes from "prop-types";
import { BsChevronLeft } from "react-icons/bs";
import { SliderPrevArrow } from "../../styles/slider";

const CustomPrevArrow = ({ onClick }) => (
  <SliderPrevArrow className="custom-prev-arrow" onClick={onClick}>
    <BsChevronLeft />
  </SliderPrevArrow>
);

CustomPrevArrow.propTypes = {
  onClick: PropTypes.func,
};

export default CustomPrevArrow;

import PropTypes from "prop-types";
import { BsChevronRight } from "react-icons/bs";
import { SliderNextArrow } from "../../styles/slider";

const CustomNextArrow = ({ onClick }) => (
  <SliderNextArrow className="custom-next-arrow" onClick={onClick}>
    <BsChevronRight />
  </SliderNextArrow>
);

CustomNextArrow.propTypes = {
  onClick: PropTypes.func,
};

export default CustomNextArrow;

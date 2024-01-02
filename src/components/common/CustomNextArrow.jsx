import PropTypes from "prop-types";
import { BsChevronRight } from "react-icons/bs";
import { CustomNextArrowWrapper } from "../../styles/slider";

const CustomNextArrow = ({ onClick }) => (
  <CustomNextArrowWrapper className="custom-next-arrow" onClick={onClick}>
    <BsChevronRight />
  </CustomNextArrowWrapper>
);

CustomNextArrow.propTypes = {
  onClick: PropTypes.func,
};

export default CustomNextArrow;

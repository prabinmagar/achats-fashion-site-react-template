import PropTypes from "prop-types";
import { SectionTitle } from "../../styles/styles";

const Title = ({ titleText }) => {
  return (
    <SectionTitle className="section-title horiz-line">
      <h3>{titleText}</h3>
    </SectionTitle>
  );
};

export default Title;

Title.propTypes = {
  titleText: PropTypes.string,
};

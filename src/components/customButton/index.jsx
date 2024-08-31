import PropTypes from "prop-types";
import "./index.scss";

const CustomButton = ({ text, onClick, style }) => {
  return (
    <button className="custom_button" onClick={onClick} style={{ ...style }}>
      {text}
    </button>
  );
};
export default CustomButton;

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  style: PropTypes.object.isRequired,
};

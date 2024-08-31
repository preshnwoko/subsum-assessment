import PendingIcon from "../../../assets/svg/pending";
import "./index.scss";
import PropTypes from "prop-types";

const ServiceCell = ({ text, no }) => {
  return (
    <div className="service_cell">
      <PendingIcon />
      <div className="deck">
        <p style={{ marginBottom: 5 }}>{text}</p>
        <p>{no}</p>
      </div>
    </div>
  );
};
export default ServiceCell;

ServiceCell.propTypes = {
  text: PropTypes.string.isRequired,
  no: PropTypes.number.isRequired,
};

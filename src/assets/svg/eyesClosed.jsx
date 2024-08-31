import PropTypes from "prop-types";

const EyesClosed = ({ onClick }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
      <path
        d="M20.4 19.5L5.39999 4.5M10.2 10.4416C9.82658 10.8533 9.59999 11.394 9.59999 11.9863C9.59999 13.2761 10.6745 14.3217 12 14.3217C12.6111 14.3217 13.1689 14.0994 13.5926 13.7334M20.4388 14.3217C21.265 13.0848 21.6 12.0761 21.6 12.0761C21.6 12.0761 19.4154 5.1 12 5.1C11.5837 5.1 11.1839 5.12199 10.8 5.16349M17.4 17.3494C16.0226 18.2281 14.2493 18.8495 12 18.8127C4.67692 18.693 2.39999 12.0761 2.39999 12.0761C2.39999 12.0761 3.45785 8.69808 6.59999 6.64332"
        stroke="#4169E1"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};
export default EyesClosed;

EyesClosed.propTypes = {
  onClick: PropTypes.func.isRequired,
};

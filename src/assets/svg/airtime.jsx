import PropTypes from "prop-types";

const AirtimeIcon = ({ color }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.21216 18.7881C1.46313 15.0391 1.46313 8.96071 5.21217 5.21168C7.5821 2.84174 10.8829 1.96995 13.9376 2.5963M19.7396 6.31751C22.505 10.0741 22.188 15.3887 18.7886 18.7881C16.3431 21.2336 12.9064 22.0839 9.77169 21.339M17.8377 7.86043V4.26043L21.4377 4.26043L17.8377 7.86043ZM6.06008 16.0366V19.6366H2.46008L6.06008 16.0366Z"
        stroke={color ? "#6882B6" : "white"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default AirtimeIcon;

AirtimeIcon.propTypes = {
  color: PropTypes.bool.isRequired,
};

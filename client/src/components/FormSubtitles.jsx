import PropTypes from "prop-types";

export default function FormTitles({ children }) {
  return <p className="text-gray-500 ml-2">{children}</p>;
}

FormTitles.propTypes = {
  children: PropTypes.any,
};

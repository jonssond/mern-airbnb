import PropTypes from "prop-types";

export default function FormTitles({ children }) {
  return <h2 className="text-xl mt-4 ml-2">{children}</h2>;
}

FormTitles.propTypes = {
  children: PropTypes.any,
};

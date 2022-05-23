import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export function ButtonLink({ children, path, classNames }) {
  return (
    <Link to={path} className={classNames}>
      {children}
    </Link>
  );
}

ButtonLink.propTypes = {
  children: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  classNames: PropTypes.string,
};

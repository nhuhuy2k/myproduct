import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import classNames from "classnames/bind";

const cx = classNames.bind();


export function ButtonLink({ children, path, classes }) {
  const { pathname } = useLocation();
  return (
    <Link
      to={path}
      className={cx(
        "text-lg font-bold hover:text-red relative after:content after:absolute after:w-0 after:-bottom-1.5 after:h-1 after:bg-red after:translate-x-[-100%] after:hover:w-full after:ease-in-out after:duration-500 sm:text-2xl sm:ml-6"
        , `${pathname === path && "after:w-full"}`, classes
      )}
    >
      {children}
    </Link>
  );
}

ButtonLink.propTypes = {
  children: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  classNames: PropTypes.string,
};

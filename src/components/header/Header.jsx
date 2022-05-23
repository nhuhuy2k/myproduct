import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames/bind";

import { ButtonLink } from "../button/Button";
import Images from "../../asset/Images";

const cx = classNames.bind();

const listPages = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Movies",
    path: "/movies",
  },
  {
    title: "TvSeries",
    path: "/tvseries",
  },
];

function Header() {
  const { pathname } = useLocation();

  const [classShrinkHeader, setClassShrinkHeader] = useState(
    "h-20 sm:h-28 bg-inherit sm:bg-inherit"
  );

  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.body.scrollTop > 0 ||
        document.documentElement.scrollTop > 0
      ) {
        setClassShrinkHeader("h-16 sm:h-24 bg-gradient-to-r from-black");
      } else {
        setClassShrinkHeader("h-20 sm:h-28 bg-inherit sm:bg-inherit");
      }
    };
    window.addEventListener("scroll", shrinkHeader);
    return () => {
      window.removeEventListener("scroll", shrinkHeader);
    };
  }, []);

  return (
    <header
      className={cx(
        "fixed top-0 left-0 right-0 z-50 flex justify-center items-center sm:justify-between sm:px-8 duration-500",
        `${classShrinkHeader}`
      )}
    >
      <Link
        to={listPages[0].path}
        className="flex justify-center items-center "
      >
        <img
          src={Images.logo}
          alt="logo-themovie"
          className="w-11 h-8 sm:w-20 sm:h-12"
        />
        <span className="text-xl ml-2 font-bold italic border-b-2 border-b-red hover:text-red sm:text-3xl">
          TheMovie
        </span>
      </Link>
      <div className="fixed bottom-0 left-0 right-0 flex justify-between items-center font-semibold text-base px-4 h-11 bg-black  sm:bg-opacity-0  sm:static sm:px-0">
        {listPages.map((item, index) => {
          return (
            <ButtonLink
              key={index}
              path={item.path}
              classNames={cx(
                "text-lg font-bold hover:text-red relative after:content after:absolute after:w-0 after:bottom-0 after:h-0.5 after:bg-red after:translate-x-[-100%] after:hover:w-full after:ease-in-out after:duration-500  sm:text-2xl sm:ml-6",
                `${pathname === item.path && "after:w-full"}`
              )}
            >
              {item.title}
            </ButtonLink>
          );
        })}
      </div>
    </header>
  );
}

export default Header;

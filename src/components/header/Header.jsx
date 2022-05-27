import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import { ButtonLink } from "../button/Button";
import Logo from "../logo/Logo";

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
      <Logo/>
      <div className="fixed bottom-0 left-0 right-0 flex justify-between items-center font-semibold text-base px-4 h-11 bg-black  sm:bg-opacity-0  sm:static sm:px-0">
        {listPages.map((item, index) => {
          return (
            <ButtonLink
              key={index}
              path={item.path}
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

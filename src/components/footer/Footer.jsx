import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import Logo from "../logo/Logo";
const cx = classNames.bind();
const listPage = [
  [
    { title: "Home", path: "/" },
    { title: "Contact us", path: "/" },
    { title: "Term of", path: "/" },
    { title: "About us", path: "/" },
  ],
  [
    { title: "Live", path: "/" },
    { title: "Premium", path: "/" },
    { title: "Pravacy policy", path: "/" },
  ],
  [
    { title: "You must wacth", path: "/" },
    { title: "Recent release", path: "/" },
    { title: "Top IMDB", path: "/" },
  ],
];
function Footer() {
  return (
    <div
      className={cx(
        "flex flex-col h-60 mb-[44px] bg-[url('./asset/images/footer_img.jpg')] bg-cover bg-no-repeat justify-center sm:mb-0 sm:h-[500px]"
      )}
    >
      <Logo classes="mx-auto max-w-[220px]" />
      <div
        className={cx(
          "flex px-6 w-[90%] mx-30px justify-between  font-bold leading-7 mt-[20px] text-sm sm:text-2xl sm:leading-loose md:w-[70%] sm:w-[90%] sm:mx-auto"
        )}
      >
        {listPage.map((items, Index) => {
          return (
            <ul key={Index}>
              {items.map((item, Index) => {
                return (
                  <li key={Index}>
                    <Link to={item.path}>{item.title}</Link>
                  </li>
                );
              })}
            </ul>
          );
        })}
      </div>
    </div>
  );
}

export default Footer;

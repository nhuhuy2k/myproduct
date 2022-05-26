// import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

// import { ButtonLink } from "../button/Button";
import Images from "../../asset/Images";

const cx = classNames.bind();

function Footer() {
  return (
    <div className={cx("flex flex-col h-60 mb-[44px] bg-[url('./asset/images/footer_img.jpg')] bg-cover bg-no-repeat justify-center sm:mb-0 sm:h-[400px]")}>
      <div>
        <Link to='/' className={cx('flex mx-auto items-center  w-[220px]')}>
          <img
            src={Images.logo}
            alt="logo-themovie"
            className="w-11 h-8 sm:w-20 sm:h-12"
          />
          <span className="text-xl ml-2 font-bold italic border-b-2 border-b-red hover:text-red sm:text-3xl">
            TheMovie
          </span>
        </Link>
        <div className={cx('flex px-6 mx-auto justify-between  font-bold leading-7 mt-[20px] text-sm sm:text-xl sm:leading-10 max-w-[850px]' )}>
            <ul >
                <li ><Link to='/' className={cx('hover:text-red cursor-pointer ')} >Home</Link></li>
                <li className={cx('hover:text-red cursor-pointer ')}>Contact us</li>
                <li className={cx('hover:text-red cursor-pointer ')}>Term of services</li>
                <li className={cx('hover:text-red cursor-pointer ')}>About us</li>
            </ul>
            <ul>
                <li className={cx('hover:text-red cursor-pointer ')}>Live</li>
                <li className={cx('hover:text-red cursor-pointer ')}>FAQ</li>
                <li className={cx('hover:text-red cursor-pointer ')}>Premium</li>
                <li className={cx('hover:text-red cursor-pointer ')}>Pravacy policy</li>
            </ul>
            <ul>
                <li className={cx('hover:text-red cursor-pointer ')}>You must wacth</li>
                <li className={cx('hover:text-red cursor-pointer ')}>Recent release</li>
                <li className={cx('hover:text-red cursor-pointer ')}>Top IMDB</li>
            </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;

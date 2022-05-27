import { Link } from "react-router-dom"
import Images from "../../asset/images"
import classNames from "classnames/bind"

const cx = classNames.bind()

function Logo({classes}){
    return (
        <Link
          to="/"
          className={cx("flex items-center ", classes)}
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
    )
}

export default Logo
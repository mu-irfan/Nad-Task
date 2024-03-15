import { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { ImTable2 } from "react-icons/im";
import { FiSearch } from "react-icons/fi";
import { PiSpeakerSimpleLowFill } from "react-icons/pi";
import { TbDisabled } from "react-icons/tb";
import { lgNavItems } from "../../config/constant";
import NavToggle from "./NavToggle";
import PropTypes from "prop-types";
import Dropdown from "../DropDown/Dropdown";
import DropdownContent from "../DropDown/DropdownContent";

function Navbar({ onSearchIconClick }) {
  const [isOpen, setIsOpen] = useState(false);

  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleAboutUsHover = () => {
    setIsDropdownVisible(true);
  };

  const handleAboutUsLeave = () => {
    setIsDropdownVisible(false);
  };

  const mobileMenuTransitionClasses = isOpen
    ? "transition ease-out duration-200 opacity-100 scale-100"
    : "transition ease-in duration-150 opacity-0 scale-95";
  const mobileMenuClasses = `md:hidden absolute bg-white w-full ${mobileMenuTransitionClasses}`;

  return (
    <nav>
      <div className="max-w-7xl mx-auto px-8 sm:px-6 md:px-0 lg:px-6 text-[#9E9890]">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="/public/assets/images/logo.png"
              alt=""
              className="w-40 flex md:hidden"
            />
            <Link
              to="/"
              className="hidden md:flex px-3 py-2 rounded-md text-sm font-medium"
            >
              <IoMdHome size={28} className="text-[#B5986B]" />
            </Link>
            <Link
              to="/"
              className="hidden lg:flex px-3 py-2 rounded-md text-sm font-medium"
            >
              <ImTable2 size={20} className="text-[#B5986B]" />
            </Link>
            <div className="hidden md:block">
              <div className="ml-3 flex items-baseline space-x-3 lg:space-x-5 font-semibold text-xs xl:text-[13px]">
                {lgNavItems.map((item, index) => (
                  <Link
                    key={index}
                    to="/"
                    className="py-2 rounded-md"
                    onMouseEnter={
                      item === "About Us" ? handleAboutUsHover : undefined
                    }
                    onMouseLeave={
                      item === "About Us" ? handleAboutUsLeave : undefined
                    }
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-3 text-[#B5986B]">
            <FiSearch
              size={20}
              onClick={onSearchIconClick}
              className="cursor-pointer"
            />
            <div className="border-l-2 border-gray-300 h-3"></div>
            <p className="arabic font-bold">عربي</p>
            <div className="items-center hidden lg:flex gap-3">
              <div className="border-l-2 border-gray-300 h-3"></div>
              <PiSpeakerSimpleLowFill size={20} />
              <p className="text-xs">Listen to Page</p>
              <TbDisabled size={20} />
            </div>
          </div>
          <NavToggle isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>

      {isOpen && (
        <div className={mobileMenuClasses} id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-sm font-semibold text-[#9E9890]">
            {lgNavItems.map((item, index) => (
              <Link key={index} to="/" className="block py-3">
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}

      {isDropdownVisible && (
        <Dropdown
          handleAboutUsHover={handleAboutUsHover}
          handleAboutUsLeave={handleAboutUsLeave}
        >
          <DropdownContent />
        </Dropdown>
      )}
    </nav>
  );
}

export default Navbar;

Navbar.propTypes = {
  onSearchIconClick: PropTypes.func.isRequired,
};

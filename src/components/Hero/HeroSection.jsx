import { useEffect, useRef } from "react";
import { FiSearch } from "react-icons/fi";
import PropTypes from "prop-types";
import HeroCards from "./HeroCards/HeroCard";

const HeroSection = ({ isInputFocused }) => {
  const inputRef = useRef(null);
  useEffect(() => {
    if (isInputFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isInputFocused]);

  return (
    <div className="bg-hero-pattern bg-contain">
      <div className="container mx-auto bg-white flex px-5 pt-3 mt-12 md:flex-row flex-col items-center">
        <div className="lg:flex-grow lg:w-1/2 lg:pr-24 md:pr-16 flex flex-col mb-16 md:mb-0 items-center text-center md:max-w-lg">
          <img
            src="/assets/images/hero-card-logo.png"
            alt=""
            className="w-52 md:w-72"
          />
          <h1 className="title-font text-2xl xl:text-3xl mt-3 font-medium text-[#74767A] uppercase text-center">
            وعد حكومة دولة الإمارات لخدمات المستقبل
          </h1>
          <h1 className="title-font text-xl xl:text-2xl max-w-md font-medium text-[#74767A] uppercase text-center">
            The UAE Government Charter for future services
          </h1>
          <button className="bg-[#B5986B] px-16 xl:px-20 py-2 text-white rounded-3xl mt-4">
            Learn More
          </button>
        </div>
        <div className="bg-hero-cards-bg hidden rounded-t-md lg:block lg:max-w-3xl lg:w-full md:w-1/2 w-full">
          <HeroCards />
        </div>
      </div>
      <div className="pt-6 pb-10 px-6 relative">
        <span className="absolute">
          <FiSearch
            size={24}
            className="relative top-4 left-8 text-[#B5986B]"
          />
        </span>
        <input
          ref={inputRef}
          type="text"
          placeholder="Enter Search looking at"
          className="pl-16 pr-24 md:pl-32 md:pr-96 rounded-[30px] py-4 shadow-xl"
        />
      </div>
    </div>
  );
};

export default HeroSection;

HeroSection.propTypes = {
  isInputFocused: PropTypes.bool.isRequired,
};

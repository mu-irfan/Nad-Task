import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { sliderData } from "../../config/constant";
import PropTypes from "prop-types";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <FaChevronRight
        style={{
          ...style,
          color: "grey",
          fontSize: "26px",
        }}
      />
    </div>
  );
}

function SamplePrevousArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <FaChevronLeft
        style={{
          ...style,
          color: "grey",
          fontSize: "26px",
        }}
      />
    </div>
  );
}

function ServiceSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevousArrow />,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="relative top-[940px] sm:top-[500px] md:top-[280px] lg:top-[420px]">
      <div className="flex flex-col w-full mb-8 px-8 md:px-32">
        <h1 className="sm:text-2xl text-xl text-left pt-4 font-medium title-font mb-4 text-gray-900">
          E-Services
        </h1>
        <hr className="w-32 border-t-2 border-[#B5986B]" />
      </div>
      <div className="w-3/4 m-auto">
        <div className="mt-10">
          <Slider {...settings}>
            {sliderData.map((d) => (
              <div
                key={d.name}
                className="bg-[#FCF1E1] text-gray-700 rounded-xl"
              >
                <img src={d.img} alt="" className="w-24 mx-auto mt-8 mb-2" />
                <div className="flex flex-col items-center justify-center gap-4 p-4">
                  <p className="text-xl font-semibold">{d.name}</p>
                  <p className="text-center">{d.review}</p>
                  <button className="bg-[#B5986B] text-white text-lg px-6 py-1 rounded-xl hover:bg-gray-400">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default ServiceSlider;

SampleNextArrow.propTypes = {
  className: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

SamplePrevousArrow.propTypes = {
  className: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

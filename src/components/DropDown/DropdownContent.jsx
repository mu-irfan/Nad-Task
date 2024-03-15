import { dropdownTilesText } from "../../config/constant";
import { FaRegLightbulb } from "react-icons/fa6";

const DropdownContent = () => {
  return (
    <>
      {" "}
      <div className="py-8 px-4 lg:w-1/3">
        <div className="h-full flex flex-col items-center">
          {dropdownTilesText.map((text, ind) => {
            return (
              <div key={ind} className="flex-grow pl-6">
                <h2 className="tracking-widest md:pr-8 text-sm title-font font-medium text-[#9E9890] mb-1">
                  {text}
                </h2>
                <hr className="w-40 mx-auto border-t border-[#B5986B]" />
              </div>
            );
          })}
        </div>
      </div>
      <div className="py-8 px-4 lg:w-1/3">
        <div className="h-full flex items-start">
          <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none"></div>
          <div className="flex-grow pl-6 text-[#9E9890]">
            <h2 className="tracking-widest text-md text-left md:pl-9 title-font font-medium  mb-1">
              Humanities
            </h2>
            <div className="flex items-start gap-4">
              <span className="font-medium text-xl text-[#B5986B] title-font leading-none">
                <FaRegLightbulb />
              </span>
              <p className="leading-relaxed text-sm text-left mb-5">
                Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                microdosing tousled waistcoat.
              </p>
            </div>
            <button className="bg-[#B5986B] px-12 mr-20 py-1.5 text-white rounded-3xl">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="px-4 lg:w-1/3">
        <div className="h-full flex items-start">
          <div className="flex-grow pl-6">
            <img src="/assets/images/ai-dropdown.png" alt="" className="w-60" />
          </div>
        </div>
      </div>
    </>
  );
};

export default DropdownContent;

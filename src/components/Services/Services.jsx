import { servicesCardsData } from "../../config/constant";

const Services = () => {
  return (
    <div className="container px-5 py-2 mx-auto">
      <div className="flex flex-col w-full mb-8">
        <h1 className="sm:text-2xl text-xl text-left pt-4 font-medium title-font mb-4 text-gray-900">
          Most Used Services
        </h1>
        <hr className="w-52 border-t-2 border-[#B5986B]" />
      </div>
      <div className="flex flex-wrap -m-4 text-center px-12 lg:px-0">
        {servicesCardsData.map((service, ind) => {
          return (
            <div key={ind} className="py-4 px-1.5 md:w-1/4 sm:w-1/2 w-full">
              <div className="bg-[#FCF1E1] group text-[#B5986B] hover:text-white hover:bg-[#e7cda7] px-4 py-6 h-48">
                <img
                  src={service.imgLink}
                  alt=""
                  className="w-13 h-14 mx-auto transition-all duration-300 group-hover:w-10 group-hover:h-10"
                />
                <h2 className="title-font font-medium text-md lg:text-xl pt-4 max-w-[200px] mx-auto">
                  {service.title}
                </h2>
                <p className="leading-relaxed text-xs">{service.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;

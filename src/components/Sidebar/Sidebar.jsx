import { sideBarLinks } from "../../config/constant";

const Sidebar = () => {
  return (
    <div className="border-r h-full w-20 px-1 flex flex-col justify-center">
      {sideBarLinks.map((section, sectionIndex) => (
        <div
          key={sectionIndex}
          className="flex flex-col items-center gap-2 text-[#B5986B]"
        >
          {section.links.map((item, itemIndex) => (
            <div key={itemIndex}>
              <img src={item.icon} alt="" className="w-14" />
              <p className="text-xs">{item.name}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;

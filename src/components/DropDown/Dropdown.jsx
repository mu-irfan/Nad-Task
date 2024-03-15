import PropTypes from "prop-types";
const Dropdown = ({ handleAboutUsHover, handleAboutUsLeave, children }) => {
  return (
    <>
      <div
        className="absolute z-20 w-full bg-[#F8F4F0] px-5 py-24"
        onMouseEnter={handleAboutUsHover}
        onMouseLeave={handleAboutUsLeave}
      >
        <div className="flex flex-wrap -mx-4 -my-8">{children}</div>
      </div>
    </>
  );
};

Dropdown.propTypes = {
  handleAboutUsHover: PropTypes.func.isRequired,
  handleAboutUsLeave: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Dropdown;

Dropdown.propTypes = {
  handleAboutUsHover: PropTypes.func.isRequired,
  handleAboutUsLeave: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

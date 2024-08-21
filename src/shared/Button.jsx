import PropTypes from "prop-types";
function Button({ cls, name }) {
  return (
    <>
      {/* button */}
      <button className={`${cls} btn hover:text-white hover:bg-primary`}>
        {name}
      </button>
    </>
  );
}

// prop validation
Button.propTypes = {
  cls: PropTypes.string,
  name: PropTypes.string,
};
export default Button;

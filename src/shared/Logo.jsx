import PropTypes from "prop-types";

function Logo({ cls }) {
  return (
    <>
      <h3 className={`${cls} text-xl md:text-2xl font-bold text-primary`}>
        NextGen IT
      </h3>
    </>
  );
}

// prop validation

Logo.propTypes = {
  cls: PropTypes.string,
};

export default Logo;

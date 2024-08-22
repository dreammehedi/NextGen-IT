import PropTypes from "prop-types";

function Logo({ cls }) {
  return (
    <>
      <a href="/">
        <h3 className={`${cls} text-xl md:text-2xl font-bold text-primary`}>
          NextGen IT
        </h3>
      </a>
    </>
  );
}

// prop validation

Logo.propTypes = {
  cls: PropTypes.string,
};

export default Logo;

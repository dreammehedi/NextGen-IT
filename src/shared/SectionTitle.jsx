import PropTypes from "prop-types";

function SectionTitle({ title }) {
  return (
    <>
      <div className="container overflow-hidden">
        <h2
          data-aos="flip-up"
          data-aos-duration="400"
          data-aos-easing="ease-in-out"
          className="text-center pb-4 md:pb-6 lg:pb-8 font-bold text-3xl lg:text-4xl text-primary"
        >
          {title}
        </h2>
      </div>
    </>
  );
}

// prop validation

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

// default props
export default SectionTitle;

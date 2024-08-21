import Button from "../shared/Button";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// banner context
const bannerContent = [
  {
    id: 1,
    headline: "Transform Your Digital Presence",
    subheadline:
      "Leverage cutting-edge marketing strategies to elevate your brand.",
    cta: "Get Started",
    backgroundImage: "path/to/cityscape-or-digital-network.jpg",
  },
  {
    id: 2,
    headline: "Innovative Solutions for Modern Businesses",
    subheadline:
      "Discover our range of digital marketing services designed to drive results.",
    cta: "Learn More",
    backgroundImage: "path/to/workspace-or-abstract-digital.jpg",
  },
  {
    id: 3,
    headline: "Unlock Your Business Potential",
    subheadline:
      "Harness the power of data-driven marketing to grow your audience and increase engagement.",
    cta: "Explore Services",
    backgroundImage: "path/to/business-growth-chart.jpg",
  },
  {
    id: 4,
    headline: "Your Success is Our Mission",
    subheadline:
      "Partner with us for tailored strategies that deliver measurable outcomes.",
    cta: "Contact Us",
    backgroundImage: "path/to/professional-team.jpg",
  },
  {
    id: 5,
    headline: "Stay Ahead of the Competition",
    subheadline:
      "Utilize our expertise to stay at the forefront of digital marketing trends.",
    cta: "Request a Consultation",
    backgroundImage: "path/to/high-tech-or-futuristic.jpg",
  },
];

function Banner() {
  return (
    <>
      {/* banner */}
      <section>
        <Swiper
          spaceBetween={20}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {/* single banner slide */}
          {bannerContent.map((banner, ind) => {
            const { headline, subheadline, cta } = banner;

            return (
              <>
                <SwiperSlide key={ind}>
                  <div
                    style={{
                      background: `linear-gradient(4deg, #a0a0a087, #0205234d), url(https://img.freepik.com/free-vector/abstract-style-network-connection-background_23-2148876733.jpg)`,
                    }}
                    className="w-full h-screen min-h-[500px] !bg-no-repeat !bg-cover text-white flex flex-col justify-center items-center text-center "
                  >
                    <div className="container space-y-3">
                      <h1 className="text-primary font-bold text-3xl lg:text-4xl">
                        {headline}
                      </h1>
                      <h3 className="text-sm font-semibold">{subheadline}</h3>
                      <Button
                        cls={"hover:text-white hover:bg-primary"}
                        name={cta}
                      ></Button>
                    </div>
                  </div>
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>
      </section>
    </>
  );
}

export default Banner;

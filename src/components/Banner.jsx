import Button from "../shared/Button";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./banner.css";
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
    backgroundImage:
      "https://img.freepik.com/free-vector/abstract-style-network-connection-background_23-2148876733.jpg",
  },
  {
    id: 2,
    headline: "Innovative Solutions for Modern Businesses",
    subheadline:
      "Discover our range of digital marketing services designed to drive results.",
    cta: "Learn More",
    backgroundImage:
      "https://img.freepik.com/free-photo/close-up-idea-concept_23-2148882593.jpg?t=st=1724228901~exp=1724232501~hmac=c655eda0ac986bedc278f24097027071241f41857b652ca59d2e303961e5f6a7&w=826",
  },
  {
    id: 3,
    headline: "Unlock Your Business Potential",
    subheadline:
      "Harness the power of data-driven marketing to grow your audience and increase engagement.",
    cta: "Explore Services",
    backgroundImage:
      "https://img.freepik.com/free-photo/corporate-business-handshake-partners_53876-102581.jpg?ga=GA1.1.376098937.1716077921&semt=ais_hybrid",
  },
  {
    id: 4,
    headline: "Your Success is Our Mission",
    subheadline:
      "Partner with us for tailored strategies that deliver measurable outcomes.",
    cta: "Contact Us",
    backgroundImage:
      "https://img.freepik.com/free-photo/cup-man-achievement-success-honor_1150-1719.jpg?ga=GA1.1.376098937.1716077921&semt=ais_hybrid",
  },
  {
    id: 5,
    headline: "Stay Ahead of the Competition",
    subheadline:
      "Utilize our expertise to stay at the forefront of digital marketing trends.",
    cta: "Request a Consultation",
    backgroundImage:
      "https://img.freepik.com/free-photo/first-place-medal_23-2148930691.jpg?ga=GA1.1.376098937.1716077921&semt=ais_hybrid",
  },
];

function Banner() {
  return (
    <>
      {/* banner */}
      <section id="banner" className="container rounded-md overflow-hidden">
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
          className="rounded-md overflow-hidden"
        >
          {/* single banner slide */}
          {bannerContent.map((banner, ind) => {
            const { headline, subheadline, cta, backgroundImage } = banner;

            return (
              <>
                <SwiperSlide key={ind}>
                  <div
                    style={{
                      background: `linear-gradient(4deg, #a0a0a087, #0205234d), url(${backgroundImage})`,
                    }}
                    className="w-full h-[600px] rounded-md overflow-hidden min-h-[500px] !bg-no-repeat !bg-cover !bg-center text-white flex flex-col justify-center items-center text-center "
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

import SectionTitle from "./../shared/SectionTitle";
const testimonial = [
  {
    name: "Md. Mehedi Hassan",
    position: "React Js Developer",
    testimonialFeedback:
      "NextGen IT transformed our digital presence with their innovative solutions. Their attention to detail and customer-centric approach set them apart.",
    image: "https://i.ibb.co/WsXJWvN/favicon.png",
  },
  {
    name: "Ahidur Rahaman",
    position: "Photographer",
    testimonialFeedback:
      "The team at NextGen IT exceeded our expectations. Their expertise in web development and digital marketing helped us achieve remarkable growth.",
    image: "https://i.ibb.co/61K8wXk/ahidur-rahman.jpg",
  },
  {
    name: "Michael Johnson",
    position: "CTO, TechWave Solutions",
    testimonialFeedback:
      "Working with NextGen IT was a game-changer for us. Their technical skills and project management were outstanding.",
    image: "https://i.ibb.co/hg1sbts/client2.png",
  },
  {
    name: "Emily Davis",
    position: "Product Manager, Bright Ideas Co.",
    testimonialFeedback:
      "The professionalism and creativity that NextGen IT brought to our project were unmatched. We’re thrilled with the results.",
    image: "https://i.ibb.co/zXzmGz9/client3.png",
  },
  {
    name: "Robert Lee",
    position: "Founder, InnovateX",
    testimonialFeedback:
      "NextGen IT's commitment to excellence is evident in every aspect of their work. Our collaboration was smooth, and the outcomes exceeded our expectations.",
    image:
      "https://i.ibb.co/NgRFNjP/bohemian-man-with-his-arms-crossed-1368-3542.jpg",
  },

  {
    name: "David Wilson",
    position: "CEO, Quantum Technologies",
    testimonialFeedback:
      "NextGen IT's technical expertise and creative problem-solving skills were crucial to the success of our project. Highly recommended.",
    image: "https://i.ibb.co/hg1sbts/client2.png",
  },
  {
    name: "Lisa White",
    position: "Director of Operations, Horizon Enterprises",
    testimonialFeedback:
      "From start to finish, the team at NextGen IT was responsive, professional, and highly effective. Our project couldn't have gone better.",
    image: "https://i.ibb.co/zXzmGz9/client3.png",
  },
];

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./banner.css";
// import required modules
import { Autoplay, Navigation } from "swiper/modules";

function Testimonial() {
  return (
    <>
      {/* company projects */}
      <section className="py-6 md:py-8 lg:py-10 bg-white">
        <SectionTitle title={"Testimonials"}></SectionTitle>

        {/* company projects */}
        <div className="mt-4 container">
          <Swiper
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="py-4"
          >
            {/* testimonial */}
            {testimonial.map((testimonial, ind) => {
              const { name, position, testimonialFeedback, image } =
                testimonial;
              return (
                <>
                  <SwiperSlide key={ind}>
                    <div className="bg-[#f9f9f9] p-4 rounded-md shadow-md my-transition hover:shadow-primary/30 hover:scale-[1.03] hover:cursor-pointer h-fit md:h-[300px] space-y-2">
                      <img
                        src={image}
                        alt={name}
                        className="w-24 h-24 rounded-full"
                      />
                      <h3 className="text-xl font-semibold text-primary font-montserrat">
                        {name}
                      </h3>
                      <p className="text-sm font-medium text-black">
                        {position}
                      </p>
                      <p>{testimonialFeedback}</p>
                    </div>
                  </SwiperSlide>
                </>
              );
            })}
          </Swiper>
        </div>
      </section>
    </>
  );
}

export default Testimonial;

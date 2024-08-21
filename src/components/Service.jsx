import SectionTitle from "../shared/SectionTitle";

const companyServices = [
  {
    title: "Search Engine Optimization (SEO)",
    description:
      "Improve your website's visibility on search engines to attract more organic traffic and enhance your online presence.",
    image: "https://i.ibb.co/jLYjbb5/seo.png",
  },
  {
    title: "Pay-Per-Click (PPC) Advertising",
    description:
      "Drive targeted traffic to your website with strategic ad placements on search engines and social media platforms.",
    image: "https://i.ibb.co/YZjtm8R/icons8-ppc-64.png",
  },
  {
    title: "Social Media Management",
    description:
      "Enhance your brand's social media presence with engaging content, audience interactions, and performance analysis.",
    image: "https://i.ibb.co/wLFbFXZ/icons8-social-96.png",
  },
  {
    title: "Content Marketing",
    description:
      "Create and distribute valuable content to attract, engage, and retain your target audience, driving business growth.",
    image: "https://i.ibb.co/X3GGTdg/icons8-content-management-64.png",
  },
  {
    title: "Email Marketing",
    description:
      "Develop and manage email campaigns to nurture leads, increase conversions, and build lasting customer relationships.",
    image: "https://i.ibb.co/xzDZnMd/icons8-email-marketing-96.png",
  },
  {
    title: "Web Design & Development",
    description:
      "Design and build responsive, user-friendly websites that align with your brand and business objectives.",
    image: "https://i.ibb.co/X3rvN8w/icons8-backend-development-96.png",
  },
  {
    title: "Analytics & Reporting",
    description:
      "Track and analyze your marketing performance to make data-driven decisions and optimize your strategies for better results.",
    image: "https://i.ibb.co/yStqcbH/icons8-web-analytics-96.png",
  },
  {
    title: "Brand Strategy",
    description:
      "Develop a comprehensive brand strategy that includes brand identity, positioning, and messaging to differentiate your business in the market.",
    image: "https://i.ibb.co/PchB0rf/icons8-strategy-64.png",
  },
];

function Service() {
  return (
    <>
      {/* company services */}
      <section className="py-6 md:py-8 lg:py-10 bg-[#f9f9f9]">
        <SectionTitle title={"Our Services"}></SectionTitle>

        {/* company services */}
        <div className="mt-4 container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {/* service */}
          {companyServices.map((service, ind) => {
            const { title, description, image } = service;

            return (
              <>
                <div
                  key={ind}
                  className="bg-white rounded-md text-center px-5 py-7 lg:p-6 my-transition hover:shadow-md hover:shadow-gray-400 hover:cursor-pointer space-y-3 flex flex-col justify-center items-center"
                >
                  <img
                    src={image}
                    alt={`Icon ${ind}`}
                    className="size-[60px]"
                  />
                  <h3 className="font-montserrat text-primary font-semibold">
                    {title}
                  </h3>
                  <p>{description}</p>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Service;

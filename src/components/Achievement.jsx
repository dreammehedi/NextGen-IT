import SectionTitle from "../shared/SectionTitle";
const companyAchievements = [
  {
    title: "Awarded Best Digital Marketing Agency 2023",
    description:
      "Recognized by the Global Marketing Association for outstanding performance and innovation in digital marketing.",
    image: "https://i.ibb.co/2FQ3XB3/icons8-award-96.png",
  },
  {
    title: "Successfully Managed 500+ Campaigns",
    description:
      "Delivered successful digital marketing campaigns for over 500 clients, driving significant growth and engagement.",
    image: "https://i.ibb.co/xCqk9vB/icons8-campaigns-64.png",
  },
  {
    title: "Achieved 99% Client Satisfaction",
    description:
      "Maintained a 99% client satisfaction rate through exceptional service and results-driven strategies.",
    image: "https://i.ibb.co/jhQf0JW/icons8-satisfaction-64.png",
  },
  {
    title: "Generated Over $10 Million in Revenue",
    description:
      "Helped clients generate over $10 million in revenue through effective digital marketing strategies and campaigns.",
    image: "https://i.ibb.co/vhqdrxZ/icons8-revenue-96.png",
  },
  {
    title: "Published 50+ Industry Reports",
    description:
      "Produced and published over 50 in-depth industry reports and white papers, establishing thought leadership in the field.",
    image: "https://i.ibb.co/59fdzbN/icons8-reports-96.png",
  },
];

function Achievement() {
  return (
    <>
      {/* company achievement */}
      <section id="achievements" className="py-6 md:py-8 lg:py-10 bg-white">
        <SectionTitle title={"Our Achievement"}></SectionTitle>

        {/* company achievement */}
        <div className="mt-4 container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {/* achievement */}
          {companyAchievements.map((achievement, ind) => {
            const { title, description, image } = achievement;

            return (
              <>
                <div
                  key={ind}
                  className="bg-[#f9f9f9] rounded-md px-5 py-7 lg:p-6 my-transition hover:shadow-md hover:shadow-gray-400 hover:cursor-pointer space-y-3 flex flex-col"
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

export default Achievement;

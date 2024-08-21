import SectionTitle from "../shared/SectionTitle";
import Button from "./../shared/Button";
const companyProject = [
  {
    title: "E-Commerce Platform",
    description:
      "Developed a full-featured e-commerce platform with advanced search, filtering, and payment integration.",
    image:
      "https://i.ibb.co/Q6w15ZN/futuristic-shopping-online-landing-page-23-2148533395.jpg",
  },
  {
    title: "Mobile Banking App",
    description:
      "Created a secure mobile banking app with real-time transaction monitoring and account management features.",
    image:
      "https://i.ibb.co/B3n8vmJ/banking-app-interface-screens-23-2148594913.jpg",
  },
  {
    title: "Corporate Website Redesign",
    description:
      "Redesigned a corporate website with a modern UI/UX, improving user engagement and site performance.",
    image:
      "https://i.ibb.co/MGN4QkR/gradient-business-workshop-landing-page-template-23-2149414061.jpg",
  },
  {
    title: "Social Media Management Tool",
    description:
      "Built a comprehensive social media management tool with scheduling, analytics, and content creation features.",
    image:
      "https://i.ibb.co/NT40ctw/structure-social-media-with-colored-icons-1134-73.jpg",
  },
];

function Project() {
  return (
    <>
      <>
        {/* company projects */}
        <section className="py-6 md:py-8 lg:py-10 bg-[#f9f9f9]">
          <SectionTitle title={"Complete Projects"}></SectionTitle>

          {/* company projects */}
          <div className="mt-4 container grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
            {/* project */}
            {companyProject.map((project, ind) => {
              const { title, description, image } = project;
              return (
                <>
                  <div
                    key={ind}
                    className="rounded-md overflow-hidden space-y-3 ring-1 ring-primary"
                  >
                    {/* project image */}
                    <img
                      className="w-full h-[300px] object-cover my-transition hover:scale-[1.03] hover:cursor-pointer"
                      src={image}
                      alt={`project ${ind}`}
                    />

                    {/* project description */}
                    <div className="p-4 space-y-2">
                      <h3 className="text-primary font-semibold font-montserrat text-xl">
                        {title}
                      </h3>
                      <p>{description}</p>
                      <Button name={"View Detailes"}></Button>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </section>
      </>
    </>
  );
}

export default Project;

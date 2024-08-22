import Logo from "../shared/Logo";

// quick links data
const quickLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Services",
    link: "#services",
  },
  {
    title: "Projects",
    link: "#projects",
  },
  {
    title: "About Us",
    link: "#aboutus",
  },
  {
    title: "Contact Us",
    link: "#contactus",
  },
  {
    title: "Careers",
    link: "#careers",
  },
  {
    title: "Privacy Policy",
    link: "#privacy-policy",
  },
  {
    title: "Terms of Service",
    link: "#terms-of-service",
  },
];

function Footer() {
  return (
    <>
      {/* footer */}
      <footer className="py-6 md:py-8 lg:py-10 bg-white">
        <div className="container">
          {/* footer top */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {/* company info */}
            <div className="col-span-2 md:col-span-1">
              <Logo cls={"mb-4"}></Logo>
              <p>
                Leading the way in innovative digital solutions, NextGen IT
                delivers cutting-edge technology and expertise to help your
                business thrive in the digital age.
              </p>
            </div>

            {/* quick links */}
            <div className="">
              <h4 className="text-lg font-semibold text-primary capitalize mb-4">
                Quick Links
              </h4>
              <ul className="grid grid-cols-2 gap-4">
                {quickLinks.map((quickLink, ind) => {
                  const { title, link } = quickLink;

                  return (
                    <>
                      <li key={ind}>
                        <a
                          href={link}
                          className="text-wrap my-transition hover:pl-2 hover:text-primary"
                        >
                          {title}
                        </a>
                      </li>
                    </>
                  );
                })}
              </ul>
            </div>

            {/* contact info */}
            <div className="">
              <h4 className="text-lg font-semibold text-primary capitalize mb-4">
                Contact Us
              </h4>
              <p>Mirzapur, Tangail</p>
              <p>Dhaka, Bangladesh</p>
              <p className="text-wrap break-words">
                Email: dreammehedihassan@gmail.com
              </p>
              <p>Phone: (+880) 1830143234</p>
            </div>
          </div>

          {/* footer bottom copyright */}
          <div className="text-center mt-10">
            <p>
              &copy; 2024 NextGen IT. All rights reserved. Develop By{" "}
              <a
                href="https://www.facebook.com/dreammehedihassan/"
                target="_blank"
                className="text-primary underline font-montserrat font-medium"
              >
                Md. Mehedi Hassan
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

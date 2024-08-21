import SectionTitle from "./../shared/SectionTitle";

function ContactUs() {
  // handle contact us
  const handleContactUs = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const subject = event.target.subject.value;
    const message = event.target.message.value;
    const formData = { name, email, subject, message };
    console.log(formData);
  };
  return (
    <>
      {/* contact us */}
      <section className="py-6 md:py-8 lg:py-10 bg-[#f9f9f9]">
        <SectionTitle title={"Contact Us"}></SectionTitle>
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
          {/* contact image */}
          <img
            className="hidden lg:inline-block w-full h-fit object-cover mix-blend-multiply"
            src="https://i.ibb.co/WgVx42N/Screenshot-1.png"
            alt="contact us"
          />

          {/* contact form */}
          <form onSubmit={handleContactUs} className="space-y-4">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="block text-gray-700 font-semibold"
              >
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Enter Your Name..."
                required
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Enter Your Email..."
                required
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="subject"
                className="block text-gray-700 font-semibold"
              >
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Subject..."
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-gray-700 font-semibold"
              >
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Enter Your Message..."
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="btn my-transition hover:bg-primary hover:text-white"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default ContactUs;

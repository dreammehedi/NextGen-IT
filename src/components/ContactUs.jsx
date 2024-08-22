import { Map, Marker, ZoomControl } from "pigeon-maps";
import SectionTitle from "./../shared/SectionTitle";

import { useState } from "react";
function ContactUs() {
  // location
  const [center, setCenter] = useState([24.104288, 90.097893]);

  // zoom label
  const [zoom, setZoom] = useState(11);

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
      <section id="contactus" className="py-6 md:py-8 lg:py-10 bg-[#f9f9f9]">
        <SectionTitle title={"Contact Us"}></SectionTitle>
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8 py-2 !overflow-hidden">
          {/* google maps */}
          <div
            data-aos="fade-right"
            data-aos-duration={1000}
            data-aos-delay={300}
            className="rounded-md overflow-hidden md:h-fit h-[350px]"
          >
            <Map
              height={470}
              center={center}
              zoom={zoom}
              onBoundsChanged={({ center, zoom }) => {
                setCenter(center);
                setZoom(zoom);
              }}
            >
              <Marker
                width={50}
                anchor={[24.104288, 90.097893]}
                color={"#007bff"}
              />
              <ZoomControl
                style={{
                  right: 10,
                  left: "full",
                  top: "full",
                  bottom: 30,
                  zIndex: 100,
                }}
                buttonStyle={{
                  background: "white",
                  color: "#007bff",
                }}
              ></ZoomControl>
            </Map>
          </div>

          {/* contact form */}
          <form
            data-aos="fade-left"
            data-aos-duration={1000}
            data-aos-delay={600}
            onSubmit={handleContactUs}
            className="space-y-4 py-2 overflow-hidden"
          >
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

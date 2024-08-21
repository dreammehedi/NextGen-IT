import Achievement from "./components/Achievement";
import Banner from "./components/Banner";
import ContactUs from "./components/ContactUs";
import Project from "./components/Project";
import Service from "./components/Service";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <>
      {/* Banner */}
      <Banner></Banner>
      {/* Service */}
      <Service></Service>
      {/* Acheivement */}
      <Achievement></Achievement>
      {/* Project */}
      <Project></Project>
      {/* Testimonial */}
      <Testimonial></Testimonial>
      {/* Contact Us */}
      <ContactUs></ContactUs>
    </>
  );
}

export default App;

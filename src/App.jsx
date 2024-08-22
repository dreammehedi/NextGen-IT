import Achievement from "./components/Achievement";
import Banner from "./components/Banner";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Project from "./components/Project";
import Service from "./components/Service";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <>
      {/* Header */}
      <Header></Header>
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
      {/* Footer */}
      <Footer></Footer>
    </>
  );
}

export default App;

import Button from "../shared/Button";

function Banner() {
  return (
    <>
      {/* banner */}
      <section
        style={{
          background: `linear-gradient(4deg, #a0a0a087, #0205234d), url(https://img.freepik.com/free-vector/abstract-style-network-connection-background_23-2148876733.jpg)`,
        }}
        className="w-full h-screen min-h-[500px] !bg-no-repeat !bg-cover text-white flex justify-center items-center text-center"
      >
        {/* banner wrapper */}
        <div className="container space-y-3">
          <h1 className="text-primary font-bold text-3xl lg:text-4xl">
            Transform Your Digital Presence
          </h1>
          <h3 className="text-sm font-semibold">
            Leverage cutting-edge marketing strategies to elevate your brand.
          </h3>
          <Button
            cls={"hover:text-white hover:bg-primary"}
            name={" Get Started"}
          ></Button>
        </div>
      </section>
    </>
  );
}

export default Banner;

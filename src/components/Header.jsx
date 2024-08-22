import Logo from "./../shared/Logo";
// menu data
import { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import Menu from "./Menu";

function Header() {
  // humberger icon change
  const [humberger, setHumberger] = useState(false);

  return (
    <>
      {/* header */}
      <header
        data-aos="fade-in"
        data-aos-duration="1000"
        data-aos-delay="200"
        data-aos-anchor-placement="top-bottom"
        data-aos-offset="0"
        data-aos-once="true"
        className="py-4 sticky top-0 z-[9999] bg-[#f9f9f9] shadow-md"
      >
        <nav className="relative container flex justify-between items-center gap-4">
          {/* logo */}
          <Logo></Logo>
          {/* mobile menu */}
          <ul
            className={`${
              humberger ? "!right-[1.5rem] !visible" : "right-[180px] invisible"
            } lg:hidden w-auto h-fit absolute top-[52px] z-[99999] bg-white shadow-md p-4 md:p-6 lg:p-8 rounded-md flex flex-col gap-4 md:gap-6 font-montserrat font-medium text-black transition-all duration-200 ease-in`}
          >
            <Menu></Menu>
          </ul>

          {/* desktop menu */}
          <ul className="hidden lg:flex justify-center items-center gap-4 md:gap-6 font-montserrat font-medium text-black">
            <Menu></Menu>
          </ul>

          {/* hamburger menu icon */}
          <button
            onClick={() => {
              setHumberger(!humberger);
            }}
            className={`${
              humberger && "bg-primary text-white"
            } lg:hidden text-xl ring-1 ring-primary p-2 rounded-md my-transition hover:bg-primary hover:text-white`}
          >
            {humberger ? <IoClose /> : <FaBarsStaggered />}
          </button>
        </nav>
      </header>
    </>
  );
}

export default Header;

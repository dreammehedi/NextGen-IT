import Logo from "./../shared/Logo";
// menu data
import menu from "./Menu";

function Header() {
  return (
    <>
      {/* header */}
      <header className="py-4 sticky top-0 z-[9999] bg-[#f9f9f9] shadow-md">
        <nav className="container flex justify-between items-center gap-4">
          {/* logo */}
          <Logo></Logo>

          {/* desktop menu */}
          <ul className="hidden md:flex justify-center items-center gap-4 md:gap-6 font-montserrat font-medium text-black">
            {menu.map((menu, ind) => {
              const { title, link } = menu;
              return (
                <>
                  <li key={ind}>
                    <a href={link} className="my-transition hover:text-primary">
                      {title}
                    </a>
                  </li>
                </>
              );
            })}
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;

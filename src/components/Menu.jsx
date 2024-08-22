import { useState } from "react";
import menuData from "./MenuData";

function Menu() {
  // State to track the currently hovered menu item
  const [hoveredMenu, setHoveredMenu] = useState(null);

  return (
    <>
      {/* menu items */}
      {menuData.map((menu, ind) => {
        const { title, link, submenu } = menu;
        return (
          <li key={ind} className="relative">
            <a
              onMouseOver={() => {
                if (submenu) {
                  setHoveredMenu(title);
                }
              }}
              onMouseOut={() => {
                if (submenu) {
                  setHoveredMenu(null);
                }
              }}
              href={link}
              className="my-transition hover:text-primary"
            >
              {title}
            </a>
            {/* Submenu */}
            {submenu && (
              <ul
                onMouseOver={() => setHoveredMenu(title)}
                onMouseOut={() => setHoveredMenu(null)}
                className={`${
                  hoveredMenu === title
                    ? "flex top-[12px] lg:top-[42px]"
                    : "invisible top-[100px]"
                } !z-[9999999] w-[220px] absolute -left-[230px] lg:left-0 flex-col bg-white shadow-md p-4 rounded-md gap-1 font-montserrat font-medium text-black my-transition text-right lg:text-left`}
              >
                {submenu.map((submenuItem, submenuInd) => {
                  const { link, title } = submenuItem;
                  return (
                    <li key={submenuInd}>
                      <a
                        href={link}
                        className="text-sm my-transition hover:text-primary hover:pl-1"
                      >
                        {title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            )}
          </li>
        );
      })}
    </>
  );
}

export default Menu;

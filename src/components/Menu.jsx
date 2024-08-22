// menu data

import menuData from "./MenuData";

function Menu() {
  return (
    <>
      {/* menu items */}
      {menuData.map((menu, ind) => {
        const { title, link } = menu;
        return (
          <li key={ind}>
            <a href={link} className="my-transition hover:text-primary">
              {title}
            </a>
          </li>
        );
      })}
    </>
  );
}

export default Menu;

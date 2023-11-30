import { useState } from "react";
import "./App.css"

interface NavBarProps {
  brandName: string;
  imageSrcPath: string;
  navItems: string[];
}

function NavBar({ brandName, imageSrcPath, navItems }: NavBarProps) {

  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
         <div>
          <img
            src={imageSrcPath}
            width="60"
            height="60"
            className="d-inline-block align-center"
            alt=""
            />
        </div>
          <div className="brandName">{brandName}</div>
        </div>
        <div
          className="collapse
         navbar-collapse"
        id="navbarSupportedContent">
          <ul className="navbar-ul">
            {navItems.map((items, index) => (
              <li
                key={items}
                className="nav-item"
                onClick={() => setSelectedIndex(index)}
              >
                <a
                  className={
                    selectedIndex == index
                      ? "nav-link"
                      : "nav-link"
                  }
                  href= {"#" + items}
                >
                  {items}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
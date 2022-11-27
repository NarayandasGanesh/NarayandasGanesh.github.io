import React, { useState, forwardRef, useRef } from "react";
import "./navbar.css";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { Link } from "react-scroll";

const menuItems = [
  {
    id: 1,
    title: "home",
  },
  {
    id: 2,
    title: "about",
  },
  {
    id: 3,
    title: "skills",
  },
  {
    id: 4,
    title: "project",
  },
  {
    id: 5,
    title: "contact",
  },
  {
    id: 6,
    title: "resume",
  },
];
const Navbar = () => {
  const [screen, setScreen] = useState(false);

  return (
    <div>
      <nav className="navbar">
        <h3 className="logo">Portfolio</h3>
        <ul className={screen ? "nav-links-mobile" : "nav-links"}>
          {menuItems.map((menu) => {
            return (
              <li key={menu.id}>
                <Link to={menu.title} spy={true} smooth={true}>
                  {menu.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <button className="mobile-menu-btn">
          {screen ? (
            <AiOutlineClose onClick={() => setScreen(false)} />
          ) : (
            <FaBars onClick={() => setScreen(!screen)} />
          )}
        </button>
      </nav>
    </div>
  );
};

export default Navbar;


import React from "react";
import { Link } from "gatsby";
import * as styles from "./header.module.scss";
import logo from "../../images/GREENMIND.svg";
import cart from "../../images/Cart.png";
import person from "../../images/Person.png";
import filter from "../../images/FilterRight.png";
import line from "../../images/Line.png";

export default function Header() {
  return (
    <div className="max-w-[1240px] m-auto">
      <div className="flex justify-between py-6 md:py-5">
        <div className="flex content-center">
          <Link to="/"><img src={logo} alt="Logo" /></Link>
          <nav>
            <ul>
              <li>
                <Link to="/" activeClassName={styles.active} className="px-6">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  activeClassName={styles.active}
                  partiallyActive={true}
                  className="px-6"
                >
                  Products
                </Link>
                <ul>
                  <li className="hidden">
                    <Link to="/products/plants">Plants</Link>
                  </li>
                  <li className="hidden">
                    <Link to="/products/accessories">Accessories</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/contacts" activeClassName={styles.active} className="px-6">
                  Contacts
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center">
          <img className="px-4 md:px-6" src={cart} alt="Cart Icon" />
          <img className="px-4 md:px-6" src={person} alt="Person Icon" />
          <img className="px-4 md:px-6" src={line} alt="line" />
          <img className="px-4 md:px-6" src={filter} alt="Filter Right icon" />
        </div>
      </div>
    </div>
  );
}

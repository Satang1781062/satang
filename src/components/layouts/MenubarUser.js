//rafce
import React from "react";
import { Link } from "react-router-dom";

import "./MenubarUser.css";
const MenubarUser = () => {
  return (
    <nav className="navUser">
      <ul className="nav flex-column">
      <li className="nav-item">
          <Link to="/user/wishlist"> สินค้าที่ชื่นชอบ </Link>
        </li>
      <li className="nav-item">
          <Link to="/user/history"> ประวัติการสั่งซื้อ </Link>
        </li>
        
      </ul>
    </nav>
  );
};

export default MenubarUser;

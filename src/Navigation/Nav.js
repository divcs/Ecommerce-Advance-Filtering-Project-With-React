import React from "react";
import "./Nav.css";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";

export const Nav = () => {
  return (
    <nav>
      <div className="nav-container">
        <input
          type="text"
          className="search-input"
          placeholder="Enter your search shoes"
        />
      </div>

      <div className="profile-container">
        <a href="#">
          <FiHeart className="nav-icons">
            <a></a>
          </FiHeart>

          <a href="#">
            <AiOutlineShoppingCart className="nav-icons"></AiOutlineShoppingCart>
          </a>

          <a href="#">
            <AiOutlineUserAdd className="nav-icons"></AiOutlineUserAdd>
          </a>
        </a>
      </div>
    </nav>
  );
};

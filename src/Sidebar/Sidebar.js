import React from "react";
import "./Sidebar.css";
import {Category} from "./Category/Category";
import {Price} from "./Price/Price";
import { Colors } from "./Colors/Colors";

export const Sidebar = () => {
  <section className="sidebar">
    <div className="logo-container">
      <h1>🛒</h1>
    </div>
    <Category/>
    <Price/>
    <Colors/>
  </section>;
};

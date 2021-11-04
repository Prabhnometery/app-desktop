import React from "react";
import {
  StyledNavBar,
  StyledNavMenu,
} from "../pages/data-cloud/DataConsole.styled.js";
import { BrowserRouter as Router, Link } from "react-router-dom";

import { Box, Flex, Text, Button } from "@blend-ui/core";

import { PrifinaLogo } from "./PrifinaLogo";
import { ReactComponent as HomeIcon } from "../assets/home-icon.svg";

export default function Header({ sidebar, sidebarData }) {
  return (
    <div>
      <StyledNavBar>
        <PrifinaLogo className={"data-cloud"} />
        <Text className={"data-text"}>Data Cloud</Text>
      </StyledNavBar>

      <StyledNavMenu className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul>
          {sidebarData.map((item, index) => {
            return (
              <li key={index} className={item.class}>
                <Router>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </Router>
              </li>
            );
          })}
        </ul>
      </StyledNavMenu>
    </div>
  );
}

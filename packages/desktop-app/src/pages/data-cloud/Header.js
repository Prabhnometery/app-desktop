import React, { useState } from "react";
import { StyledNavBar, StyledNavMenu } from "./DataConsole.styled";
import { Box, Flex, Text, Button } from "@blend-ui/core";

import { PrifinaLogo } from "../../components/PrifinaLogo";

export default function Header({
  sidebar,
  sidebarData,

  changeVal,
}) {
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
                <a onClick={() => changeVal(item.val)}>
                  {item.icon}
                  <span>{item.title}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </StyledNavMenu>
    </div>
  );
}

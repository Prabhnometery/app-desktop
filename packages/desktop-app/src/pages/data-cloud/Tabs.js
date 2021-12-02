import React from "react";
import { StyledTab } from "./DataConsole.styled";

const Tabs = ({ changeTab }) => {
  return (
    <StyledTab>
      <div className="Tabs">
        {/* Tab nav */}
        <ul className="nav">
          <li onClick={() => changeTab(1)}>Available Sources (3)</li>
          <li onClick={() => changeTab(2)}>Connected Sources (1)</li>
        </ul>
      </div>
    </StyledTab>
  );
};
export default Tabs;

import React from "react";
import "./Tabs.css";

const Tabs = () => {
  return (
    <div className="Tabs">
      {/* Tab nav */}
      <ul className="nav">
        <li>Available Sources (3)</li>
        <li>Connected Sources (1)</li>
      </ul>
      <div className="outlet">{/* content will be shown here */}</div>
    </div>
  );
};
export default Tabs;

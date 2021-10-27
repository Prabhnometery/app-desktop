/* eslint-disable react/no-multi-comp */
import React, { useState, useEffect, useCallback, useRef } from "react";

import { Box, Flex, Text, Button } from "@blend-ui/core";
import { ReactComponent as DefaultWidget } from "../assets/third-party-app.svg";
import Header from "../components/Header";
import Card from "../components/Card";

import styled, { createGlobalStyle } from "styled-components";
import * as AiIcons from "react-icons/ai";

import { getPrifinaUserQuery, listDataSourcesQuery } from "@prifina-apps/utils";

import PropTypes from "prop-types";
import { listDataSources } from "@prifina-apps/utils/dist/esm/graphql/queries";
import Cards from "../components/Cards";

const GlobalStyle = createGlobalStyle`
.data-cloud  {
  fill: #00847A;
  flex-direction: row;
  left: 85px;
  margin-left: 50px;

}

.data-text {
  position: absolute;
  width: 300px;
  height: 27px;
  left: 115px;
  top: 30px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 27px;
  display: flex;
  align-items: center;
  color:#00847A;
  display: inline;

}

.card {
  display: flex;
  
}

`;

const DataConsole = props => {
  console.log("DATA CONSOLE PROPS ", props);
  const { GraphQLClient, prifinaID } = props;

  const dataSources = useRef({});
  const [installedDataSources, setInstalledDataSources] = useState([]);

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const sidebarData = [
    {
      title: "Home",
      path: "/",
      icon: <AiIcons.AiOutlineHome />,
      class: "nav-text",
    },
    {
      title: "All Files",
      path: "/",
      icon: <AiIcons.AiOutlineFile />,
      class: "nav-text",
    },
    {
      title: "Data Cloud",
      path: "/",
      icon: <AiIcons.AiOutlineCloud />,
      class: "nav-text",
    },
  ];

  useEffect(() => {
    listDataSourcesQuery(GraphQLClient, {
      filter: { sourceType: { lt: 3 } },
    }).then(res => {
      const dataSources = res.data.listDataSources.items;
      console.log("DATA SOURCES ", dataSources);
    });
  }, []);

  return (
    <>
      <GlobalStyle />
      <Box width={"100vw"} height={"100vh"}>
        <Header sidebar={sidebar} sidebarData={sidebarData} />
        <Card />
        <div className="card">
          <Cards />
        </div>
      </Box>
    </>
  );
};

DataConsole.displayName = "DataConsole";

export default DataConsole;

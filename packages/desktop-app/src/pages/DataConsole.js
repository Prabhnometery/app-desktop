/* eslint-disable react/no-multi-comp */
import React, { useState, useEffect, useCallback, useRef } from "react";

import { Box, Flex, Text, Button } from "@blend-ui/core";
import { ReactComponent as DefaultWidget } from "../assets/third-party-app.svg";

import styled, { createGlobalStyle } from "styled-components";
import { StyledCard } from "../pages/data-cloud/DataConsole.styled";

import { getPrifinaUserQuery, listDataSourcesQuery } from "@prifina-apps/utils";

import { ReactComponent as HomeIcon } from "../assets/home-icon.svg";
import { ReactComponent as AllFilesIcon } from "../assets/all-files.svg";
import { ReactComponent as CloudIcon } from "../assets/cloud-icon.svg";

import PropTypes from "prop-types";
import { listDataSources } from "@prifina-apps/utils/dist/esm/graphql/queries";
import Cards from "./data-cloud/Cards";
import Header from "./data-cloud/Header";

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
      icon: <HomeIcon width={"40px"} height={"20px"} />,
      class: "nav-text",
    },
    {
      title: "All Files",
      path: "/",
      icon: <AllFilesIcon width={"40px"} height={"20px"} />,
      class: "nav-text",
    },
    {
      title: "Data Cloud",
      path: "/",
      icon: <CloudIcon width={"40px"} height={"17px"} />,
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
        <StyledCard>
          <div>
            <Text
              textAlign={"left"}
              textStyle={"h3"}
              marginTop={"20px"}
              textStyle={"h2"}
              marginLeft={"32px"}
            >
              Bring all your data into Data Cloud
            </Text>
            <Box width={"85%"}>
              <Text
                textAlign={"left"}
                height={"66px"}
                width={"20px"}
                textStyle={"h4"}
                marginTop={"34px"}
                marginLeft={"32px"}
                color={"#99A0B0"}
              >
                Your Data Cloud is the heart of your Personal Data Engine. By
                bringing your data into your personal data cloud, you can
                activate it in different apps in your Prifina account.
              </Text>
            </Box>
            <Box marginTop={"90px"} marginLeft={"32px"}>
              <Button variation={"outline"}>Learn More</Button>
            </Box>
          </div>

          <div>{/* <ImageOne width={"300px"} height={"300px"} /> */}</div>
        </StyledCard>
        <div className="card">
          <Cards />
        </div>
      </Box>
    </>
  );
};

DataConsole.displayName = "DataConsole";

export default DataConsole;

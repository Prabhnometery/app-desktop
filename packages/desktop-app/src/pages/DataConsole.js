/* eslint-disable react/no-multi-comp */
import React, { useState, useEffect, useCallback, useRef } from "react";

import { Box, Flex, Text, Button } from "@blend-ui/core";
import { ReactComponent as DefaultWidget } from "../assets/third-party-app.svg";
import { ReactComponent as OuraRing } from "../assets/oura-ring.svg";
import { ReactComponent as Netflix } from "../assets/netflix.svg";
import { ReactComponent as GoogleMaps } from "../assets/google-maps.svg";

import styled, { createGlobalStyle } from "styled-components";
import { StyledCard } from "../pages/data-cloud/DataConsole.styled";
import {
  StyledTabs,
  StyledBoxDataOne,
  StyledBoxDataTwo,
  StyledBoxDataThree,
} from "../pages/data-cloud/DataConsole.styled";
import Tabs from "./data-cloud/Tabs";

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

.App {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

`;

const DataConsole = props => {
  console.log("DATA CONSOLE PROPS ", props);
  const { GraphQLClient, prifinaID } = props;

  const dataSources = useRef({});
  const [installedDataSources, setInstalledDataSources] = useState([]);

  const [val, setVal] = useState(1);
  console.log(val);

  const [tab, setTab] = useState(1);

  console.log(tab);

  const changeTab = value => {
    setTab(value);
  };

  const changeVal = value => {
    setVal(value);
  };

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const sidebarData = [
    {
      title: "Home",
      path: "/",
      icon: <HomeIcon width={"40px"} height={"20px"} />,
      class: "nav-text",
      val: 1,
    },
    {
      title: "All Files",
      path: "/",
      icon: <AllFilesIcon width={"40px"} height={"20px"} />,
      class: "nav-text",
      val: 2,
    },
    {
      title: "Data Cloud",
      path: "/",
      icon: <CloudIcon width={"40px"} height={"17px"} />,
      class: "nav-text",
      val: 3,
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
        <Header
          sidebar={sidebar}
          sidebarData={sidebarData}
          changeVal={changeVal}
        />
        {/* Home Page */}
        {val == 1 && (
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
          </StyledCard>
        )}
        {/* All Files */}
        {val == 2 && (
          <StyledCard>
            <div>
              <Text
                textAlign={"left"}
                textStyle={"h3"}
                marginTop={"20px"}
                textStyle={"h2"}
                marginLeft={"32px"}
              >
                All Files
              </Text>
            </div>
          </StyledCard>
        )}
        {/* Data Sources */}
        {val == 3 && (
          <div>
            <Box width={"100vw"} height={"15vw"}>
              <Tabs className={"App"} changeTab={changeTab} />
            </Box>

            {tab == 1 && (
              <>
                <Box width={"100vw"}>
                  <Text
                    textAlign={"center"}
                    height={"66px"}
                    width={"20px"}
                    textStyle={"h3"}
                    marginTop={"-100px"}
                    marginLeft={"20%"}
                    color={"#000000"}
                  >
                    Available Data Sources
                  </Text>
                  <Text
                    textAlign={"center"}
                    height={"66px"}
                    width={"5px"}
                    textStyle={"h3"}
                    marginTop={"10px"}
                    marginLeft={"20%"}
                    color={"#99A0B0"}
                  >
                    Select from Available Data Sources to add data to your Data
                    Cloud
                  </Text>
                </Box>
                <Box width={"100vh"} height={"50vh"}>
                  <StyledBoxDataOne>
                    <div>
                      <Flex marginTop={"-2%"} marginLeft={"-2"}>
                        <OuraRing width={"150px"} height={"100%"} />
                      </Flex>
                      <Text
                        marginLeft={"10%"}
                        textAlign={"center"}
                        textStyle={"h3"}
                        marginTop={"-35%"}
                      >
                        Oura Ring
                      </Text>
                      <Box width={"100%"}>
                        <Text
                          marginTop={"8px"}
                          textAlign={"center"}
                          textStyle={"h8"}
                          color={"#BC31EA"}
                          marginLeft={"20%"}
                        >
                          Health ★ Wearables
                        </Text>

                        <Text
                          marginLeft={"41%"}
                          textAlign={"left"}
                          textStyle={"h6"}
                          marginTop={"20px"}
                          color={"#AAAAAA"}
                        >
                          The most accurate data on Sleep, Readiness, and
                          Activity.
                        </Text>
                      </Box>

                      <Flex marginTop={"20%"} marginLeft={"2"}></Flex>

                      <Box marginTop={"-15%"}>
                        <Button
                          size={"lg"}
                          height={"10px"}
                          width={"150px"}
                          variation={"fill"}
                          colorStyle={"secondary"}
                        >
                          Connect
                        </Button>
                      </Box>
                    </div>
                  </StyledBoxDataOne>

                  <StyledBoxDataTwo>
                    <div>
                      <Flex marginTop={"-2%"} marginLeft={"-7%"}>
                        <Netflix width={"150px"} height={"100%"} />
                      </Flex>
                      <Text
                        textAlign={"center"}
                        marginLeft={"2%"}
                        textStyle={"h3"}
                        marginTop={"-41%"}
                      >
                        Netflix
                      </Text>
                      <Box width={"100%"}>
                        <Text
                          marginTop={"8px"}
                          textAlign={"center"}
                          textStyle={"h8"}
                          color={"#BC31EA"}
                          marginLeft={"140px"}
                        >
                          Entertainment ★ Streaming
                        </Text>
                        <Text
                          marginLeft={"41%"}
                          textAlign={"left"}
                          textStyle={"h6"}
                          marginTop={"10px"}
                          color={"#AAAAAA"}
                        >
                          Data on viewing consumption, habits and trends
                        </Text>
                      </Box>

                      <Flex marginTop={"20%"} marginLeft={"2"}></Flex>

                      <Box marginTop={"-17%"}>
                        <Button
                          marginLeft={"-7%"}
                          size={"lg"}
                          height={"10px"}
                          width={"150px"}
                          variation={"fill"}
                          colorStyle={"secondary"}
                        >
                          Connect
                        </Button>
                      </Box>
                    </div>
                  </StyledBoxDataTwo>

                  <StyledBoxDataThree>
                    <div>
                      <Flex marginTop={"-2%"} marginLeft={"-7%"}>
                        <OuraRing width={"150px"} height={"100%"} />
                      </Flex>
                      <Text
                        textAlign={"center"}
                        marginLeft={"20%"}
                        textStyle={"h3"}
                        marginTop={"-41%"}
                      >
                        Google Maps
                      </Text>
                      <Box width={"100%"}>
                        <Text
                          marginTop={"8px"}
                          textAlign={"center"}
                          textStyle={"h8"}
                          color={"#BC31EA"}
                          marginLeft={"82px"}
                        >
                          Health ★ Wearables
                        </Text>
                        <Text
                          marginLeft={"41%"}
                          textAlign={"left"}
                          textStyle={"h6"}
                          marginTop={"10px"}
                          color={"#AAAAAA"}
                        >
                          Data on viewing consumption, habits and trends
                        </Text>
                      </Box>

                      <Flex marginTop={"20%"} marginLeft={"2"}></Flex>

                      <Box marginTop={"-17%"}>
                        <Button
                          marginLeft={"-7%"}
                          size={"lg"}
                          height={"10px"}
                          width={"150px"}
                          variation={"fill"}
                          colorStyle={"secondary"}
                        >
                          Connect
                        </Button>
                      </Box>
                    </div>
                  </StyledBoxDataThree>
                </Box>

                <Box width={"100vw"}>
                  <Text
                    textAlign={"center"}
                    height={"66px"}
                    width={"20px"}
                    textStyle={"h3"}
                    marginTop={"-200px"}
                    marginLeft={"20%"}
                    color={"#000000"}
                  >
                    Add data to unlock value
                  </Text>
                  <Text
                    textAlign={"center"}
                    height={"66px"}
                    width={"5px"}
                    textStyle={"h3"}
                    marginTop={"10px"}
                    marginLeft={"20%"}
                    color={"#99A0B0"}
                  >
                    Connect your data sources to activate Prifina apps & widgets
                  </Text>
                  z
                </Box>
              </>
            )}
          </div>
        )}
        <div className="card">
          <Cards val={val} />
        </div>
      </Box>
    </>
  );
};

DataConsole.displayName = "DataConsole";

export default DataConsole;

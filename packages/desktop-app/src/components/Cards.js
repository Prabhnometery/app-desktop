import React from "react";
import { Box, Flex, Text, Button } from "@blend-ui/core";

import {
  StyledBoxOne,
  StyledBoxTwo,
} from "../pages/display-app/DataConsole.styled";

import { ReactComponent as VectorFileImageOne } from "../assets/vector-file-one.svg";
import { ReactComponent as DataSourcesImage } from "../assets/data-sources.svg";

export default function Cards() {
  return (
    <>
      <StyledBoxOne>
        <div>
          <Text textAlign={"center"} textStyle={"h2"}>
            Connect Data Sources
          </Text>
          <Box width={"100%"}>
            <Text
              marginTop={"8px"}
              textAlign={"center"}
              textStyle={"h6"}
              color={"#99A0B0"}
            >
              Connecting your data sources to activate this data in apps
            </Text>
          </Box>

          <Flex marginTop={"20%"} marginLeft={"2"}>
            <DataSourcesImage width={"450px"} height={"100%"} />
          </Flex>

          <Box marginTop={"20%"} marginLeft={"27%"}>
            <Button
              size={"md"}
              height={"18px"}
              width={"190px"}
              variation={"fill"}
            >
              Connect
            </Button>
          </Box>
        </div>
      </StyledBoxOne>

      <StyledBoxTwo>
        <Text textAlign={"center"} textStyle={"h2"}>
          Upload your data
        </Text>
        <Box width={"100%"}>
          <Text
            marginTop={"8px"}
            textAlign={"center"}
            textStyle={"h6"}
            color={"#99A0B0"}
          >
            You can upload one file at a time
          </Text>
        </Box>

        <Box
          border="1px #D3F2F0 solid"
          borderRadius={"20px"}
          foo="bar"
          height={"65%"}
          marginTop={"50px"}
          p={2}
          backgroundColor="#F0FDFC"
          width={[0.99]}
        >
          <Flex marginTop={"20%"} marginLeft={"45%"}>
            <VectorFileImageOne width={"90px"} height={"50.1px"} />

            <Text marginTop={"40%"} marginLeft={"-60%"} color={"#99A0B0"}>
              Drag and drop your files here or click on the folder icon
            </Text>
          </Flex>
        </Box>
        <Text
          marginTop={"20px"}
          textAlign={"center"}
          textStyle={"h6"}
          color={"#99A0B0"}
          width={"107px"}
          color={"#1CAA9F"}
        >
          Not more than 500 mb
        </Text>
      </StyledBoxTwo>
    </>
  );
}

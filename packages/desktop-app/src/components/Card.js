import React from "react";
import { Box, Flex, Text, Button } from "@blend-ui/core";

import { StyledCard } from "../pages/display-app/DataConsole.styled";
import { ReactComponent as ImageOne } from "../assets/data-console-one.svg";

function Card() {
  return (
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
            bringing your data into your personal data cloud, you can activate
            it in different apps in your Prifina account.
          </Text>
        </Box>
        <Box marginTop={"90px"} marginLeft={"32px"}>
          <Button variation={"outline"}>Learn More</Button>
        </Box>
      </div>

      <div>{/* <ImageOne width={"300px"} height={"300px"} /> */}</div>
    </StyledCard>
  );
}

export default Card;

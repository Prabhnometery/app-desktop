/* eslint-disable react/display-name */
/* eslint-disable react/no-multi-comp */

import React, { useRef, useState, useEffect } from "react";
import { PrifinaProvider, PrifinaContext } from "@prifina/hooks";

import i18n from "../lib/i18n";

import Amplify, { Auth, API as GRAPHQL } from "aws-amplify";
import config from "../config";

import AWSAppSyncClient, { AUTH_TYPE } from "aws-appsync";

import Home from "../pages/Home";

import { AppContext } from "../lib/contextLib";

i18n.init();

const APIConfig = {
  aws_appsync_graphqlEndpoint: config.appSync.aws_appsync_graphqlEndpoint,
  aws_appsync_region: config.main_region,
  aws_appsync_authenticationType: config.appSync.aws_appsync_authenticationType,
};

const AUTHConfig = {
  // To get the aws credentials, you need to configure
  // the Auth module with your Cognito Federated Identity Pool
  mandatorySignIn: false,
  userPoolId: config.cognito.USER_POOL_ID,
  identityPoolId: config.cognito.IDENTITY_POOL_ID,
  userPoolWebClientId: config.cognito.APP_CLIENT_ID,
  region: config.main_region,
};

const S3Config = {
  AWSS3: {
    bucket: config.S3.bucket, //REQUIRED -  Amazon S3 bucket name
    region: config.S3.region, //OPTIONAL -  Amazon service region
  },
};

export default { title: "HomeApp" };

export const homeApp = () => {
  console.log("COMPONENT --->");

  const [settingsReady, setSettingsReady] = useState(false);

  const data = useRef([]);

  const prifinaID = useRef("");

  const client = new AWSAppSyncClient({
    url: APIConfig.aws_appsync_graphqlEndpoint,
    region: APIConfig.aws_appsync_region,
    auth: {
      type: AUTH_TYPE.AWS_IAM,
      credentials: () => Auth.currentCredentials(),
    },
    /*
    auth: {
      type: AUTH_TYPE.AMAZON_COGNITO_USER_POOLS,
      jwtToken: async () =>
        (await Auth.currentSession()).getIdToken().getJwtToken(),
    },
    */
    disableOffline: true,
  });
  Auth.configure(AUTHConfig);
  Amplify.configure(APIConfig);
  Amplify.configure(S3Config);
  console.log("AUTH CONFIG ", AUTHConfig);

  // get user auth...
  useEffect(async () => {
    try {
      const session = await Auth.currentSession();
      /*
      const user = await Auth.currentAuthenticatedUser();
      console.log("USER ", user);
      if (!user) {
        console.log("NO CURRENT USER FOUND");
      }
      */
      console.log("SESSION ", session);
      if (!session) {
        console.log("NO CURRENT SESSION FOUND");
      }
      console.log("PRIFINA-ID", session.idToken.payload["custom:prifina"]);
      prifinaID.current = session.idToken.payload["custom:prifina"];
      /*
      const token = session.idToken.payload;
          _currentUser = {
            username: token["cognito:username"],
            organization: token["custom:organization"] || "",
            given_name: token["given_name"],
            client: token["aud"],
          };
*/
      /*
      const s3Data = await Storage.put(
        "widgetData.json",
        JSON.stringify(widgetData),
        {
          level: "public",
        },
      );
      console.log("S3 DATA ", s3Data);
      */

      const getPrifina = `query MyQuery {
  getPrifinaApp(id: "WIDGETS") {
    widgets
  }
}`;
      const prifinaWidgets = await GRAPHQL.graphql({
        query: getPrifina,
        variables: { id: "WIDGETS" },
        authMode: "AWS_IAM",
      });
      console.log(
        "CURRENT CONFIG ",
        JSON.parse(prifinaWidgets.data.getPrifinaApp.widgets),
      );
      const widgetData = JSON.parse(prifinaWidgets.data.getPrifinaApp.widgets);

      const getUser = `query prifinaUser($id:String!){
        getPrifinaUser(id: $id) {
          installedApps
          installedWidgets
        }
      }`;
      const currentPrifinaUser = await GRAPHQL.graphql({
        query: getUser,
        variables: { id: prifinaID.current },
        authMode: "AWS_IAM",
      });
      console.log("CURRENT USER ", currentPrifinaUser);
      const installedWidgets = JSON.parse(
        currentPrifinaUser.data.getPrifinaUser.installedWidgets,
      );

      data.current = Object.keys(installedWidgets).map(w => {
        let defaultValues = {};
        if (widgetData[w].settings) {
          widgetData[w].settings.forEach(v => {
            // if type=text...
            defaultValues[v.value] = "";
          });

          if (installedWidgets[w].length > 0) {
            //console.log("SEETINGS FOUND ", w.widget.appID);
            installedWidgets[w].forEach(i => {
              if (defaultValues.hasOwnProperty(i.field)) {
                defaultValues[i.field] = i.value;
              }
            });
          }
        }
        return {
          url: widgetData[w].url,
          settings: widgetData[w].settings.length > 0,
          currentSetting: defaultValues,
          widget: {
            settings: widgetData[w].settings,
            appID: w,
            name: widgetData[w].name,
            title: widgetData[w].title,
          },
        };
      });

      console.log("CURRENT SETTINGS 2", data);

      setSettingsReady(true);
    } catch (e) {
      if (typeof e === "string" && e === "No current user") {
        //const user = await Auth.signIn("tahola", "xxxx");
        //console.log("AUTH ", user);
        //console.log("APP DEBUG ", appCode);
      }

      console.log("AUTH ", e);
    }
  }, []);

  const userAuth = auth => {
    //setState({ isAuthenticated: auth });
  };
  const mobileApp = false;
  const isAuthenticated = true;
  const currentUser = { username: prifinaID.current };

  return (
    <>
      {settingsReady && (
        <AppContext.Provider
          value={{
            isAuthenticated,
            currentUser,
            APIConfig,
            AUTHConfig,
            userAuth,
            mobileApp,
          }}
        >
          <Home />
        </AppContext.Provider>
      )}
      {!settingsReady && <div />}
    </>
  );
};

homeApp.story = {
  name: "Home App",
};

homeApp.story = {
  name: "Home APP",
  decorators: [
    Story => {
      //console.log("PROVIDER ", PrifinaProvider);
      return (
        <PrifinaProvider stage={"alpha"} Context={PrifinaContext}>
          <Story />
        </PrifinaProvider>
      );
    },
  ],
};
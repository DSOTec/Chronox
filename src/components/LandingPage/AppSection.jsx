import React from "react";
import ConnectDevice from "../../assets/images/ConnectDevice.jpg";
import TrackHealth from "../../assets/images/TrackHealth.jpg";
import IntegrationView from "../IntegrationView";

const AppSection = () => {
  return (
    <div>
      <IntegrationView
        title="Connect Devices and Apps"
        subTitle="Sync your health data from your health devices and apps all in one place for personalized monitoring."
        sideImage={ConnectDevice}
        isImageLeft={true}
      />
      <IntegrationView
        title="Track your health data"
        subTitle="Keep a close eye on your health with Chronox.Our intuitive tools allows you to quickly record and track your health data."
        sideImage={TrackHealth}
      />
    </div>
  );
};

export default AppSection;

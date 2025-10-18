import React from "react";
import SocialLogin from "../Components/SocialLogin";
import FindUs from "../Components/FindUs";
import Qzone from "../Components/Qzone";

const RightAside = () => {
  return (
    <div className="space-y-5">
      <SocialLogin></SocialLogin>
      <FindUs></FindUs>
      <Qzone></Qzone>
    </div>
  );
};

export default RightAside;

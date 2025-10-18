import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div>
      <h1 className="font-bold mb-3">Login with</h1>
      <div className="space-y-3">
        <button className="btn btn-outline w-full bg-none  ">
          <FaGoogle></FaGoogle> Login With Google
        </button>
        <button className="btn btn-outline w-full bg-none ">
          <FaGithub></FaGithub> Login With Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;

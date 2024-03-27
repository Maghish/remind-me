"use client";

import Loginform from "./components/Loginform";
import Signupform from "./components/Signupform";
import { useState } from "react";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:2000/api/"

function Home() {
  const [loginFormVisible, setLoginFormVisible] = useState<boolean>(false);
  const [signupFormVisible, setSignupFormVisible] = useState<boolean>(false);

  return (
    <div className="flex gap-x-4">
      <button
        className="ml-5 min-w-11 w-auto min-h-11 py-3 px-4 border-4 border-black bg-inherit rounded-md"
        onClick={() => {
          setLoginFormVisible(true);
        }}
      >
        Login
      </button>
      <button className="min-w-11 w-auto min-h-11 py-3 px-4 border-4 border-black bg-inherit rounded-md">
        Signup
      </button>
      {loginFormVisible ? <Loginform setLoginFormVisibility={(v: boolean) => setLoginFormVisible(v)} setSignupFormVisibility={(v: boolean) => setSignupFormVisible(v)} /> : ""}
      {signupFormVisible ? <Signupform /> : ""}
    </div>
  );
}

export default Home;

"use client";

import Loginform from "./components/Loginform";
import Signupform from "./components/Signupform";
import { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "./contexts/authContext";

axios.defaults.baseURL = "http://localhost:2000/api/"

function Home() {
  const [loginFormVisible, setLoginFormVisible] = useState<boolean>(false);
  const [signupFormVisible, setSignupFormVisible] = useState<boolean>(false);
  const { mode, userData } = useContext(AuthContext);

  return (
    <div className="flex gap-x-4">
      <p>{mode}</p>
      <p>{userData ? userData.username : ""}</p>
      <button
        className="ml-5 min-w-11 w-auto min-h-11 py-3 px-4 border-4 border-black bg-inherit rounded-md"
        onClick={() => {
          setLoginFormVisible(true);
        }}
      >
        Login
      </button>
      <button className="min-w-11 w-auto min-h-11 py-3 px-4 border-4 border-black bg-inherit rounded-md" onClick={() => {setSignupFormVisible(true)}}>
        Signup
      </button>
      {loginFormVisible ? <Loginform setLoginFormVisibility={(v: boolean) => setLoginFormVisible(v)} setSignupFormVisibility={(v: boolean) => setSignupFormVisible(v)} /> : ""}
      {signupFormVisible ? <Signupform setLoginFormVisibility={(v: boolean) => setLoginFormVisible(v)} setSignupFormVisibility={(v: boolean) => setSignupFormVisible(v)} /> : ""}
    </div>
  );
}

export default Home;

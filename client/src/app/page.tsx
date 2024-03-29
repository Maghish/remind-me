"use client";

import Loginform from "./components/Loginform";
import Signupform from "./components/Signupform";
import { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "./contexts/authContext";
import Navbar from "./components/Navbar";

axios.defaults.baseURL = "https://remind-me-r5u3.onrender.com/api"; //http://localhost:2000/api

function Home() {
  const [loginFormVisible, setLoginFormVisible] = useState<boolean>(false);
  const [signupFormVisible, setSignupFormVisible] = useState<boolean>(false);
  const { mode, userData } = useContext(AuthContext);

  return (
    <div className="flex flex-col gap-x-4">
      <Navbar
        setLoginFormVisibility={(v: boolean) => setLoginFormVisible(v)}
        setSignupFormVisibility={(v: boolean) => setSignupFormVisible(v)}
      />
      {loginFormVisible ? (
        <Loginform
          setLoginFormVisibility={(v: boolean) => setLoginFormVisible(v)}
          setSignupFormVisibility={(v: boolean) => setSignupFormVisible(v)}
        />
      ) : (
        ""
      )}
      {signupFormVisible ? (
        <Signupform
          setLoginFormVisibility={(v: boolean) => setLoginFormVisible(v)}
          setSignupFormVisibility={(v: boolean) => setSignupFormVisible(v)}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default Home;

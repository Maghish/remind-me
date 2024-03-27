import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import axios from "axios";
import SetCookie from "../util/SetCookie";

function Loginform({ setLoginFormVisibility, setSignupFormVisibility }: any) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  function LoginUser() {
    axios
      .post("/auth/login", {
        email: email,
        password: password,
      })
      .then((response: any) => {
        console.log(response);
        SetCookie("token", response.data.token);
        axios.defaults.headers.common["Authorization"] =
          "Bearer " + response.data.token;
        window.location.reload();
      });
  }

  return (
    <div className="absolute min-w-full min-h-full backdrop-blur-md flex items-center justify-center">
      <form className="relative min-w-[500px] w-auto min-h-[600px] h-auto bg-black p-10 rounded-lg flex flex-col gap-y-10">
        <IoMdClose
          className="absolute self-end top-[25px] right-[30px] cursor-pointer"
          size="18px"
          color="#fafaf9"
          onClick={() => {
            setLoginFormVisibility(false);
          }}
        />
        <span className="text-3xl font-mono font-semibold text-center text-stone-50">
          Log in
        </span>
        <div className="flex flex-col gap-y-6 min-h-[300px]">
          <input
            className="w-full px-4 py-3 bg-stone-200 outline-none rounded-md font-mono text-black placeholder:font-mono placeholder:text-stone-400"
            placeholder="Enter Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
          <input
            className="w-full px-4 py-3 bg-stone-200 outline-none rounded-md font-mono text-black placeholder:font-mono placeholder:text-stone-400"
            placeholder="Enter Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
          ></input>
        </div>
        <button
          type="button"
          className="bg-inherit border-2 border-stone-100 rounded-md p-3 px-6 w-fit font-mono text-sm text-stone-100 self-center hover:opacity-90"
          onClick={LoginUser}
        >
          Log in
        </button>
        <span className="font-mono text-sm text-stone-200 text-center">
          Don't have an account?{" "}
          <span
            className="text-red-500 cursor-pointer hover:underline hover:underline-offset-2"
            onClick={() => {
              setLoginFormVisibility(false);
              setSignupFormVisibility(true);
            }}
          >
            Sign up!
          </span>
        </span>
      </form>
    </div>
  );
}

export default Loginform;

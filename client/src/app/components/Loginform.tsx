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
    <div className="fixed min-w-full min-h-full backdrop-blur-lg flex items-center justify-center z-10 px-4 sm:px-10">
      <form className="relative min-w-full md:min-w-[500px] w-auto min-h-[600px] h-auto bg-white p-7 sm:p-10 rounded-lg flex flex-col gap-y-10 shadow-2xl">
        <IoMdClose
          className="absolute self-end top-[25px] right-[30px] cursor-pointer"
          size="18px"
          color="#000000"
          onClick={() => {
            setLoginFormVisibility(false);
          }}
        />
        <span className="text-3xl font-mono font-semibold text-center text-black">
          Login
        </span>
        <div className="flex flex-col gap-y-6 min-h-[300px]">
          <input
            className="w-full px-4 py-3 bg-stone-100 outline-none rounded-md font-mono text-black placeholder:font-mono placeholder:text-stone-400"
            placeholder="Enter Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
          <input
            className="w-full px-4 py-3 bg-stone-100 outline-none rounded-md font-mono text-black placeholder:font-mono placeholder:text-stone-400"
            placeholder="Enter Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
          ></input>
        </div>
        <button
          type="button"
          className="mt-auto bg-inherit border-2 border-black rounded-md p-3 px-6 w-fit font-mono text-sm text-black self-center transition delay-100 duration-200 ease-out hover:border-opacity-50 hover:text-opacity-70"
          onClick={LoginUser}
        >
          Login
        </button>
        <span className="font-mono text-sm text-black text-center">
          Don't have an account?{" "}
          <span
            className="text-black font-bold cursor-pointer underline underline-offset-2"
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

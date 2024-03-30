import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";
import axios from "axios";
import RemoveCookie from "../util/RemoveCookie";

function Navbar({ setLoginFormVisibility, setSignupFormVisibility }: any) {
  const [mobileNavLinks, setMobileNavLinks] = useState<boolean>(false);
  const { mode, userData } = useContext(AuthContext);

  function logoutUser() {
    delete axios.defaults.headers.common["Authorization"];
    RemoveCookie("token");
    window.location.reload();
  }

  return (
    <nav className="relative flex flex-row items-center py-3 px-7 min-w-screen w-screen min-h-[75px] max-h-[75px] bg-inherit border-b-2 border-stone-200">
      <span className="text-2xl font-mono font-semibold tracking-widest cursor-pointer">
        Remind Me
      </span>
      <div className="block md:hidden ml-auto">
        <GiHamburgerMenu
          size="24px"
          className="cursor-pointer"
          onClick={() => {
            setMobileNavLinks(!mobileNavLinks);
          }}
        />
        {mobileNavLinks ? (
          <div className="absolute w-full h-auto p-7 bg-black top-[75px] left-0 md:hidden">
            <ul className="flex flex-col gap-y-3">
              {mode === "User" ? (
                <>
                  <Link
                    href="/"
                    className="text-white text-sm font-mono cursor-pointer tracking-widest transition-all delay-75 duration-75 ease-in-out hover:opacity-90"
                  >
                    Create task
                  </Link>
                  <Link
                    href="/"
                    className="text-white text-sm font-mono cursor-pointer tracking-widest transition-all delay-75 duration-75 ease-in-out hover:opacity-90"
                  >
                    All tasks
                  </Link>
                </>
              ) : (
                ""
              )}
              <Link
                href="https://github.com/Maghish/remind-me.git"
                className="text-white text-sm font-mono cursor-pointer tracking-widest transition-all delay-75 duration-75 ease-in-out hover:opacity-90"
              >
                Github
              </Link>
              {mode === "Guest" ? (
                <div className="flex flex-col w-full gap-y-3 mt-4">
                  <button
                    className="bg-inherit p-2 px-3 border-2 border-white rounded-md text-sm text-white font-mono tracking-widest transition-opacity delay-150 ease-in-out duration-150 hover:opacity-90"
                    onClick={() => {
                      setLoginFormVisibility(true);
                    }}
                  >
                    Login
                  </button>
                  <button
                    className="bg-inherit p-2 px-3 border-2 border-white rounded-md text-sm text-white font-mono tracking-widest transition-opacity delay-150 ease-in-out duration-150 hover:opacity-90"
                    onClick={() => {
                      setSignupFormVisibility(true);
                    }}
                  >
                    Signup
                  </button>
                </div>
              ) : (
                ""
              )}
            </ul>
          </div>
        ) : (
          ""
        )}
      </div>
      <ul className="hidden md:flex md:flex-row md:gap-x-7 md:items-center ml-[120px]">
        {mode === "User" ? (
          <>
            <Link
              href="/"
              className="text-black text-sm font-semibold font-mono cursor-pointer tracking-widest transition-all delay-75 duration-75 ease-in-out hover:opacity-90 hover:underline hover:underline-offset-4"
            >
              Create task
            </Link>
            <Link
              href="/"
              className="text-black text-sm font-semibold font-mono cursor-pointer tracking-widest transition-all delay-75 duration-75  ease-in-out hover:opacity-90 hover:underline hover:underline-offset-4"
            >
              All tasks
            </Link>
          </>
        ) : (
          ""
        )}
        <Link
          href="https://github.com/Maghish/remind-me.git"
          className="text-black text-sm font-semibold font-mono cursor-pointer tracking-widest transition-all delay-75 duration-75  ease-in-out hover:opacity-90 hover:underline hover:underline-offset-4"
        >
          Github
        </Link>
      </ul>
      {mode === "Guest" ? (
        <div className="hidden md:flex flex-row ml-auto gap-x-3 justify-end">
          <button
            className="bg-inherit p-2 px-3 border-[3px] border-black rounded-md text-sm text-black font-semibold  font-mono tracking-widest transition-opacity delay-150 ease-in-out duration-150 hover:opacity-90"
            onClick={() => {
              setLoginFormVisibility(true);
            }}
          >
            Login
          </button>
          <button
            className="bg-inherit p-2 px-3 border-[3px] border-black rounded-md text-sm text-black font-semibold font-mono tracking-widest transition-opacity delay-150 ease-in-out duration-150 hover:opacity-90"
            onClick={() => {
              setSignupFormVisibility(true);
            }}
          >
            Signup
          </button>
        </div>
      ) : (
        <div className="ml-auto">
          <button className="bg-inherit p-2 px-3 border-[3px] border-black rounded-md text-sm text-black font-semibold font-mono tracking-widest transition-opacity delay-150 duration-150 ease-in-out hover:opacity-90" onClick={logoutUser}>
            Logout
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

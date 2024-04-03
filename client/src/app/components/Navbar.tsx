import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";
import axios from "axios";
import RemoveCookie from "../util/RemoveCookie";

function Navbar({ currentPage, setLoginFormVisibility, setSignupFormVisibility, setCreateTaskForm }: any) {
  const [mobileNavLinks, setMobileNavLinks] = useState<boolean>(false);
  const { mode, userData } = useContext(AuthContext);

  function logoutUser() {
    delete axios.defaults.headers.common["Authorization"];
    RemoveCookie("token");
    window.location.reload();
  }

  return (
    <nav className="fixed flex flex-row items-center py-3 px-7 min-w-screen w-screen min-h-[75px] max-h-[75px] bg-white border-b-2 border-stone-200">
      <Link href="/" className="text-2xl font-mono font-semibold tracking-widest cursor-pointer">
        Remind Me
      </Link>
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
                  <h3
                    onClick={() => {setCreateTaskForm(true)}}                  
                    className="text-white text-sm font-mono cursor-pointer tracking-widest transition-all delay-75 duration-75 ease-in-out hover:opacity-90"
                  >
                    Create task
                  </h3>
                  <Link
                    href="/savedtasks"
                    className="text-white text-sm font-mono cursor-pointer tracking-widest transition-all delay-75 duration-75 ease-in-out hover:opacity-90"
                  >
                    Saved tasks
                  </Link>
                  <Link
                    href="/closedtasks"
                    className="text-white text-sm font-mono cursor-pointer tracking-widest transition-all delay-75 duration-75 ease-in-out hover:opacity-90"
                  >
                    Closed tasks
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
                <div className="mt-4 w-full">
                  <button
                    className="bg-inherit w-full p-2 px-3 border-2 border-white rounded-md text-sm text-white font-mono tracking-widest transition-opacity delay-150 ease-in-out duration-150 hover:opacity-90"
                    onClick={logoutUser}
                  >
                    Logout
                  </button>
                </div>
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
            <h3
              onClick={() => {setCreateTaskForm(true)}}
              className="text-black text-sm font-semibold font-mono cursor-pointer tracking-widest transition-all delay-75 duration-75 ease-in-out hover:opacity-90 hover:underline hover:underline-offset-4"
            >
              Create task
            </h3>
            <Link
              href="/savedtasks"
              className={`text-black text-sm font-semibold font-mono cursor-pointer tracking-widest transition-all delay-75 duration-75 ease-in-out hover:opacity-90 ${currentPage === "SavedTasks" ? "underline underline-offset-4" : "hover:underline hover:underline-offset-4"}`}
            >
              Saved tasks
            </Link>
            <Link
              href="/closedtasks"
              className={`text-black text-sm font-semibold font-mono cursor-pointer tracking-widest transition-all delay-75 duration-75 ease-in-out hover:opacity-90 ${currentPage === "ClosedTasks" ? "underline underline-offset-4" : "hover:underline hover:underline-offset-4"}`}
            >
              Closed tasks
            </Link>
          </>
        ) : (
          ""
        )}
        <Link
          href="https://github.com/Maghish/remind-me.git"
          className="text-black text-sm font-semibold font-mono cursor-pointer tracking-widest transition-all delay-75 duration-75 ease-in-out hover:opacity-90 hover:underline hover:underline-offset-4"
        >
          Github
        </Link>
      </ul>
      {mode === "Guest" ? (
        <div className="hidden md:flex flex-row ml-auto gap-x-3 justify-end">
          <button
            className="bg-inherit p-2 px-3 border-[3px] border-black rounded-md text-sm text-black font-semibold font-mono tracking-widest transition delay-100 duration-200 ease-out hover:border-opacity-50 hover:text-opacity-60"
            onClick={() => {
              setLoginFormVisibility(true);
            }}
          >
            Login
          </button>
          <button
            className="bg-inherit p-2 px-3 border-[3px] border-black rounded-md text-sm text-black font-semibold font-mono tracking-widest transition delay-100 duration-200 ease-out hover:border-opacity-50 hover:text-opacity-60"
            onClick={() => {
              setSignupFormVisibility(true);
            }}
          >
            Signup
          </button>
        </div>
      ) : (
        <div className="ml-auto hidden md:block">
          <button
            className="bg-inherit p-2 px-3 border-[3px] border-black rounded-md text-sm text-black font-semibold font-mono tracking-widest transition delay-100 duration-200 ease-out hover:border-opacity-50 hover:text-opacity-60"
            onClick={logoutUser}
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

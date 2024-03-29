import { useEffect, useState } from "react";
import { FaHamburger } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";

function Navbar({ setLoginFormVisibility, setSignupFormVisibility }: any) {
  const [mobileNavLinks, setMobileNavLinks] = useState<boolean>(false);
  const { mode, userData } = useContext(AuthContext);

  return (
    <nav className="relative flex flex-row items-center py-3 px-7 min-w-screen w-screen min-h-[75px] max-h-[75px] bg-inherit border-b-2 border-stone-200">
      <span className="text-2xl font-mono font-semibold tracking-widest cursor-pointer">
        Remind Me
      </span>
      <div className="visible md:hidden ml-auto">
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
                    Create a task
                  </Link>
                  <Link
                    href="/"
                    className="text-white text-sm font-mono cursor-pointer tracking-widest transition-all delay-75 duration-75 ease-in-out hover:opacity-90"
                  >
                    View all tasks
                  </Link>
                </>
              ) : (
                ""
              )}
              <Link
                href="https://github.com/Maghish/remind-me"
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
      <div className=""></div>
    </nav>
  );
}

export default Navbar;

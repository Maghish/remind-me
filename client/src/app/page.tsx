"use client";

import Loginform from "./components/Loginform";
import Signupform from "./components/Signupform";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "./contexts/authContext";
import Navbar from "./components/Navbar";
import TaskList from "./components/subcomponents/TaskList";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL; //http://localhost:2000/api //https://remind-me-r5u3.onrender.com/api

function Home() {
  const [loginFormVisible, setLoginFormVisible] = useState<boolean>(false);
  const [signupFormVisible, setSignupFormVisible] = useState<boolean>(false);
  const { mode, userData } = useContext(AuthContext);
  const [allTasks, setAllTasks] = useState<any[]>([]);

  useEffect(() => {
    async function getAllTasks() {
      const res = await axios.post("/task/gettask", {
        id: "",
      });
      if (res.data.task) {
        setAllTasks(res.data.task);
      } else {
      }
    }

    if (mode === "User") {
      getAllTasks();
    }
  }, []);

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
      {mode === "User" ? (
        <div className="mt-[90px] w-full h-auto p-6 flex justify-center">
          {allTasks.length > 0 ? (
            <TaskList allTasks={allTasks} />
          ) : (
            <div className="w-auto h-[70px] bg-red-300 border-2 border-red-500 text-sm font-mono tracking-widest text-black p-6">
              No tasks found
            </div>
          )}
        </div>
      ) : (
        <div className="mt-[90px] w-full h-auto p-6 flex justify-center">
          <p className="text-4xl font-mono tracking-widest">
            You must be logged in to use this application!
          </p>
        </div>
      )}
    </div>
  );
}

export default Home;

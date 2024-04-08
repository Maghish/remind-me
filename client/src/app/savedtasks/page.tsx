"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/authContext";
import Navbar from "../components/Navbar";
import CreateTaskForm from "../components/CreateTaskForm";
import TaskList from "../components/TaskList";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL; //http://localhost:2000/api https://remind-me-r5u3.onrender.com/api

function SavedTasks() {
  const { mode, userData } = useContext(AuthContext);
  const [allTasks, setAllTasks] = useState<any[]>([]);
  const [createTaskForm, setCreateTaskForm] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    async function getAllTasks() {
      const res = await axios.post("/task/gettask", {
        id: "Saved",
      });
      if (res.data.task) {
        setAllTasks(res.data.task);
      } else {
      }
    }

    if (mode === "Guest") {
      router.push("/");
    } else {
      getAllTasks();
    }
  }, []);

  return (
    <div className="flex flex-col gap-x-4">
      <Navbar
        currentPage="SavedTasks"
        setCreateTaskForm={(v: boolean) => setCreateTaskForm(v)}
      />
      {createTaskForm ? (
        <CreateTaskForm
          closeForm={() => {
            setCreateTaskForm(false);
          }}
        />
      ) : (
        ""
      )}
      {mode === "Guest" ? (
        ""
      ) : (
        <>
          {allTasks.length > 0 ? (
            <TaskList allTasks={allTasks} />
          ) : (
            <div className="mt-[90px] w-full h-auto p-6 flex justify-center">
              <div className="w-auto h-[70px] bg-red-300 border-2 border-red-500 text-sm font-mono tracking-widest text-black p-6">
                No tasks found
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default SavedTasks;

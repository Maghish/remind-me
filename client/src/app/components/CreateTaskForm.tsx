import axios from "axios";
import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { CreateTaskFormComponentProps } from "../../../env";

function CreateTaskForm({ closeForm }: CreateTaskFormComponentProps) {
  const [taskName, setTaskName] = useState<string>("");
  const [taskDescription, setTaskDescription] = useState<string>("");
  const [taskRank, setTaskRank] = useState<number>(0);
  const [notAvailableRanks, setNotAvailableRanks] = useState<number[]>();
  const [errorMessage, setErrorMessage] = useState<string | false>(false);

  useEffect(() => {
    async function getNotAvailableRanks() {
      const res = await axios.get("/task/notavailableranks");
      setNotAvailableRanks(res.data.allUsedRanks);
    }

    getNotAvailableRanks();
  }, [])

  function createTask() {
    if (errorMessage === false) {
      axios.post("/task/createtask", {
        name: taskName, 
        description: taskDescription, 
        rank: taskRank, 
        state: "Open"
      })
        .then(response => {
          window.location.reload();
      }) 
    }

    else {}
  }

  return (
    <div className="fixed min-w-full min-h-full backdrop-blur-lg flex items-center justify-center z-10 px-4 sm:px-10">
      <form className="relative min-w-full md:min-w-[500px] w-auto min-h-[600px] h-auto bg-white p-7 sm:p-10 rounded-lg flex flex-col gap-y-10 shadow-2xl">
        <IoMdClose
          className="absolute self-end top-[25px] right-[30px] cursor-pointer"
          size="18px"
          color="#000000"
          onClick={() => {
            closeForm();
          }}
        />
        <span className="text-3xl font-mono font-semibold text-center text-black">
          Create task
        </span>
        <div className="flex flex-col gap-y-6 min-h-[300px]">
          <input
            className="w-full px-4 py-3 bg-stone-100 outline-none rounded-md font-mono text-black placeholder:font-mono placeholder:text-stone-400"
            placeholder="Enter task name"
            onChange={(e) => {
              setTaskName(e.target.value);
            }}
          ></input>
          <textarea
            className="w-full min-h-[200px] px-4 py-3 bg-stone-100 outline-none rounded-md font-mono text-sm text-black placeholder:font-mono placeholder:text-stone-400 placeholder:text-sm"
            placeholder="Enter task description"
            onChange={(e) => {
              setTaskDescription(e.target.value);
            }}
          ></textarea>
          <div className="w-full flex flex-col">
            <input
              type="number"
              className="w-full px-4 py-3 bg-stone-100 outline-none rounded-md font-mono text-black placeholder:font-mono placeholder:text-stone-400"
              min="1"
              max="100"
              placeholder="Set task rank"
              onChange={(e) => {
                if (notAvailableRanks!.includes(Number(e.target.value))) {
                  setErrorMessage(
                    "Rank already given for another task, please try new one"
                  );
                } else {
                  setTaskRank(Number(e.target.value));
                  setErrorMessage(false);
                }
              }}
            ></input>
            {errorMessage != false ? (
              <span className="m-0 p-0 text-sm text-red-400 font-mono tracking-tight text-center">
                {errorMessage}
              </span>
            ) : (
              ""
            )}
          </div>
          <button type="button" className="mt-auto bg-inherit border-2 border-black rounded-md p-3 px-6 w-fit font-mono text-sm text-black self-center transition delay-100 duration-200 ease-out hover:border-opacity-50 hover:text-opacity-70" onClick={createTask} >
            Create
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateTaskForm;

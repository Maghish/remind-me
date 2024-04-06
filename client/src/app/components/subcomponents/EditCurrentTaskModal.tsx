import axios from "axios";
import { IoMdClose } from "react-icons/io";
import { useEffect, useState } from "react";
import { EditCurrentTaskModalComponentProps } from "../../../../env";
import { FaCaretDown } from "react-icons/fa";

function EditCurrentTaskModal({
  closeForm,
  id,
  name,
  description,
  rank,
  state,
}: EditCurrentTaskModalComponentProps) {
  const [taskId, setId] = useState<string>(id);
  const [taskName, setTaskName] = useState<string>(name);
  const [taskDescription, setTaskDescription] = useState<string>(description);
  const [taskRank, setTaskRank] = useState<number>(rank);
  const [taskState, setTaskState] = useState<string>(state); // Due to some stupid reasons I have to set this state's type to string instead of "Open" | "Closed" | "Saved"
  const [notAvailableRanks, setNotAvailableRanks] = useState<number[]>();
  const [errorMessage, setErrorMessage] = useState<string | false>(false);

  useEffect(() => {
    async function getNotAvailableRanks() {
      const res = await axios.get("/task/notavailableranks");
      if (res.data.allUsedRanks) {
        const originalArray = res.data.allUsedRanks;
        const newArray = originalArray.filter(
          (element: number) => element !== taskRank
        );
        setNotAvailableRanks(newArray);
        console.log(newArray);
      }
    }

    getNotAvailableRanks();
  }, []);

  function editTask() {
    if (errorMessage === false) {
      axios
        .post("/task/edittask", {
          id: taskId,
          name: taskName,
          description: taskDescription,
          rank: taskRank,
          state: taskState,
        })
        .then((response) => {
          window.location.reload();
        });
    }
  }

  return (
    <div className="fixed min-w-screen w-screen min-h-screen h-screen top-0 right-0 backdrop-blur-lg flex items-center justify-center z-10 px-4 sm:px-10 md:px-10">
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
          Edit task
        </span>
        <div className="flex flex-col gap-y-6 min-h-[300px]">
          <input
            className="w-full px-4 py-3 bg-stone-100 outline-none rounded-md font-mono text-black placeholder:font-mono placeholder:text-stone-400"
            placeholder="Enter task name"
            onChange={(e) => {
              setTaskName(e.target.value);
            }}
            defaultValue={taskName}
          ></input>
          <textarea
            className="w-full min-h-[200px] px-4 py-3 bg-stone-100 outline-none rounded-md font-mono text-sm text-black placeholder:font-mono placeholder:text-stone-400 placeholder:text-sm"
            placeholder="Enter task description"
            onChange={(e) => {
              setTaskDescription(e.target.value);
            }}
            defaultValue={taskDescription}
          ></textarea>
          <div className="relative">
            <select
              className="w-full px-4 py-3 appearance-none bg-stone-100 outline-none rounded-md font-mono text-black"
              onChange={(e) => {
                setTaskState(e.target.value);
              }}
            >
              {taskState === "Open" ? (
                <option value="Open" selected>
                  Open
                </option>
              ) : (
                <option value="Open">Open</option>
              )}
              {taskState === "Saved" ? (
                <option value="Saved" selected>
                  Saved
                </option>
              ) : (
                <option value="Saved">Saved</option>
              )}
            </select>
            <FaCaretDown
              size="18px"
              color="#000000"
              className="absolute top-4 right-[16px]"
            />
          </div>
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
              defaultValue={taskRank}
            ></input>
            {errorMessage != false ? (
              <span className="m-0 p-0 text-sm text-red-400 font-mono tracking-tight text-center">
                {errorMessage}
              </span>
            ) : (
              ""
            )}
          </div>
          <button
            type="button"
            className="mt-auto bg-inherit border-2 border-black rounded-md p-3 px-6 w-fit font-mono text-sm text-black self-center transition delay-100 duration-200 ease-out hover:border-opacity-50 hover:text-opacity-70"
            onClick={editTask}
          >
            Edit
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditCurrentTaskModal;

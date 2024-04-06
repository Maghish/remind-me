import { useEffect, useState } from "react";
import StateBox from "./subcomponents/StateBox";
import EditCurrentTaskModal from "./subcomponents/EditCurrentTaskModal";
import axios from "axios";

function CurrentTaskDiv({ taskDetails }: any) {
  const [id, setId] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [rank, setRank] = useState<number>(0);
  const [state, setState] = useState<"Open" | "Closed" | "Saved">("Open");
  const [editCurrentTaskModalVisible, setEditCurrentTaskModalVisible] =
    useState<boolean>(false);

  useEffect(() => {
    if (taskDetails !== null && taskDetails !== undefined) {
      setId(taskDetails[0]);
      setName(taskDetails[1]);
      setDescription(taskDetails[2]);
      setRank(taskDetails[3]);
      setState(taskDetails[4]);
    }
  }, [taskDetails]);

  function closeTask() {
    axios
      .post("/task/changetaskstate", {
        id: id,
        state: "Closed",
      })
      .then((response) => {
        window.location.reload();
      });
  }

  return (
    <>
      {name && description && rank && state ? (
        <div className="w-full h-max hidden md:flex flex-col gap-y-7 items-center">
          <div className="flex flex-row items-center w-full">
            <p className="mr-auto font-mono tracking-wider text-black text-lg lg:text-xl font-semibold">
              {name}{" "}
            </p>
            <span className="ml-[20px] mr-[10px] font-mono text-black font-semibold text-base lg:text-lg">
              (#{rank})
            </span>
            <div className="">
              <StateBox state={state} />
            </div>
          </div>
          <div className="min-h-[350px] max-h-[350px] overflow-y-auto no-scrollbar flex w-full text-start">
            <span className="text-sm lg:text-base font-mono text-black text-wrap">
              {description}
            </span>
          </div>

          <div className="mt-5 inline-flex gap-x-5">
            <button
              className="px-4 py-3 font-mono tracking-widest text-white rounded-lg bg-[#236286] cursor-pointer transition-opacity duration-200 ease-out hover:opacity-90"
              onClick={() => {
                setEditCurrentTaskModalVisible(true);
              }}
            >
              Edit
            </button>
            <button
              className="px-4 py-3 font-mono tracking-widest text-white rounded-lg bg-[#862323] cursor-pointer transition-opacity duration-200 ease-out hover:opacity-90"
              onClick={closeTask}
            >
              Close
            </button>
          </div>

        </div>
      ) : (
        <div className="hidden md:block w-full min-h-[70px] h-max mt-6 bg-red-300 border-2 border-red-500 text-sm font-mono tracking-widest text-black p-6">
          Please select a task to display
        </div>
      )}
      {editCurrentTaskModalVisible ? (
        <EditCurrentTaskModal
          closeForm={() => {
            setEditCurrentTaskModalVisible(false);
          }}
          id={id}
          name={name}
          description={description}
          rank={rank}
          state={state}
        />
      ) : (
        ""
      )}
    </>
  );
}

export default CurrentTaskDiv;

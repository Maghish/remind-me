import { useEffect, useState } from "react";
import StateBox from "./subcomponents/StateBox";
import EditCurrentTaskModal from "./subcomponents/EditCurrentTaskModal";

function CurrentTaskDiv({ taskDetails }: any) {
  const [id, setId] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [rank, setRank] = useState<number>(0);
  const [state, setState] = useState<"Open" | "Closed" | "Saved">("Open");
  const [editCurrentTaskModalVisible, setEditCurrentTaskModalVisible] = useState<boolean>(false);

  useEffect(() => {
    if (taskDetails !== null && taskDetails !== undefined) {
      setId(taskDetails[0]);
      setName(taskDetails[1]);
      setDescription(taskDetails[2]);
      setRank(taskDetails[3]);
      setState(taskDetails[4]);
    }
  }, [taskDetails]);

  return (
    <>
      {name && description && rank && state ? (
        <div className="w-full h-max flex flex-col gap-y-7 items-center">
          <h2 className="font-mono tracking-wider text-black text-xl font-semibold">
            {name}{" "}
            <span className="font-mono text-black font-semibold text-lg">
              (#{rank})
            </span>
          </h2>
          <div className="flex flex-row justify-center gap-x-[293px] w-full items-center"></div>
          <div className="min-h-[350px] max-h-[350px] overflow-y-auto no-scrollbar flex">
            <span className="text-base font-mono text-black text-wrap">
              {description}
            </span>
          </div>
          <div className="flex flex-row w-full items-center">
            <div className="self-start">
              <StateBox state={state} />
            </div>
            <div className="ml-auto inline-flex gap-x-5">
              <button
                className="px-4 py-3 font-mono tracking-widest text-white rounded-lg bg-[#236286] cursor-pointer transition-opacity duration-200 ease-out hover:opacity-90"
                onClick={() => {setEditCurrentTaskModalVisible(true)}}
              >
                Edit
              </button>
              <button className="px-4 py-3 font-mono tracking-widest text-white rounded-lg bg-[#862323] cursor-pointer transition-opacity duration-200 ease-out hover:opacity-90">
                Close
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full min-h-[70px] h-max mt-6 bg-red-300 border-2 border-red-500 text-sm font-mono tracking-widest text-black p-6">
          Please select a task to display
        </div>
      )}
      {editCurrentTaskModalVisible ? <EditCurrentTaskModal closeForm={() => { setEditCurrentTaskModalVisible(false)}} id={id} name={name} description={description} rank={rank} state={state} /> : ""}
    </>
  );
}

export default CurrentTaskDiv;

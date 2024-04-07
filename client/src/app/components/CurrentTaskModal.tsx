import axios from "axios";
import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import StateBox from "./subcomponents/StateBox";

function CurrentTaskModal({ closeForm, taskDetails }: any) {
  const [id, setId] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [rank, setRank] = useState<number>();
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

  return (
    <>
      {name && description && rank && state ? (
        <div className="visible md:hidden fixed min-w-screen w-screen min-h-screen h-screen top-0 right-0 backdrop-blur-lg flex items-center justify-center z-10 px-4 sm:px-10">
          <form className="relative min-w-full md:min-w-[500px] w-auto min-h-[600px] h-auto bg-white p-7 sm:p-10 rounded-lg flex flex-col gap-y-10 shadow-2xl">
            <IoMdClose
              className="absolute self-end top-[25px] right-[30px] cursor-pointer"
              size="18px"
              color="#000000"
              onClick={() => {
                closeForm();
              }}
            />
            <div className="flex flex-col gap-y-5 items-center">
              <span className="text-3xl font-mono font-semibold text-center text-black">
                {name}
              </span>
              <div className="flex flex-row gap-x-4 items-center">
                <StateBox state={state} />
                <span className="text-sm font-mono font-semibold">#{rank}</span>
              </div>
            </div>
            <div className="min-h-[200px] max-h-[350px] overflow-y-auto flex w-full text-start">
              <span className="text-sm font-mono text-black text-wrap">{description}</span>
            </div>
          </form>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default CurrentTaskModal;

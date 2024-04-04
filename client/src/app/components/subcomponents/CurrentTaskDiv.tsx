import { useEffect, useState } from "react";

function CurrentTaskDiv({ taskDetails }: any) {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [rank, setRank] = useState<number>();
  const [state, setState] = useState<"Open" | "Closed" | "Saved" | string>(
    "Open"
  );

  useEffect(() => {
    if (taskDetails !== null && taskDetails !== undefined) {
      setName(taskDetails[0]);
      setDescription(taskDetails[1]);
      setRank(taskDetails[2]);
      setState(taskDetails[3]);
    }
  }, [taskDetails]);

  return (
    <>
      {name && description && rank && state ? (
        <div className="w-full h-max flex flex-col gap-y-7 items-center">
          <h2 className="font-mono tracking-wider text-black text-xl font-semibold">
            {name}
          </h2>
          <div className="max-h-[350px] overflow-y-auto flex">
            <span className="text-base font-mono text-black text-wrap">{description}</span>
          </div>
        </div>
      ) : (
        <div className="w-full min-h-[70px] h-max mt-6 bg-red-300 border-2 border-red-500 text-sm font-mono tracking-widest text-black p-6">Please select a task to display</div>
      )}
    </>
  );
}

export default CurrentTaskDiv;

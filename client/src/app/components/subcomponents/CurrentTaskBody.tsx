import { useEffect, useState } from "react";

function CurrentTaskBody({ taskDetails }: any) {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [rank, setRank] = useState<number>();
  const [state, setState] = useState<"Open" | "Closed" | "Saved" | string>("Open");
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    console.log(taskDetails, count);
    setCount(count + 1);
    if (taskDetails !== null && taskDetails !== undefined) {
      console.log(taskDetails[0]);
      setName(taskDetails[0]);
      setDescription(taskDetails[1]);
      setRank(taskDetails[2]);
      setState(taskDetails[3]);
    }
  }, [count])

  return <p>{name !== "" ? name : "Didn't work mate.. :("}</p>;
}

export default CurrentTaskBody;

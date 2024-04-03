import { useContext, useState } from "react";
import { CurrentTaskContext } from "@/app/contexts/CurrentTaskContext";

function CurrentTaskBody() {
  const { taskDetails } = useContext(CurrentTaskContext);
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [rank, setRank] = useState<number>();
  const [state, setState] = useState<"Open" | "Closed" | "Saved" | string>("Open");

  if (taskDetails && taskDetails.length === 4) {
    setName(taskDetails[0].toString());
    setDescription(taskDetails[1].toString());
    setRank(Number(taskDetails[2]));
    setState(taskDetails[3].toString());
  }

  return <p>{taskDetails ? taskDetails[0] : ""}</p>;
}

export default CurrentTaskBody;

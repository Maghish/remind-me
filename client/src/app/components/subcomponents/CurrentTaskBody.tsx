import { useContext, useState } from "react";
import { HoverContext } from "@/app/contexts/hoverContext";

function CurrentTaskBody() {
  const { taskDetails } = useContext(HoverContext);
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [rank, setRank] = useState<number>();
  const [state, setState] = useState<"Open" | "Closed" | "Saved">("Open");

  if (taskDetails) {
    setName(taskDetails[0]);
    setDescription(taskDetails[1]);
    setRank(taskDetails[2]);
    setState(taskDetails[3]);
  }

  return (
    <p>{taskDetails ? taskDetails[0] : ""}</p>
  );
}
 
export default CurrentTaskBody;
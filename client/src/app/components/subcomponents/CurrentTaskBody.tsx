import { useContext } from "react";
import { HoverContext } from "@/app/contexts/hoverContext";

function CurrentTaskBody() {
  const { taskDetails } = useContext(HoverContext);

  return (
    <p>{taskDetails} Hmm</p>
  );
}
 
export default CurrentTaskBody;
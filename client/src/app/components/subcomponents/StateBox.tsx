import { StateBoxComponentProps } from "../../../../env";
import { GoIssueClosed, GoIssueDraft, GoIssueOpened } from "react-icons/go";

function StateBox({ state }: StateBoxComponentProps) {
  if (state === "Open") {
    return (
      <div className="min-w-[52px] w-auto p-2 bg-[#238636] flex flex-row items-center gap-x-2 rounded-lg">
        <GoIssueOpened color="#FFFFFF" />
        <p className="font-mono text-white">Open</p>
      </div>
    );
  }

  if (state === "Closed") {
    return (
      <div className="min-w-[52px] w-auto p-2 bg-[#8957E5] flex flex-row items-center gap-x-2 rounded-lg">
        <GoIssueClosed color="#FFFFFF" />
        <p className="font-mono text-white">Closed</p>
      </div>
    );
  }

  if (state === "Saved") {
    return (
      <div className="min-w-[52px] w-auto p-2 bg-[#6f6f6f] flex flex-row items-center gap-x-2 rounded-lg">
        <GoIssueDraft color="#FFFFFF" />
        <p className="font-mono text-white">Saved</p>
      </div>
    );
  }
}

export default StateBox;

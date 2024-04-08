import { StateBoxComponentProps } from "../../../../env";
import { GoIssueClosed, GoIssueDraft, GoIssueOpened } from "react-icons/go";

function StateBox({ state }: StateBoxComponentProps) {
  if (state === "Open") {
    return (
      <div className="w-fit p-1.5 bg-[#238636] flex flex-row items-center gap-x-1.5 rounded-lg">
        <GoIssueOpened size="14px" color="#FFFFFF" />
        <p className="font-mono text-white text-sm">Open</p>
      </div>
    );
  }

  if (state === "Closed") {
    return (
      <div className="w-fit p-1.5 bg-[#8957E5] flex flex-row items-center gap-x-1.5 rounded-lg">
        <GoIssueClosed size="14px" color="#FFFFFF" />
        <p className="font-mono text-white text-sm">Closed</p>
      </div>
    );
  }

  if (state === "Saved") {
    return (
      <div className="w-fit p-1.5 bg-[#6f6f6f] flex flex-row items-center gap-x-1 rounded-lg">
        <GoIssueDraft size="14px" color="#FFFFFF" />
        <p className="font-mono text-white text-sm">Saved</p>
      </div>
    );
  }
}

export default StateBox;

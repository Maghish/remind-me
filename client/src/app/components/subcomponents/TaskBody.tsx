import { TaskBodyComponentProps } from "../../../../env";

function TaskBody({
  id,
  name,
  description,
  rank,
  state,
  setCurrentTaskDetails,
}: TaskBodyComponentProps) {
  return (
    <div
      id={id}
      className="group w-full md:w-[470px] min-h-[140px] max-h-[140px] border-[3px] border-black rounded-lg cursor-pointer p-3 sm:p-5 px-5 sm:px-7 flex flex-col transition delay-75 duration-200 ease-out hover:border-opacity-30 hover:text-opacity-50"
      onClick={() => {
        setCurrentTaskDetails([id, name, description, rank, state]);
      }}
    >
      <span className="text-black text-sm sm:text-base font-bold font-mono tracking-widest mb-2 transition delay-75 duration-200 ease-out group-hover:text-opacity-50">
        {name}
      </span>
      <div className="overflow-y-auto no-scrollbar">
        <p className="text-black text-xs sm:text-sm font-mono transition delay-75 duration-200 ease-ou5 group-hover:text-opacity-50">
          {description}
        </p>
      </div>
      <div className="w-full mt-auto flex flex-row">
        <p className="text-xs sm:text-sm mt-auto w-full text-black font-mono text-end transition delay-75 duration-200 ease-out group-hover:text-opacity-50">
          #{rank}
        </p>
      </div>
    </div>
  );
}

export default TaskBody;

import { TaskBodyComponentProps } from "../../../../env";

function TaskBody({ name, description, rank, state }: TaskBodyComponentProps) {
  return (
    <>
      <div className="group w-auto sm:w-[470px] h-[140px] border-[3px] border-black rounded-lg cursor-pointer p-5 px-7 flex flex-col transition delay-75 duration-200 ease-out hover:border-opacity-30 hover:text-opacity-50">
        <span className="text-black font-mono tracking-widest mb-2 transition delay-75 duration-200 ease-out group-hover:text-opacity-50">
          {name}
        </span>
        <div className="overflow-y-auto">
          <p className="text-black text-sm font-mono transition delay-75 duration-200 ease-ou5 group-hover:text-opacity-50">
            {description}
          </p>
        </div>
        <div className="w-full mt-auto flex flex-row">
          <p className="mt-auto w-full text-black text-sm font-mono text-end transition delay-75 duration-200 ease-out group-hover:text-opacity-50">
            #{rank}
          </p>
        </div>
      </div>
    </>
  );
}

export default TaskBody;

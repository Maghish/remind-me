import { TaskBodyComponentProps } from "../../../../next-env";

function TaskBody({ name, description, rank, state }: TaskBodyComponentProps) {
  return (
    <>
      <div className="w-[470px] h-[140px] border-[3px] border-black rounded-lg cursor-pointer p-5 px-7 flex flex-col transition delay-75 duration-200 ease-out hover:border-opacity-30">
        <span className="text-black font-mono tracking-widest mb-2">
          {name}
        </span>
        <p className="text-black text-sm font-mono">{description}</p>
        <p className="w-full text-black text-sm font-mono text-end">#{rank}</p>
      </div>
    </>
  );
}

export default TaskBody;

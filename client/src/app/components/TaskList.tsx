import TaskBody from "./subcomponents/TaskBody";
import CurrentTaskDiv from "./CurrentTaskDiv";
import { useEffect, useState } from "react";
import { TaskType } from "../../../env";

function TaskList({ allTasks }: any) {
  const [taskDetails, setTaskDetails] = useState<TaskType | null>(null);

  return (
    <div className="mt-[90px] w-full h-auto py-6 px-10 lg:px-20 xl:px-40 flex flex-row justify-center gap-x-12 lg:gap-x-20 xl:gap-x-40">
      <div className="flex flex-col gap-y-4 max-h-screen sm:max-h-[620px] max-w-[470px] w-full flex-grow-0 flex-shrink-0 flex-nowrap overflow-auto no-scrollbar">
        {allTasks.map((task: any) => {
          return (
            <TaskBody
              id={task._id}
              name={task.name}
              description={task.description}
              rank={task.rank}
              state={task.state}
              setCurrentTaskDetails={(v: TaskType) => {
                setTaskDetails(v);
              }}
            />
          );
        })}
      </div>
      <CurrentTaskDiv taskDetails={taskDetails} />
    </div>
  );
}

export default TaskList;

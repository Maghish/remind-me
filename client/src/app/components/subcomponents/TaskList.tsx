import TaskBody from "./TaskBody";
import CurrentTaskDiv from "./CurrentTaskDiv";
import { useEffect, useState } from "react";
import { TaskType } from "../../../../env";

function TaskList({ allTasks }: any) {
  const [taskDetails, setTaskDetails] = useState<TaskType | null>(null);

  return (
    <div className="mt-[90px] w-full h-auto p-6 flex flex-row px-40 gap-x-40">
      <div className="flex flex-col gap-y-4 max-h-[600px] max-w-[470px] flex-grow-0 flex-shrink-0 flex-nowrap overflow-auto">
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

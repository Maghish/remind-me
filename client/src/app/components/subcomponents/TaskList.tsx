import TaskBody from "./TaskBody";
import CurrentTaskBody from "./CurrentTaskBody";
import { useEffect, useState } from "react";
import { TaskType } from "../../../../env";

function TaskList({ allTasks }: any) {
  const [taskDetails, setTaskDetails] = useState<TaskType | null>(null);

  return (
    <div className="mt-[90px] w-full h-auto p-6 flex flex-row px-40">
      <div className="flex flex-col gap-y-4">
        {allTasks.map((task: any) => {
          return (
            <TaskBody
              id={task._id}
              name={task.name}
              description={task.description}
              rank={task.rank}
              state={task.state}
              setCurrentTaskDetails={(v: TaskType) => {setTaskDetails(v)}}
            />
          );
        })}
      </div>
      <CurrentTaskBody taskDetails={taskDetails} />
    </div>
  );
}

export default TaskList;

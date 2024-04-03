import TaskBody from "./TaskBody";

function TaskList({ allTasks }: any) {
  return (
    <div className="flex flex-col gap-y-4">
      {allTasks.map((task: any) => {
        return <TaskBody id={task._id} name={task.name} description={task.description} rank={task.rank} state={task.state} />
      })}
    </div>
  );
}

export default TaskList;
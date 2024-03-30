import TaskBody from "./TaskBody";

function TaskList({ allTasks }: any) {
  console.log(allTasks);
  return (
    <div className="flex flex-col gap-y-4">
      {allTasks.map((task: any) => {
        return <TaskBody name={task.name} description={task.description} rank={task.rank} state={task.state} />
      })}
    </div>
  );
}

export default TaskList;
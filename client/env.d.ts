/// <reference types="next" />
/// <reference types="next/image-types/global" />

interface TaskType {
  [
    name: string,
    description: string,
    rank: number,
    state: ["Open", "Closed", "Saved"], 
  ];
}

interface TaskBodyComponentProps {
  id: string;
  name: string;
  description: string;
  rank: number;
  state: ["Open", "Closed", "Saved"];
  setCurrentTaskDetails: (v: TaskType) => void;
}

export { TaskBodyComponentProps, TaskType };

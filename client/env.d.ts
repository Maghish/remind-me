/// <reference types="next" />
/// <reference types="next/image-types/global" />

interface TaskType {
  [
    id: string,
    name: string,
    description: string,
    rank: number,
    state: "Open" | "Closed" | "Saved",
  ];
}

interface CreateTaskFormComponentProps {
  closeForm: () => void;
}

interface EditCurrentTaskModalComponentProps {
  closeForm: () => void;
  id: string;
  name: string;
  description: string;
  rank: number;
  state: "Open" | "Closed" | "Saved";
}

interface TaskBodyComponentProps {
  id: string;
  name: string;
  description: string;
  rank: number;
  state: "Open" | "Closed" | "Saved";
  setCurrentTaskDetails: (v: TaskType) => void;
}

interface StateBoxComponentProps {
  state: "Open" | "Closed" | "Saved";
}

export {
  TaskBodyComponentProps,
  TaskType,
  StateBoxComponentProps,
  CreateTaskFormComponentProps,
  EditCurrentTaskModalComponentProps
};

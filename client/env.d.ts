/// <reference types="next" />
/// <reference types="next/image-types/global" />

interface TaskBodyComponentProps {
  name: string,
  description: string,
  rank: number,
  state: ["Open", "Closed", "Saved"]
}

export {
  TaskBodyComponentProps
}

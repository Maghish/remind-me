/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information.

interface TaskBodyComponentProps {
  name: string,
  description: string,
  rank: number,
  state: ["Open", "Closed", "Saved"]
}

export {
  TaskBodyComponentProps
}
"use client"

import { createContext, useState } from "react";

export const CurrentTaskContext = createContext({
  taskDetails: [
    "",
    "",
    0,
    ""
  ],
  addTaskDetails: (updatedTaskDetails: any[]) => {},
});

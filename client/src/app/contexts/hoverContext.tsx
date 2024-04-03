"use client"

import { createContext, useState } from "react";

export const HoverContext = createContext({
  taskDetails: null,
  setTaskDetails: (updatedTaskDetails: any[]) => {},
});

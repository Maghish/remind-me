"use client";

import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";
import axios from "axios";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL;

function CreateTask() {
  const { mode, userData } = useContext(AuthContext);

  return (
    <>
      <p>{mode} </p>
      <p>Bro</p>
    </>
  );
}

export default CreateTask;

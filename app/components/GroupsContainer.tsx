"use client";
import { useState, useEffect } from "react";
import { GroupPresentation } from "./GroupPresentation";
import axios from "axios";
export const GroupsContainer = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8000/hello-world/")
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="py-6 px-20">
      <GroupPresentation groupName="Pokaah NL" />
      {message}
    </div>
  );
};

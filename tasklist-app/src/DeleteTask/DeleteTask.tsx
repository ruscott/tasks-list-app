import React, { useContext } from "react";
import { taskContext } from "../App";
import { Task } from "../types";
import s from "./DeleteTask.styles";

interface Props {
  task: Task;
}

export const DeleteTask: React.FC<Props> = ({ task }) => {
  const { onDelete } = useContext(taskContext);

  const handleDelete = (e: React.SyntheticEvent): void => {
    const taskID = task.id;
    fetch(`api/tasks/delete/${taskID}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: taskID,
    })
      .then(() => onDelete(taskID))
      .catch(() => {
        console.log("Error");
      });
  };
  return <s.DeleteButton onClick={handleDelete}> Delete task? </s.DeleteButton>;
};

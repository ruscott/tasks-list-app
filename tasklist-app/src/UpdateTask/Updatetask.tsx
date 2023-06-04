import React, { ChangeEvent, useState } from "react";
import { Task } from "../types";
import s from "./UpdateTask.styles";

interface Props {
  onAdd: (task: Task) => void;
}

export const AddTask: React.FC<Props> = ({ onAdd }) => {
  const [name, setTaskTitle] = useState<string>();
  const [priority, setTaskPriority] = useState<string>();

  const handelTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(e.target.value);
  };

  const handelPriorityChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setTaskPriority(e.target.value);
  };

  const handleSubmit = (e: React.SyntheticEvent): void => {
    const task = JSON.stringify({ name, priority });

    fetch("api/tasks/add", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: task,
    })
      .then((response) => {
        return response.json();
      })
      .then((task) => onAdd(task))
      .catch(() => {
        console.log("Error");
      });
  };

  return (
    <s.AddTaskBox onSubmit={handleSubmit}>
      <h2> Please enter a task: </h2>
      <s.FormSection>
        <label>
          Task Title:
          <input
            type="taskTitle"
            name="taskTitle"
            onChange={handelTitleChange}
          />
        </label>
      </s.FormSection>
      <s.FormSection>
        <label>
          {" "}
          Priority:
          <select name="taskPriority" onChange={handelPriorityChange}>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </label>
      </s.FormSection>
      <s.FormSection>
        <input type="submit" value="Submit" />
      </s.FormSection>
    </s.AddTaskBox>
  );
};

import React, { ChangeEvent, useContext, useState } from "react";
import { taskContext } from "../App";
import addTask from "../Hooks/addTask";
import s from "./AddTask.styles";

export const AddTask = () => {
  const { tasks, setTasks } = useContext(taskContext);

  const [name, setTaskTitle] = useState<string>();
  const [priority, setTaskPriority] = useState<string>("High");

  const handelTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(e.target.value);
  };

  const handelPriorityChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setTaskPriority(e.target.value);
  };

  const handleSubmit = (e: React.SyntheticEvent): void => {
    const taskJSON = JSON.stringify({ name, priority });
    addTask(taskJSON, setTasks, tasks);
  };

  return (
    <s.AddTaskBox onSubmit={handleSubmit}>
      <h2> Please enter a task: </h2>
      <s.FormSection>
        <label>
          Task Title:
          <s.InputBar
            type="taskTitle"
            name="taskTitle"
            onChange={handelTitleChange}
          />
        </label>
      </s.FormSection>
      <s.FormSection>
        <s.SelectorDropdown>
          {" "}
          Priority:
          <s.Select id="taskPriority" onChange={handelPriorityChange}>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </s.Select>
        </s.SelectorDropdown>
      </s.FormSection>
      <s.FormSection>
        <s.SubmitBar type="submit" value="Submit" />
      </s.FormSection>
    </s.AddTaskBox>
  );
};

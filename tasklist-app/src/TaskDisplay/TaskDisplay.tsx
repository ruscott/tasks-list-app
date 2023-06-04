import React from "react";
import { CompletedCheckbox } from "../CompletedCheckbox/CompletedCheckbox";
import { DeleteTask } from "../DeleteTask/DeleteTask";
import { ProgressCheckbox } from "../ProgressCheckbox copy/ProgressCheckbox";
import { Task } from "../types";
import s from "./TaskDisplay.styles";

interface Props {
  onCompletedUpdate: (taskID: string, isCompleted: boolean) => void;
  task: Task;
  onProgressUpdate: (taskID: string, inProgress: boolean) => void;
}

export const TaskDisplay: React.FC<Props> = ({
  task,
  onCompletedUpdate,
  onProgressUpdate,
}) => {
  return (
    <s.TaskDisplay aria-label={task.name}>
      {" "}
      <s.TaskHeader> Task: {task.name}</s.TaskHeader>
      <p> Priority: {task.priority}</p>
      <ProgressCheckbox
        id={task.id}
        taskProgress={task.progress}
        onProgressUpdate={onProgressUpdate}
      />
      <CompletedCheckbox
        id={task.id}
        taskCompleted={task.completed}
        onCompletedUpdate={onCompletedUpdate}
      />
      <DeleteTask task={task} />
    </s.TaskDisplay>
  );
};

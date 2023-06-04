import { useState } from "react";
import s from "./CompletedCheckbox.styles";

interface Props {
  taskCompleted: boolean;
  id: string;
  onCompletedUpdate: (taskID: string, isCompleted: boolean) => void;
}

export const CompletedCheckbox: React.FC<Props> = ({
  taskCompleted,
  id,
  onCompletedUpdate,
}) => {
  const [isCompleted, setChecked] = useState(taskCompleted);

  const handelChange = () => {
    setChecked(!isCompleted);
    const completedPayload = (!taskCompleted).toString();

    fetch(`api/tasks/completed/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: completedPayload,
    })
      .then(() => onCompletedUpdate(id, isCompleted))
      .catch(() => {
        console.log("error");
      });
  };
  return (
    <div>
      <p> Is this task completed?</p>
      <input
        name="Completed Checkbox"
        type="checkbox"
        key={id}
        id={id}
        checked={isCompleted}
        onChange={handelChange}
      />
    </div>
  );
};

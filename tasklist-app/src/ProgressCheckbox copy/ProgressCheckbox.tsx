import { useState } from "react";
import s from "./ProgressCheckbox.styles";

interface Props {
  taskProgress: boolean;
  id: string;
  onProgressUpdate: (taskID: string, taskProgress: boolean) => void;
}

export const ProgressCheckbox: React.FC<Props> = ({
  taskProgress,
  id,
  onProgressUpdate,
}) => {
  const [inProgress, setChecked] = useState(taskProgress);
  //   useEffect(() => {
  //     setChecked(taskCompleted);
  //   }, [taskCompleted]);

  const handelChange = () => {
    setChecked(!inProgress);
    const inProgressPayload = (!taskProgress).toString();

    fetch(`api/tasks/progress/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: inProgressPayload,
    })
      .then(() => onProgressUpdate(id, taskProgress))
      .catch(() => {
        console.log("error");
      });
  };
  return (
    <div>
      <p> In Progress?</p>
      <input
        name="Progress Checkbox"
        type="checkbox"
        key={id}
        id={id}
        checked={inProgress}
        onChange={handelChange}
      />
    </div>
  );
};

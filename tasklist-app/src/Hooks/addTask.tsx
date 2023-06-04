import { Task } from "../types";

export default function addTask(
  taskJSON: string,
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>,
  tasks: Task[]
) {
  const addTask = (task: Task) => {
    setTasks((tasks) => {
      const updatedTasks = [...tasks, task];
      return updatedTasks;
    });
  };

  fetch("api/tasks/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: taskJSON,
  })
    .then((response) => {
      return response.json();
    })
    .then((task) => addTask(task))
    .catch(() => {
      console.log("Error");
    });
}

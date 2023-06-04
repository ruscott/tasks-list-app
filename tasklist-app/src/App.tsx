import "./App.css";
import { createContext, useState } from "react";
import { Task } from "./types";
import { TaskDisplay } from "./TaskDisplay/TaskDisplay";
import s from "./App.styles";
import { AddTask } from "./AddTask/AddTask";
import { useGetTasks } from "./Hooks/useGetTasks";
import { OrderBy } from "./OrderBy/OrderBy";
import { FilterButton } from "./FilterButton/FilterButton";
//TO DO:
// Add loading and error stuff USE FACTORY
// mobile friendly
// loading random jokes generator -- flop due to accounts etc. maybe random jokes?
// user assignment
// Page routers for sng

interface TaskContextI {
  onDelete(taskID: string): void;
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  tasks: Task[];
}

const taskContextDefaultValue: TaskContextI = {
  onDelete: () => {},
  setTasks: () => {},
  tasks: [],
};

export const taskContext = createContext<TaskContextI>(taskContextDefaultValue);

function App() {
  const [taskOrder, setTaskOrder] = useState<string>("DEFAULT");
  const [filter, setFilter] = useState<string>("ALL");

  const [loading, error, tasks, setTasks] = useGetTasks({ taskOrder, filter });

  const handelTaskCompletedUpdate = (taskID: string, isCompleted: boolean) => {
    setTasks((tasks) => {
      const taskToUpdate: Task = tasks.filter(
        (taskFilter) => taskFilter.id === taskID
      )[0];
      taskToUpdate.completed = isCompleted;
      console.log(taskToUpdate.completed);
      const filteredTasks = tasks.filter((task) => task.id !== taskID);
      const updatedTasks = [...filteredTasks, taskToUpdate];
      return updatedTasks;
    });
  };

  const handelTaskInProgressUpdate = (taskID: string, inProgress: boolean) => {
    setTasks((tasks) => {
      const taskToUpdate: Task = tasks.filter(
        (taskFilter) => taskFilter.id === taskID
      )[0];
      taskToUpdate.progress = inProgress;
      const filteredTasks = tasks.filter((task) => task.id !== taskID);
      const updatedTasks = [...filteredTasks, taskToUpdate];
      return updatedTasks;
    });
  };

  const handleDelete = (taskID: string) => {
    setTasks((tasks) => {
      const updatedTasks = tasks.filter((task) => task.id !== taskID);
      return updatedTasks;
    });
  };

  if (error && loading) {
    return <p>There has been an error</p>;
  }
  if (loading) {
    return (
      <div>
        <p> Loading tasks.....please wait</p>
      </div>
    );
  }
  return (
    <s.Main>
      <s.Title>Tasks List</s.Title>
      <OrderBy setTaskOrder={setTaskOrder}></OrderBy>
      <FilterButton setFilter={setFilter} filter={filter}></FilterButton>
      <s.Box>
        <taskContext.Provider
          value={{
            onDelete: handleDelete,
            setTasks: setTasks,
            tasks: tasks,
          }}
        >
          <s.ContainerForm>
            <AddTask />
          </s.ContainerForm>

          <s.ContainerTasks>
            {tasks?.map((task: Task) => (
              <TaskDisplay
                key={task.id}
                task={task}
                onCompletedUpdate={handelTaskCompletedUpdate}
                onProgressUpdate={handelTaskInProgressUpdate}
              ></TaskDisplay>
            ))}
          </s.ContainerTasks>
        </taskContext.Provider>
      </s.Box>
    </s.Main>
  );
}

export default App;

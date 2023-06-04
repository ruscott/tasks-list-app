import { useEffect, useState } from "react";
import { URLSearchParams } from "url";
import { Task } from "../types";

interface Props {
  taskOrder: string | null;
  filter: string;
}

export const useGetTasks = ({
  taskOrder,
  filter,
}: Props): [
  boolean,
  boolean,
  Task[],
  React.Dispatch<React.SetStateAction<Task[]>>
] => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const sort = taskOrder;
  const getJSON = JSON.stringify({ filter, sort });

  useEffect(() => {
    setLoading(true);
    console.log(getJSON);
    // const url = `/api/tasks/all`;
    const url = `/api/tasks/sort-filter/${filter}/${taskOrder}`;
    fetch(url, {
      method: "GET",
    })
      .then((r) => {
        console.log(r.status);
        return r.json();
      })
      .then((response) => {
        setTasks(response);
        console.log("HELLO RESPONSE");
        throw new Error("Whats happened? ");
      })
      .finally(() => {
        setLoading(false);
      })
      .catch(() => {
        setError(true);
      });
  }, [setTasks, taskOrder, getJSON]);
  return [loading, error, tasks, setTasks];
};

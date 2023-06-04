import React from "react";

interface Props {
  setFilter: (filter: string) => void;
  filter: string;
}
export const FilterButton: React.FC<Props> = ({ setFilter, filter }) => {
  const handelInProgress = () => {
    if (filter === "INPROGRESS") {
      setFilter("ALL");
    } else {
      setFilter("INPROGRESS");
    }
  };

  const handelCompleted = () => {
    if (filter === "COMPLETED") {
      setFilter("ALL");
    } else {
      setFilter("COMPLETED");
    }
  };

  return (
    <div>
      <button onClick={handelInProgress}> In Progress</button>
      <button onClick={handelCompleted}> Completed</button>
    </div>
  );
};

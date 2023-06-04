import React from "react";
import s from "./OrderBy.styles";

interface Props {
  setTaskOrder: (taskOrder: string) => void;
}

export const OrderBy: React.FC<Props> = ({ setTaskOrder }) => {
  const handelTaskOrderDesired = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
    setTaskOrder(e.target.value);
  };

  return (
    <s.OrderByBox>
      <p> Order by:</p>
      <s.OrderSelectorDropdown>
        <s.OrderSelect name="taskPriority" onChange={handelTaskOrderDesired}>
          <option value="DEFAULT">Default</option>
          <option value="DATE">Date Added</option>
          <option value="PRIORITY">Task Priority</option>
        </s.OrderSelect>
      </s.OrderSelectorDropdown>
    </s.OrderByBox>
  );
};

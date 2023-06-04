import { Selector } from "testcafe";

export const object = {
  title: Selector("h1").withExactText("Tasks List"),
  addTask: Selector("input").withAttribute("type", "taskTitle"),
  prioritySelector: Selector("select").withAttribute("id", "taskPriority"),
  prioritySelectorOption: Selector("select")
    .withAttribute("id", "taskPriority")
    .find("option"),
  submitButton: Selector("input").withAttribute("type", "submit"),
};

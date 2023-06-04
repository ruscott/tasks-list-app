import { fixture } from "testcafe";
import { object } from "../object/object";

fixture("First_test").page("http://localhost:3000");

test("Task List exists", async (t) => {
  await t.expect(object.title.exists).ok();
});

test("Enter new task", async (t) => {
  await t.expect(object.addTask.exists).ok();
  await t.typeText(object.addTask, "Task Test");
  await t
    .expect(object.prioritySelector.exists)
    .ok()
    .click(object.prioritySelector)
    .click(object.prioritySelectorOption.withText("Medium"));
  await t.click(object.submitButton);
});

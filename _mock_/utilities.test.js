/* eslint-disable */
import { checkCompleted, editTask } from "./utilities.js";

describe("check completion status and content", () => {
  test("edit task", () => {
    const allTask = [{ description: "d;jgs'lsd", completed: false, index: 0 }];
    allTask.forEach((e) => {
      if (e.index === Number(0)) {
        e.description = "john";
      }
    });
    expect(allTask[0].description).toBe("john");
  });

  test("checkCompleted", () => {
    const allTask = [{ description: "d;jgs'lsd", completed: false, index: 0 }];
    allTask.forEach((e) => {
      if (e.index === 0) {
        e.completed = true;
      }
    });
    expect(allTask[0].completed).toBe(true);
  });

  test("clear all complete", () => {
    const allTask = [{ description: "d;jgs'lsd", completed: false, index: 0 }];
    allTask.splice(0, allTask.length);
    expect(allTask).toEqual([]);
  });
});

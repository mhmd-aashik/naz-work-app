import TasksCard from "@/components/TasksCard";
import { getAllTasks } from "@/lib/actions/task.action";
import React from "react";

const Task = async () => {
  const tasks = await getAllTasks();

  console.log(tasks, "task");

  return (
    <div className="mt-10 max-w-5xl mx-auto px-2">
      <div className="py-5">
        <h1 className="text-3xl font-bold">All Tasks</h1>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        {tasks?.map((task) => (
          <TasksCard
            key={task.TaskID}
            id={task.TaskID}
            description={task.TaskDescription || ""}
            assignedEmployeeID={task.AssignedEmployeeID || 0}
            skillRequired={task.SkillRequired || ""}
            status={task.Status}
            scheduledDate={task.ScheduledDate || ""}
            dueDate={task.DueDate || ""}
            assignedEmployee={{
              name: task.AssignedEmployee
                ? task.AssignedEmployee.Name || ""
                : "",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Task;

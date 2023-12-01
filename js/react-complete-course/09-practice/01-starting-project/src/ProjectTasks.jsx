import { useRef, useState } from 'react';

export default function ProjectTasks({ project, onTaskAdded }) {
  const taskInput = useRef(null);

  const onAddTaskClick = function (e) {
    project.tasks.push(taskInput.current.value);
    onTaskAdded(project.tasks);
    taskInput.current.value = '';
  };

  const onClearTaskClick = function (e) {
    project.tasks.push(taskInput.current.value);
    console.log(project.tasks);
    console.log(e.target);
  };

  return (
    <>
      <h2 className="text-xl font-bold text-stone-700 my-4">Tasks</h2>
      <div className="flex justify-start">
        <input ref={taskInput} className="w-64 px-4 py-1 rounded-sm bg-stone-200" name="newTask" />
        <button onClick={onAddTaskClick} className="text-stone-700 hover:text-stone-950">
          Add task
        </button>
      </div>
      <menu>
        {project.tasks?.map((x, i) => (
          <li className="flex justify-between">
            <ul key={`task_${i}`} className="p-4 mt-4 rounded-md bg-stone-100">
              {x}
            </ul>
            <button
              key={i}
              onClick={onClearTaskClick}
              className="text-stone-600 hover:text-stone-950">
              Clear
            </button>
          </li>
        ))}
      </menu>
    </>
  );
}

import { useState, useRef } from 'react';
import Sidebar from './Sidebar';
import NoProjectSelected from './NoProjectSelected';
import ProjectInfo from './ProjectInfo';
import NewProjectModal from './NewProjectModal';

const projects = [
  { id: 1, name: 'Test', description: 'Test project', tasks: ['task1', 'task 2'] },
  { id: 2, name: 'Something', description: 'Something project', tasks: ['task1', 'task 2'] }
];

function App() {
  const [selectedProhjectIndex, setSelectedProjectIndex] = useState(-1);
  const [tasks, setTasks] = useState(projects[selectedProhjectIndex]);
  const [projects, setTasks] = useState(projects[selectedProhjectIndex]);

  const selectedProjectChangedCallback = function (index) {
    setSelectedProjectIndex(index);
  };

  const onTaskListChanged = function (tasks) {
    projects[selectedProhjectIndex].tasks = tasks;
    setTasks(projects[selectedProhjectIndex]);
  };

  const onProjectListChanged = function (projects) {
    projects[selectedProhjectIndex].tasks = tasks;
    setTasks(projects[selectedProhjectIndex]);
  };

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <Sidebar
          projects={projects}
          onProjectChange={selectedProjectChangedCallback}
          onAddProject={onProjectListChanged}
        />
        {selectedProhjectIndex < 0 ? (
          <NoProjectSelected />
        ) : (
          <ProjectInfo project={projects[selectedProhjectIndex]} onTaskAdded={onTaskListChanged} />
        )}
      </main>
    </>
  );
}

export default App;

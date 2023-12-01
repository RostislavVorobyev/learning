import ProjectTasks from './ProjectTasks';

export default function ProjectInfo({ project, onTaskAdded }) {
  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-stone-700 my-4">{project.name}</h2>
            <p className="text-stone-600 mb-4">{new Date().toDateString()}</p>
          </div>
          <div>
            <button className="text-stone-800 hover:text-stone-950">Delete</button>
          </div>
        </div>
      </header>
      <ProjectTasks project={project} onTaskAdded={onTaskAdded}></ProjectTasks>
    </div>
  );
}

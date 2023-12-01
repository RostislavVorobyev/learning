import ProjectList from './ProjectList';
import NewProjectModal from './NewProjectModal';
import { useRef } from 'react';

export default function Sidebar({ projects, onProjectChange }) {
  const modal = useRef();

  const onProjectAddClick = function () {
    console.log(modal.current);
    modal.current.open();
  };

  return (
    <>
      <NewProjectModal projects={projects} ref={modal}></NewProjectModal>

      <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
        <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">YOUR PROJECTS</h2>
        <button
          onClick={onProjectAddClick}
          className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">
          +Add projects
        </button>
        <ProjectList onProjectChange={onProjectChange} projects={projects}></ProjectList>
      </aside>
    </>
  );
}

export default function ProjectList({ projects, onProjectChange }) {
  return (
    <>
      <h2 className="text-xl font-bold text-stone-700 my-4">Learning React</h2>
      {projects.map((p, i) => (
        <ul onClick={() => onProjectChange(i)} key={i} className="text-stone-600 mb-4">
          {p.name}
        </ul>
      ))}
    </>
  );
}

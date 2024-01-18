export default function SimplePlaceholder() {
  function getDate() {
    const date = new Date().toDateString();

    return date;
  }

  return (
    <div>
      <p>It's alive</p>
      <p>{getDate()}</p>
    </div>
  );
}

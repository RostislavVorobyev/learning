import { forwardRef, useImperativeHandle, useRef } from 'react';

const NewProjectModal = forwardRef(function (props, ref) {
  const dialogRef = useRef();
  const addRef = useRef();

  const onPrjectAdd = function () {
    props.onAddProject();
    dialogRef.current.close();
  };

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialogRef.current.showModal();
      },
      close() {
        dialogRef.current.closeModal();
      }
    };
  });

  return (
    <dialog ref={dialogRef} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
      <h2>Your new project</h2>
      <label for="name">Project name:</label>
      <input name="name"></input>

      <button ref={addRef} onClick={onPrjectAdd}>
        Add
      </button>
    </dialog>
  );
});

export default NewProjectModal;

import { useRef } from "react";

const NewTodo: React.FC<{onAddTodo: (text: string) => void}> = (props) => {
    const formInput = useRef<HTMLInputElement>(null);

    function onSubmitHandler(e : React.FormEvent){
        e.preventDefault();

        const text = formInput.current!.value;

        if(text.trim().length === 0){
            return;
        }
        props.onAddTodo(text)
    }

    return <form onSubmit={onSubmitHandler}>
        <label htmlFor="new-todo">Todo text</label>
        <input id="new-todo" type="text" ref={formInput}></input>
        <button>Add</button>
    </form>
}

export default NewTodo;
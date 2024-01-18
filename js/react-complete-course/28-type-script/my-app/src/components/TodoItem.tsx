import TodoType from "../types/Todo"
import Todo from "../types/Todo"
const TodoItem : React.FC<{item: Todo, onRemoveTodo : (id: string) => void}> = ({item, onRemoveTodo}) => {
    
    function handleRemoveTodo(id : string){
        onRemoveTodo("a");
    }

    return <li key={item.id} onClick={handleRemoveTodo.bind(null, item.id)}>{item.text}</li>
}

export default TodoItem;
//set a type used by React.FC type in generic
 //children is optional

import Todo from "../types/Todo";
import TodoItem from "./TodoItem";

 //describe shape of our components and tailor to our needs.
 const Todos: React.FC<{items: Todo[], onRemove: (id: string) => void}> = ({items, onRemove}) => {
    return <ul>
        {items.map(x => <TodoItem item={x} onRemoveTodo={onRemove}></TodoItem>)}
    </ul>
 }

//react+ts component return rendering content too
    

export default Todos;
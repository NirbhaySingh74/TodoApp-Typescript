import { Todo } from "./constant";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import "./style.css";
type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };
  return (
    <form action="" className="todos_single">
      {todo.isDone ? (
        <s className="todos__single--text">{todo.todo}</s>
      ) : (
        <span className="todos__single--text">{todo.todo}</span>
      )}
      <div className="icon">
        <span>
          <AiFillEdit />
        </span>
        <span>
          <AiFillDelete onClick={() => handleDelete(todo.id)} />
        </span>
        <span>
          <MdDone onClick={() => handleDone(todo.id)} />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;

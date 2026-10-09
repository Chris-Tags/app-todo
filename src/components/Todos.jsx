import Item from "./Item";
import "./todosApp.scss";

function Todos({ todos, modifyTask }) {
  return (
    <ul className="listTodo">
      {todos.map((todo) => (
        <li key={todo.taskId}>
          <Item todos={todos} todo={todo} modifyTask={modifyTask} />
        </li>
      ))}
    </ul>
  );
}

export default Todos;

import { useState } from "react";
import { FaPen, FaTrash } from "react-icons/fa";
import "./todosApp.scss";

function Item({ todo, modifyTask }) {
  const [edit, setEdit] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(todo.taskName);

  const handleDelete = () => {
    modifyTask(todo.taskId, "Delete");
  };

  const handleEditSubmit = (event) => {
    event.preventDefault();

    modifyTask(todo.taskId, "Edit", taskToUpdate);
    setEdit(false);
  };

  const handleCancelEdit = () => {
    setTaskToUpdate(todo.taskName);
    setEdit(false);
  };

  if (edit) {
    return (
      <div className="todoContainer">
        <form onSubmit={handleEditSubmit}>
          <input
            type="text"
            value={taskToUpdate}
            onChange={(event) => setTaskToUpdate(event.target.value)}
            autoFocus
          />
          <button type="submit">Modifier</button>
          <button type="button" onClick={handleCancelEdit}>
            Annuler
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="cardTodo">
      <p>{todo.taskName}</p>

      <div className="settings">
        <button
          type="button"
          onClick={() => setEdit(true)}
          aria-label={`Modifier la tâche ${todo.taskName}`}
        >
          <FaPen />
        </button>

        <button
          type="button"
          onClick={handleDelete}
          aria-label={`Supprimer la tâche ${todo.taskName}`}
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
}

export default Item;

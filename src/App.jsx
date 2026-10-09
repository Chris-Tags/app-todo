import { useState } from "react";
import "./App.scss";
import Todos from "./components/Todos";
import "./components/todosApp.scss";

function App() {
  const [addTask, setAddTask] = useState("");
  const [tasksList, setTasksList] = useState([]);

  const handleInput = (event) => {
    setAddTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const taskName = addTask.trim();
    const taskAlreadyExists = tasksList.some(
      (task) => task.taskName.toUpperCase() === taskName.toUpperCase(),
    );

    if (!taskName || taskAlreadyExists) {
      setAddTask("");
      return;
    }

    setTasksList([
      ...tasksList,
      {
        taskId: `${taskName}-${tasksList.length}`,
        taskName,
      },
    ]);

    setAddTask("");
  };

  const modifyTask = (id, type, task = "") => {
    if (type === "Delete") {
      setTasksList((currentTasks) =>
        currentTasks.filter((item) => item.taskId !== id),
      );
      return;
    }

    const taskName = task.trim();
    const taskAlreadyExists = tasksList.some(
      (item) =>
        item.taskId !== id &&
        item.taskName.toUpperCase() === taskName.toUpperCase(),
    );

    if (!taskName || taskAlreadyExists) return;

    setTasksList((currentTasks) =>
      currentTasks.map((item) =>
        item.taskId === id ? { ...item, taskName } : item,
      ),
    );
  };

  return (
    <>
      <div className="todoContainer">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={addTask}
            onChange={handleInput}
            placeholder="Ajouter une tâche"
          />
          <button type="submit">Créer une tâche</button>
        </form>
      </div>

      <Todos todos={tasksList} modifyTask={modifyTask} />
    </>
  );
}

export default App;

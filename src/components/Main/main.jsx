import css from './main.module.scss'
import { useState } from "react";
import DeleteIcon from "../Column/DeleteIcon";

function Main({ tasks, setTasks }) {

  const columns = [
    { name: "Backlog", key: "backlog" },
    { name: "Ready", key: "ready" },
    { name: "In Progress", key: "inProgress" },
    { name: "Finished", key: "done" },
  ];

  const [newTask, setNewTask] = useState("");

  // Добавление новой задачи
  const addTask = () => {
    if (newTask.trim() !== "") {
      const taskId = Date.now().toString();
      setTasks((prev) => ({
        ...prev,
        backlog: [...prev.backlog, { id: taskId, text: newTask.trim() }],
      }));
      setNewTask("");
    }
  };

  // Перемещение задачи
  const moveTask = (taskId, fromKey, toKey) => {
    if (!taskId || fromKey === toKey) return;

    setTasks((prev) => {
      const task = prev[fromKey].find((t) => t.id === taskId);
      if (!task) return prev;

      return {
        ...prev,
        [fromKey]: prev[fromKey].filter((t) => t.id !== taskId),
        [toKey]: [...prev[toKey], task],
      };
    });
  };

  const handleDeleteTask = (taskId, columnKey) => {
    setTasks((prev) => ({
      ...prev,
      [columnKey]: prev[columnKey].filter((task) => task.id !== taskId),
    }));
  };


  return (
    <main className={css.main}>
      <div className={css.main__wrapper}>
        {columns.map((column, index) => (
          <div key={column.key} className={css.main__column}>
            <h3>{column.name}</h3>
            {column.key === "backlog" ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <input
                  className={css.main__column__input}
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Новая задача"
                />

                {/* Список задач */}
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {tasks.backlog.map((task) => (
                    <li key={task.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#FFFFFF', padding:'7px', borderRadius:'5px',}}>
                      <span>{task.text}</span>
                      {/* Кнопка удаления */}
                      <button onClick={() => handleDeleteTask(task.id, 'backlog')}>
                        <DeleteIcon />
                      </button>
                    </li>
                  ))}
                </ul>

                {/* Кнопка добавления */}
                <button
                  className={css.btn__addcard}
                  onClick={addTask}
                  disabled={newTask.length === 0}
                >
                  {newTask.length === 0 ? "+ Add card" : "Submit"}
                </button>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>


                <select
                  style={{ fontSize: "16px" }}
                  onChange={(e) =>
                    moveTask(e.target.value, columns[index - 1]?.key || "", column.key)
                  }
                  defaultValue=""
                >
                  <option value="">Выберите задачу</option>
                  {/* Задачи из предыдущей колонки */}
                  {tasks[columns[index - 1]?.key || ""]?.map((task) => (
                    <option key={task.id} value={task.id}>
                      {task.text}
                    </option>
                  ))}
                </select>

                <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {tasks[column.key].map((task) => (
                    <li key={task.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#FFFFFF', padding:'7px', borderRadius:'5px'}}>
                      <span>{task.text}</span>
                      {/* Кнопка удаления */}
                      <button onClick={() => handleDeleteTask(task.id, column.key)}>
                        <DeleteIcon />
                      </button>
                    </li>
                  ))}
                </ul>


              </div>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}

export default Main;
import {useState} from "react";
import css from "../Column/column.module.scss";
import DeleteIcon from "./DeleteIcon";


function Column(props) {
  const [isAdding, setIsAdding] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [newTaskText, setNewTaskText] = useState('');

  // Обработчик для + Add card
  const handleAddClick = () => {
    setIsAdding(true);
  };


  // Обработчик для Submit
  const handleSubmit = () => {
    if (newTaskText.trim() !== '') {
      setTasks([...tasks, newTaskText]); // добавляем новую задачу
      setNewTaskText(''); // очищаем поле ввода
    }
    setIsAdding(false); // скрываем форму после добавления
  };

  const handleInputChange = (e) => {
    setNewTaskText(e.target.value);
  };

  const handleDeleteTask = (taskIndex) => {
    setTasks(tasks.filter((_, index) => index !== taskIndex));
  };

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className={css.column}>
      <h2>{props.title}</h2>

      <ul style={{display: 'flex', flexDirection: 'column', gap: '10px',}}>
        {tasks.map((task, index) => (
          <li key={index}
              className={css.task}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
          >
            <span>{task}</span>
            {hoveredIndex === index && (
              <button
                className={css.task__btn__remove}
                onClick={() => handleDeleteTask(index)}
              >
                <DeleteIcon />
              </button>
            )}
          </li>

        ))}
      </ul>

      {isAdding ? (
        <>
          <input className={css.column__input}  value={newTaskText}  onChange={handleInputChange}/>
          <div style={{display: 'flex', gap: '10px',}}>
            <button className={css.btn__submit} onClick={handleSubmit}>Submit</button>
            <button className={css.btn__hide} onClick={() => setIsAdding(false)}>Hide</button>
          </div>
        </>
      ) : (
        <button className={css.btn__addcard} onClick={handleAddClick}>+ Add card</button>
      )}

    </div>
  );
}

export default Column;
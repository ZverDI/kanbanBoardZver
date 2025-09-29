import "./taskDeatail.scss"
import { useParams, Link } from 'react-router-dom';
import DeleteIcon from "../Icon/DeleteIcon";
import { useState, useEffect } from 'react';

export function TaskDetail({ tasks }) {
  const { id } = useParams();

  const task = [
    ...tasks.backlog,
    ...tasks.ready,
    ...tasks.inProgress,
    ...tasks.done,
  ].find((task) => task.id === id);

  const [taskText, setTaskText] = useState(() => {
    const savedText = localStorage.getItem(`task-${id}-text`);
    return savedText !== null ? savedText : (task ? task.text : '');
  });

  // Обновляем localStorage при изменении текста
  useEffect(() => {
    if (task) {
      localStorage.setItem(`task-${id}-text`, taskText);
    }
  }, [taskText, task, id]);

  if (!task) {
    return (
      <div>
        <h2>This task has no description</h2>
        <Link to="/">Вернуться к доске</Link>
      </div>
    );
  }

  return (
    <div className="task-detail">
      <div className="task-detail__wrapper">
        <div className="task-detail__wrapper-main">
          <h2>{task.text}</h2>
          <textarea
            className='task-detail__wrapper-textarea'
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
          />
        </div>
        <div>
          <Link to="/">
            <DeleteIcon w={23} h={23}/>
          </Link>
        </div>
      </div>
    </div>
  );
}


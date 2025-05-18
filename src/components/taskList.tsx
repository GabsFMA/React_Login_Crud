import { useNavigate } from "react-router-dom";

interface Task {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
}

interface TaskListProps {
  taskList: Task[];
  onTaskClick: (taskId: string) => void;
  onClickDeleteTask: (taskId: string) => void;
}

function TaskList({ taskList, onTaskClick, onClickDeleteTask }: TaskListProps) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task: Task) {
    navigate(`/task?id=${task.id}`);
  }

  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {taskList.map((task) => (
        <li key={task.id} className="flex gap-2 items-center">
          <button
            onClick={() => onTaskClick(task.id)}
            className="w-full bg-slate-400 text-white p-2 rounded-md text-left"
          >
            <span className={task.isCompleted ? "line-through" : ""}>
              {task.title}
            </span>
          </button>

          <button
            onClick={() => onSeeDetailsClick(task)}
            className="bg-slate-400 p-2 text-white rounded-md"
            title="Ver detalhes"
          >
            ➡️
          </button>

          <button
            onClick={() => onClickDeleteTask(task.id)}
            className="bg-slate-400 p-2 text-white rounded-md"
            title="Excluir tarefa"
          >
            🗑
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;

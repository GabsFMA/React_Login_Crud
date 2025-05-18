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
    <ul className="space-y-3 bg-[#3A2F2F] p-4 rounded-2xl shadow-md">
      {taskList.map((task) => (
        <li
          key={task.id}
          className="flex gap-2 items-center text-white bg-[#1E1A1A] rounded-lg p-2"
        >
          <button
            onClick={() => onTaskClick(task.id)}
            className="flex-1 text-left px-3 py-2 rounded-md hover:bg-[#2D2525] transition-colors"
          >
            <span
              className={`${
                task.isCompleted
                  ? "line-through text-slate-400"
                  : "text-white"
              }`}
            >
              {task.title}
            </span>
          </button>

          <button
            onClick={() => onSeeDetailsClick(task)}
            className="bg-blue-600 hover:bg-blue-700 p-2 rounded-md transition-colors"
            title="Ver detalhes"
          >
            ➡️
          </button>

          <button
            onClick={() => onClickDeleteTask(task.id)}
            className="bg-red-600 hover:bg-red-700 p-2 rounded-md transition-colors"
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

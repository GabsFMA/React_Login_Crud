import TaskList from "../components/taskList";
import AddTask from "../components/addTask";
import { BACK_END_API_TASKS_URL } from "../config";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 

export interface Task {
  _id: string;
  title: string;
  description: string;
  isCompleted: boolean;
}

interface AdaptedTask {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
}

function UserPage() {
  const navigate = useNavigate(); 
  const [taskList, setTaskList] = useState<Task[]>(
    JSON.parse(localStorage.getItem("tasklist") || "[]")
  );

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(BACK_END_API_TASKS_URL, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Erro ao buscar tarefas");
        }

        const data = await response.json();
        setTaskList(data);
      } catch (error) {
        console.error("Erro ao buscar tarefas:", error);
      }
    };

    fetchTasks();
  }, []);

  const onTaskClick = async (taskId: string) => {
    const taskToUpdate = taskList.find((t) => t._id === taskId);
    if (!taskToUpdate) return;

    try {
      const token = localStorage.getItem("token");

      const response = await fetch(`${BACK_END_API_TASKS_URL}${taskId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ completed: !taskToUpdate.isCompleted }),
      });

      if (!response.ok) {
        throw new Error("Erro ao atualizar tarefa");
      }

      const updatedTask = await response.json();

      const updatedTasks = taskList.map((t) =>
        t._id === taskId
          ? {
              ...updatedTask,
              isCompleted: updatedTask.completed,
            }
          : t
      );
      setTaskList(updatedTasks);
    } catch (error) {
      console.error("Erro ao atualizar tarefa:", error);
    }
  };

  const onClickDeleteTask = async (taskId: string) => {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch(`${BACK_END_API_TASKS_URL}${taskId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Erro ao deletar tarefa");
      }

      setTaskList(taskList.filter((task) => task._id !== taskId));
    } catch (error) {
      console.error("Erro ao deletar tarefa:", error);
    }
  };

  const onClickSubmitButton = async (title: string, description: string) => {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch(BACK_END_API_TASKS_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ title, description }),
      });

      if (!response.ok) {
        throw new Error("Erro ao criar tarefa");
      }

      const newTask = await response.json();
      setTaskList([...taskList, newTask]);
    } catch (error) {
      console.error("Erro ao criar tarefa:", error);
    }
  };

  const onLogoutClick = () => {
    localStorage.removeItem("token");
    navigate("/"); 
  };

  const formattedTasks: AdaptedTask[] = taskList.map((task) => ({
    id: task._id,
    title: task.title,
    description: task.description,
    isCompleted: task.isCompleted,
  }));

return (
  <div className="w-screen h-screen bg-[#1E1A1A] flex justify-center items-center">
    <div className="w-full max-w-md bg-[#2A2424] p-6 rounded-2xl shadow-lg space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl text-white font-bold">Perpetual Tarefas</h1>
        <button
          onClick={onLogoutClick}
          className="bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700"
        >
          Sair
        </button>
      </div>

      <AddTask onClickSubmitButton={onClickSubmitButton} />

      <div className="max-h-[400px] overflow-y-auto">
        <TaskList
          taskList={formattedTasks}
          onTaskClick={onTaskClick}
          onClickDeleteTask={onClickDeleteTask}
        />
      </div>
    </div>
  </div>
);
}

export default UserPage;
